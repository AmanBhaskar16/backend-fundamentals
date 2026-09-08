import http,{IncomingMessage,ServerResponse} from "http";

const PORT = 3000;

const server = http.createServer((req : IncomingMessage,res:ServerResponse)=>{
    const method = req.method ?? "Get";

    // http://localhost:3000/users => req.url : /users
    const requestUrl = new URL(req.url ?? "/",`http:${req.headers.host}`);
    
    const pathName = requestUrl.pathname;
    
    res.setHeader("Content-Type","text/plain");

    if(method == "GET" && pathName === "/health"){
        res.statusCode = 200;
        res.end("Server is healthy");
        return;
    }

    if(method == "GET" && pathName === "/users"){
        res.statusCode = 200;
        res.end("List of Users.");
        return;
    }

    if(method == "POST" && pathName === "/users"){
        res.statusCode = 201;
        res.end("User created successfully.");
        return;
    }

    res.statusCode = 404;
    res.end("Not found");
})

server.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
})