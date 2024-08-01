const {Book, addBook, books} = require('./livro')

test('Adicionar nobo livro', () => {
    const book = new Book("A pedra filosofal", "JK Rowling", 2001)
    addBook(book)
})