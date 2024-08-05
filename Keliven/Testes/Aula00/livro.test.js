const {Book, addBook, removeBook, books} = require('./livro')

test('Adicionar novo livro', () => {
    const book = new Book("A pedra filosofal", "JK Rowling", 2001)
    addBook(book)
    expect(books).toContain(book)
})

test('Remove livro', () => {
    removeBook("A pedra filosofal")
    expect(books).toContain([])
})