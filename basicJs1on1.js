/*
    Declare the following:

    LIBRARY_NAME It refers to the name of your library. Set the value to something appropriate.
    myBooks It stores the books that you put into your library. Set the value to something appropriate. The value should be empty.

    Log LIBRARY_NAME and myBooks to the console.

Control Flow, Objects and Functions

    Create a factory function called createBook.

    The Book that our factory function creates should have the attributes name, author, pages and isRead.
    The isRead attribute should be defaulted to false if no argument is passed.

    Create a new function that will populate myBooks and make sure you name the function appropriately:

    Accepts a list of publications data (like the BOOK_LIST defined below) as an argument.
    Loops over the array to create a book using your factory function createBook.
    Uses the spread operator(...) to pass each individual book as an argument list to the the factory function.
    Adds the book to your myBooks array.
    Does not allow books that have undefined name, author, and pages. Use conditional logic to do this.

const BOOK_LIST = [
  ["Don Quixote", "Miguel de Cervantes", 300, true],
  ["Ulysses", "James Joyce", 450, true],
  ["The Odyssey", "Homer", 232],
  ["War and Peace", "Leo Tolstoy", 578],
  ["Moby Dick", "Herman Melville", 321],
  ["Hamlet", "William Shakespeare"],
  ["The Great Gatsby", null, 450]
  */

  const LIBRARY_NAME = "Books Over Bullets";
  let myBooks = [];
  const BOOK_LIST = [
    ["Don Quixote", "Miguel de Cervantes", 300, true],
    ["Ulysses", "James Joyce", 450, true],
    ["The Odyssey", "Homer", 232],
    ["War and Peace", "Leo Tolstoy", 578],
    ["Moby Dick", "Herman Melville", 321],
    ["Hamlet", "William Shakespeare"],
    ["The Great Gatsby", null, 450]
  ]

  console.log(LIBRARY_NAME);
  console.log(myBooks);
  
  const createBook = (name, author, pages, isRead = false) => {
      return {
          name,
          author, 
          pages,
          isRead
      }
  };

   const populateBook = publicationList => {
    publicationList.forEach( (item) => {
    if (item[0] && item[1] && item[2]) {
        myBooks.push(createBook (...item))
    }    
    });
   };
populateBook(BOOK_LIST)
console.log(myBooks)
  