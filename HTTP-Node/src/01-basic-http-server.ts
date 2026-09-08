import http,{type IncomingMessage,ServerResponse} from "http";

const PORT = 3000;

// Property / Method  |	What it gives you	 |     Example
// req.method	      |   HTTP method	     |  "GET", "POST"
// req.url	          |   Requested URL	     |  "/users?id=10"
// req.headers	      |   All request headers|	{ host: "...", ... }
// req.body	          |   Request body*	     |  { name: "John" }
// req.params	      |   Route parameters*	 |  { id: "123" }
// req.query	      |   Query parameters*	 |  { page: "2" }
// req.cookies	      |   Cookies*	         |  { sessionId: "..." }
// req.ip	          |   Client IP*	     |  "127.0.0.1"
// req.path	          |   URL path*	         |  "/users"
// req.protocol	      |   Protocol*	         |  "http" / "https"
// req.hostname	      |   Host name*	     |  "example.com"
// req.get(name)	  |   Get a header*	     |  req.get("Authorization")


const server = http.createServer((req : IncomingMessage,res:ServerResponse)=>{
    // get -> read data
    // post -> create data
    // put -> replace data
    // patch -> update partial data
    // delete -> delete data
    const method = req.method;

    // In which path the client is actually requesting
    const url = req.url;

    // Extra information we are sending from client side to server
    const userAgent = req.headers["user-agent"];

    // Setup http status code
    // 200 -> ok 
    // 201 -> created
    // 400 -> Bad request
    // 401 -> Unauthorized
    // 403 -> Forbidden
    // 404 -> Not found
    // 500 -> Internal server error
    res.statusCode = 200;

    // The type of response 
    res.setHeader('Content-Type','text/plain');

    // To end the response
    res.end(`Basic http node server : ${method}: ${url} : ${userAgent}`);

});

server.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
})