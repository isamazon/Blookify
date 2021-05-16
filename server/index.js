const express = require("express");
const bodyParser = require("body-parser");
const mongoos = require("mongoose");
const cors = require("cors");
const { Book } = require("./model/Book.model");
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://isamazon:Bighead0622@cluster0.c3xnu.mongodb.net/test";
const PORT = process.env.PORT || 5000;

mongoos
  .connect(CONNECTION_URL, {
    useNEwUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT} `))
  )
  //   What kobi taught me
  .catch((error) => console.log(error.message));

app.get("/books", (req, res) => {
  Book.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/addBook", (req, res) => {
  let title = req.params.title;
  let finished = req.params.finished;
  const newBook = new Book({
    title: title,
    finished: finished,
  });
  newBook.save();
  res.json(newBook);
});

mongoos.set("useFindAndModify", false);

// Mongo db basek
