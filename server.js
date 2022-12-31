const PORT = 8000;
const express = require("express");
const cors = require("cors");
const env = require("dotenv").config();
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const token = process.env.TOKEN;
const url = process.env.URL;

app.post("/tickets", async (req, res) => {
  const formData = req.body.formData;

  const options = {
    method: "POST",
    headers: {
      Accepts: "application/json",
      "X-Cassandra-Token": token,
      "Content-Type": "application/json",
    },
    data: formData,
  };
  try {
    const response = await axios.post(url, options);
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
