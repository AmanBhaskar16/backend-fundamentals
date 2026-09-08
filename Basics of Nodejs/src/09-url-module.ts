// https://api.example.com/users?page=2&limit=10

function runUrlDemo() : void {
    // How to create url object from url string
    const apiUrl = new URL("https://api.example.com/users?page=2&limit=10&sort=latest");

    console.log("url link : " ,apiUrl.href);
    console.log("url protocol : " ,apiUrl.protocol);
    console.log("url hostname : " ,apiUrl.hostname);
    console.log("url pathname : " ,apiUrl.pathname);
    console.log("url search : " ,apiUrl.search);

    // Search Params : ?

    const page = apiUrl.searchParams.get("page");
    const limit = apiUrl.searchParams.get("limit");
    const sorted = apiUrl.searchParams.get("sort");

    console.log("Page : ",page);
    console.log("Limit : ",limit);
    console.log("Sorted : ",sorted);

    apiUrl.searchParams.set("Page","10");
    console.log("Page : ",page);

    // Url Search Params -> When we want to build some query string

    const queryParams = new URLSearchParams({
        search : "node js",
        page : "1",
        limit : "5"
    })

    console.log(queryParams.toString()); // search=node+js&page=1&limit=5
}

runUrlDemo();