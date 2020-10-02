// Import the books array into the file using require()
const bookStore = require ('./books.js');

let arrBooks = bookStore.length;

// Display all book titles and their authors in the format below
for(let b=0; b<arrBooks; b++)
{
    console.log("\n" + "Book: " +bookStore[b].title +"\n" +"Author: " +bookStore[b].author +"\n"
    +"..................................................................................");
}

// Display all the books (show only book titles) published by O'Reilly Media:
for(let b=0; b<arrBooks; b++)
{ 
    if (bookStore[b].publisher === "O'Reilly Media")
    {
    console.log(bookStore[b].title);
    }
}

// Display all the books (show only book titles) which have more than 350 pages:
for(let b=0; b<arrBooks; b++)
{ 
    if (bookStore[b].pages > 350)
    {
    console.log(bookStore[b].title);
    }
}