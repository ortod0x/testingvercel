import httpProxy from "http-proxy";

const target = "http://95.179.151.4:3000";
const proxy = httpProxy.createProxyServer({ target, changeOrigin: true });

export default function handler(req, res) {
  return new Promise((resolve, reject) => {
    proxy.web(req, res, {}, (err) => {
      if (err) {
        console.error("Proxy error:", err);
        res.status(500).json({ error: "Proxy error" });
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

export const config = {
  api: { bodyParser: false, externalResolver: true },
};
