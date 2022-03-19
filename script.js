/* Declaration of important variables, including DOM inputs*/

let library = []

const addButton = document.querySelector('.add')
let titleField = document.getElementById('title').value
let authorField = document.getElementById('author').value
let pagesField = document.getElementById('pages').value
let tagField = document.getElementById('tag').value
let readField = document.getelementbyID

/* Just a test of concept 
function info() {
    return `${title} by ${author}, ${pages} pages, ${read}`
} */

/*constructor function */

function Book(title, author, pages, tag) {
    this.title = title
    this.author = author
    this.pages = pages
}

/*Add book to library function.*/

function addBookToLibrary(tag) {
    
    library.push(tag)
}

/*Button event listener - when you click it calls the constructor
 and adds the book to the library array */

addButton.addEventListener('click', () => {
    let book = new Book(titleField, authorField, pagesField)
    
    addBookToLibrary(book)
})

function handleChangeTitle() {
    titleField = document.getElementById('title').value
}

function handleChangeAuthor() {
    authorField = document.getElementById('author').value
}

function handleChangePages() {
    pagesField = document.getElementById('pages')
}

function handleChangeTag() {
    tagField = document.getElementById('tag')
}