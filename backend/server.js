const app = require("./app");

const PORT = 5000;
const HOST = "127.0.0.1";
app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
