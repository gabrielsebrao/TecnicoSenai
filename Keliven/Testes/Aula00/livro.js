class Book {
    constructor(title, author, publicationYear) {
        this.title = title
        this.author = author
        this.publicationYear = publicationYear
    }
}

const books = []

function addBook(book) {
    books.push(book)
    console.log("Livro adicionado")
}

function removeBook(title) {
    const index = books.findIndex(book => book.title === title)

    if(index !== -1) {
        books.splice(index, 1)
    } 
}

module.exports = {Book, addBook, removeBook, books}