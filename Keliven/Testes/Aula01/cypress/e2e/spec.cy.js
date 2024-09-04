describe('template spec', () => {
  it('visitar o site', () => {
    cy.visit('http://127.0.0.1:5500/Keliven/Testes/Aula01/index.html?')
  })

  it('senha errada', () => {
    cy.visit('http://127.0.0.1:5500/Keliven/Testes/Aula01/index.html?')
    cy.get('#username').type('admin')
    cy.get('#password').type('oi123')
    cy.get('button').click()
    cy.get('#mensagemErro').should('be.visible')
  })

  it('senha correta', () => {
    cy.visit('http://127.0.0.1:5500/Keliven/Testes/Aula01/index.html?')
    cy.get('#username').type('admin')
    cy.get('#password').type('admin')
    cy.get('button').click()
    cy.on('windows.alert', (text) => {
      hasUncaughtExceptionCaptureCallback(text).to.contains('Login efetuado com sucesso!')
    })
  })
})