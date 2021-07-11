require("dotenv").config();

const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", require("./routes/userRouter"));

const PORT = 5000 || process.env.PORT;
URI = process.env.DB_MONGODB_USER;

mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("DB connected");
  }
);

app.get("/", (req, res) => {
  res.json({ msg: "Welcome my web" });
});

app.listen(PORT, () => {
  console.log(`Server on started ${PORT}`);
});
