import http, { IncomingMessage, ServerResponse } from "http";

const PORT = 3000;

// POST /users ke body ka expected structure
type CreateUserBody = {
    name?: string;
    email?: string;
};

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {

        // method undefined ho to GET maan lo
        const method = req.method ?? "GET";

        // req.url ko proper URL object me convert karne ke liye base URL chahiye
        const requestUrl = new URL(
            req.url ?? "/",
            `http://${req.headers.host}`
        );

        // Sirf route/path nikalne ke liye
        const pathName = requestUrl.pathname;

        // Response plain text me bhej rahe hain
        res.setHeader("Content-Type", "text/plain");

        // POST /users route handle karta hai
        if (method === "POST" && pathName === "/users") {

            // Body chunks ko temporarily store karne ke liye
            const chunks: Buffer[] = [];

            // Body ek saath nahi, chunks me aa sakti hai
            req.on("data", (chunk: Buffer) => {
                chunks.push(chunk);
            });

            // Puri request body receive hone ke baad chalta hai
            req.on("end", () => {
                try {
                    // Saare chunks ko jod kar string banayi
                    const rawBody = Buffer.concat(chunks).toString("utf-8");

                    // Empty body ko reject karne ke liye
                    if (!rawBody) {
                        res.statusCode = 400;
                        res.end("Req body is required");
                        return;
                    }

                    // JSON string ko JS object me convert karta hai
                    const body = JSON.parse(rawBody) as CreateUserBody;

                    // Required fields validate kar rahe hain
                    if (!body.name || !body.email) {
                        res.statusCode = 400;
                        res.end("Both name and email are required.");
                        return;
                    }

                    // Resource successfully create hua
                    res.statusCode = 201;
                    res.end(
                        `User created: ${body.name} and ${body.email}`
                    );
                } catch (error) {
                    // JSON syntax invalid ho to
                    res.statusCode = 400;
                    res.end("Invalid JSON body");
                }
            });

            // Request stream read karte waqt error aaye to
            req.on("error", () => {
                res.statusCode = 500;
                res.end("Failed to read req body.");
            });

            // Neeche ka 404 execute hone se rokta hai
            return;
        }

        // Koi matching route na mile to
        res.statusCode = 404;
        res.end("Route not found.");
    }
);

// Server ko port 3000 par start karta hai
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});