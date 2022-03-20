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
}

/*Add book to library array function.*/

function addBookToLibrary(book) {
    library.push(book)
}

/*Button event listener - when you click it calls the constructor
 and adds the book to the library array and changes the html -
 adds div for the library book and creates the delete button for the element*/

addButton.addEventListener('click', () => {
    let book = new Book(titleField, authorField, pagesField)
    var newDiv = document.createElement('div');
    newDiv.className = 'library-card'
    newButton = document.createElement('button')
    newButton.className = 'library-card-button'
    buttonText = document.createTextNode('Delete Book')
    newDiv.textContent =`${book.title}, ${book.author}, ${book.pages}`
    document.querySelector('.library').appendChild(newDiv)
    newDiv.appendChild(newButton)
    newButton.appendChild(buttonText)
    addBookToLibrary(book)
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

/*Clear all inputs after the add to library button is pushed*/

function clearAll() {
    document.getElementById('title').value = ""
    document.getElementById('author').value = ""
    document.getElementById('pages').value = ""
    document.getElementById('tag').value = ""
}

function deleteBook() {
    deleteButton = document.querySelector('.library-card-button')
    deleteButton.parentElement.remove()
}

deleteButton.addEventListener('click', () => {
    deleteBook()
})