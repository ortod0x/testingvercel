const http = require("http");
const httpProxy = require("http-proxy");

const target = "http://95.179.151.4:3000";

const proxy = httpProxy.createProxyServer({
  target,
  changeOrigin: true,
});

const server = http.createServer((req, res) => {
  proxy.web(req, res, {}, (err) => {
    console.error("Proxy error:", err);
    res.writeHead(500);
    res.end("Proxy error");
  });
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Reverse proxy running at http://localhost:3000");
  console.log("Forwarding to:", target);
});
