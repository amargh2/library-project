/* Declaration of important variables, including DOM inputs/areas*/

let library = []

const addButton = document.querySelector('.add')
let titleField = document.getElementById('title').value
let authorField = document.getElementById('author').value
let pagesField = document.getElementById('pages').value
let libraryField = document.querySelector('.library').textContent
let readField = document.getElementById('read').value

/*constructor function */

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

/*Add book to library array function.*/

function addBookToLibrary(book) {
    library.push(book)
}

/*Clear all inputs after the add to library button is pushed*/

function clearAll() {
    document.getElementById('title').value = null
    document.getElementById('author').value = null
    document.getElementById('pages').value = null
    document.getElementById('read').value = null
}

/*This function creates the delete button that will appear when the book is added; uses data index id (which is derived
from length of the library array) to ensure that the button deletes the correct book (ie, the one it appears with) */
 function newButton() {
    button = document.createElement('button');
    text = document.createTextNode('Delete Book');
    button.dataset.indexNumber = library.length;
    button.appendChild(text);
    button.className = 'delete'
    return button
}

/*adds event listener to each created button -- matches data-index of the button with data-index of corresponding
div, and removes*/
function buttonFunction(button) {
    button.addEventListener ('click', () => {
       divToSelect = document.querySelector(`[data-index-number = "${button.dataset.indexNumber}"]`)
       divToSelect.remove()
})
}

/*new div creator function -- assigns class name for styling and data index number for proper deletion handling */
function newDiv () {
    let bookDiv = document.createElement('div'); 
    bookDiv.className = 'library-card';
    bookDiv.dataset.indexNumber = library.length;
    return bookDiv;
}

/*function that ties most everything together -- adds button, book div, and appends everything*/
function addCard (title, author, pages, read) {
    libraryDiv = document.querySelector('.library')
    bookDiv = newDiv();
    bookDiv.textContent = `${title}, ${author}, ${pages}, ${read}`
    libraryDiv.appendChild(bookDiv);
    button = newButton()
    buttonFunction(button)
    bookDiv.appendChild(button)

}


/*This function checks that each field in the form is filled out*/
function validateForm() {
    if (titleField == null || titleField == "", authorField == null || authorField == "", pagesField == null || pagesField == "", pagesField == null || readField == "not specified") {
      alert("Make sure you filled out every field!");
      return false;
    }
  }


/*Button event listener - when you click it calls the constructor
 and adds the book to the library array and changes the html -
 adds div for the library book and creates the delete button for the element*/
addButton.addEventListener('click', () => {
    let book = new Book(titleField, authorField, pagesField, readField)
    if (validateForm() == false) {
        return;
    }
    addBookToLibrary(book)
    addCard(book.title, book.author, book.pages, book.read)
    clearAll()
})



/*Functions that allow the text inputs to dynamically update */

function handleChangeTitle() {
    titleField = document.getElementById('title').value
}

function handleChangeAuthor() {
    authorField = document.getElementById('author').value
}

function handleChangePages() {
    pagesField = document.getElementById('pages').value
}

function handleChangeRead() {
    readField = document.getElementById('read').value
}