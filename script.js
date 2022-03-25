/* Declaration of important variables, including DOM inputs/areas*/

let library = []

const addButton = document.querySelector('.add')
let titleField = document.getElementById('title').value
let authorField = document.getElementById('author').value
let pagesField = document.getElementById('pages').value
let tagField = document.getElementById('tag').value
let libraryField = document.querySelector('.library').textContent

/*constructor function */

function Book(title, author, pages, tag) {
    this.title = title
    this.author = author
    this.pages = pages
    this.tag = tag
}

/*Add book to library array function.*/

function addBookToLibrary(book) {
    library.push(book)
}

/*Clear all inputs after the add to library button is pushed*/

function clearAll() {
    document.getElementById('title').value = ""
    document.getElementById('author').value = ""
    document.getElementById('pages').value = ""
    document.getElementById('tag').value = ""
}

/*This function creates the delete button that will appear when the book is added; uses data index id (which is derived
from length of the library array) to ensure that the button deletes the correct book (ie, the one it appears with) */
 function newButton() {
    button = document.createElement('button');
    text = document.createTextNode('Delete Book');
    button.dataset.indexNumber = library.length;
    button.appendChild(text);
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
function addCard (title, author, pages) {
    libraryDiv = document.querySelector('.library')
    bookDiv = newDiv();
    bookDiv.textContent = `${title}, ${author}, ${pages}`
    libraryDiv.appendChild(bookDiv);
    button = newButton()
    buttonFunction(button)
    bookDiv.appendChild(button)

}
/*Button event listener - when you click it calls the constructor
 and adds the book to the library array and changes the html -
 adds div for the library book and creates the delete button for the element*/
addButton.addEventListener('click', () => {
    let book = new Book(titleField, authorField, pagesField)
    addBookToLibrary(book)
    addCard(book.title, book.author, book.pages)
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

function handleChangeTag() {
    tagField = document.getElementById('tag').value
}


/* function for the event listener on each book's delete book button */
function deleteBook() {
    deleteButton = document.querySelector('.library-card-button')
    deleteButton.parentElement.remove()
}