import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

const books = [
  { name: "The Hobbit", year: 1937 },
  { name: "Dune", year: 1965 },
  { name: "Harry Potter", year: 1997 },
  { name: "The BFG", year: 1982 },
];

app.get("/", (request, response) => {
  response.json("Woahay! It's working!");
});

app.get("/books", (request, response) => {
  response.json(books);
});

app.listen(8090, () => console.log("App is running in 8090"));
