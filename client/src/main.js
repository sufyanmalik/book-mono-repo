const app = document.getElementById("app");

//make a fetch to our server
async function getBooks() {
  const response = await fetch("http://localhost:8090/books");
  const data = await response.json();
  console.log(data);

  data.forEach((book) => {
    const p = document.createElement("p");
    p.textContent = `${book.name} - ${book.year}`;
    app.appendChild(p);
  });
}

getBooks();

//put info from fetch onto the page

//deploy both client and server to render

//fix the issue where the client doesnt work properly on render
