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

module.exports = {Book, addBook, books}