const express = require("express");
const app = express();
const axios = require("axios");
const bodyparser = require("body-parser");
var cors = require("cors");
app.use(cors({ origin: true }));

const port = 4000;
app.use(bodyparser.json());
app.post("/devices/", async (req, res) => {
  var devices = req.body.devices;
  const allowedOrigins = [
    "http://localhost:3000",
    "http://172.19.192.1:3000",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  try {
    const deviceStatus = await axios.post( "https://dfb138600067.ngrok.io/devices/", {
      'devices': devices,
    });
    
    return res.json({...deviceStatus.data,...{updatedat:new Date()}});
  } catch (err) {
    console.error(err.message);
    return res.status(404).json({ msg: 'Data not found' });
  }
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
