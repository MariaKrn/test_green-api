const http = require("http");

const API_URL = "https://api.green-api.com/";

const server = http.createServer(async (req, res) => {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  ); // Allow these methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allow these headers

  // Handle CORS preflight requests (OPTIONS)
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  const url = API_URL + req.url.replace("/proxy/", "");
  let body = "";

  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", async () => {
    console.log("body", JSON.stringify(body));
    console.log("url", url);
    try {
      const fetchResponse = await fetch(url, {
        method: req.method,
        headers: { "Content-Type": "application/json" },
        body: body || null,
      });

      const data = await fetchResponse.json();
      res.writeHead(fetchResponse.status, {
        "Content-Type": "application/json",
      });
      res.end(JSON.stringify(data));
    } catch (error) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: error.message }));
    }
  });
});

server.listen(4000, () =>
  console.log("HTTP proxy running at http://localhost:4000"),
);
