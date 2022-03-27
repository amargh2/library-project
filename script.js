/* Declaration of important variables, including DOM inputs/areas*/

let library = []

const addButton = document.querySelector('.add')
let titleField = document.getElementById('title').value
let authorField = document.getElementById('author').value
let pagesField = document.getElementById('pages').value
let libraryField = document.querySelector('.library').textContent
let libraryDiv = document.querySelector('.library')
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
from length of the library array) to ensure that the button deletes the correct book 
(ie, the one it appears with) */


function deleteButton() {
    button = document.createElement('button');
    text = document.createTextNode('Delete Book');
    button.dataset.indexNumber = library.length;
    button.appendChild(text);
    button.className = 'delete'
    return button
}

/*creates a check mark or x button based on results of read check */

function makeReadButton() {
    readButton = document.createElement('button');
    checkIcon = document.createElement('i');
    checkIcon.className = 'fa-solid fa-check'
    readButton.className = 'read'
    text = document.createTextNode(' Read')
    readButton.appendChild(checkIcon)
    readButton.appendChild(text)
    return readButton 
}

function makeNotReadButton() {
    notReadButton = document.createElement('button');
    notReadIcon = document.createElement('i')
    notReadIcon.className = 'fa-solid fa-x'
    notReadButton.className = 'not-read'
    text = document.createTextNode('  Not Read')
    notReadButton.appendChild(notReadIcon)
    notReadButton.appendChild(text)
    return notReadButton
}

/*function for event listener when the read/unread button is clicked
function readButtonClick {
    
} */

/*function that checks whether the answer to read? is yes or no; calls appropriate button maker
function based on answer */

function checkYesOrNo(read) {
    if (read == 'yes') {
        return makeReadButton()
    }
    else {
        return makeNotReadButton()
    }
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

/*function checkButtonEvent(checkButton) {
    checkButton.addEventListener('click', () => {
        if (checkButton.className == 'read') {
            checkButton.childNodes[0].className = 'fa-solid fa-x'
            checkButton.childNodes[1].textContent = '  Not Read'
        }
        else {
            checkButton.childNodes[0].className = 'fa-solid fa-check'
            checkButton.childNodes[1].textContent = ' Read'
        }
    })
}*/

libraryDiv.addEventListener('click', function (e) {
    if (e.target.classList.contains('read')) {
        e.target.childNodes[0].className = 'fa-solid fa-x';
        e.target.childNodes[1].textContent = ' Not Read';
        e.target.classList = 'not-read'
    }
    else if (e.target.classList.contains('not-read')){
        e.target.childNodes[0].className = 'fa-solid fa-check'
        e.target.childNodes[1].textContent = ' Read'
        e.target.className = 'read'
    }
    else {
        return false
    }
})

/*function that ties most everything together -- adds button, book div, and appends everything*/
function addCard (title, author, pages, read) {
    libraryDiv = document.querySelector('.library')
    bookDiv = newDiv();
    bookDiv.textContent = `${title}, ${author}, ${pages} pages`
    libraryDiv.appendChild(bookDiv);
    button = deleteButton()
    buttonFunction(button)
    bookDiv.appendChild(button)
    checkButton = checkYesOrNo(read)
    //checkButtonEvent(checkButton)//
    bookDiv.appendChild(checkButton)
}


/*This function checks that each field in the form is filled out; if not, returns a false value that prevents
completion of the listener function on the add button*/
function validateForm() {
    if (titleField == null || titleField == "", authorField == null || authorField == "", pagesField == null || pagesField == "", pagesField == null || readField == "not specified") {
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