const express = require("express")
const ImageKit = require("imagekit");
const cors = require("cors");

const port = process.env.PORT || 3000;

const app = express()

app.use(cors({
  origin: process.env.CLIENT_URL
}));

const imageKit = new ImageKit({
    publicKey : process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey : process.env.IMAGE_KIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGE_KIT_END_POINT
});

app.get("/api/upload", (req, res) => {
  const result = imageKit.getAuthenticationParameters();
  res.send(result);
})

app.listen(port, () => {
  console.log("Server running on port", port)
})