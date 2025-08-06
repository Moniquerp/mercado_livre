describe('Validar pagina mercado livre', () => {
   
    it('Validar CEP no mercado livre', () => { 
        cy.visit('https://www.mercadolivre.com.br/')
        cy.get('a.nav-menu-cp', {timeout: 10000}).should('be.visible').click() 
        cy.get('[data-testid="zip-code-textfield"]').should('be.visible').type('29090490')
        //cy.get('[data-test="title"]').should('be.visible').and('have.text','29090490')
        cy.get('[data-testid="button-use-zipcode"]').click()
        //cy.wait(10000)
        cy.get('.nav-menu-cp-logged', { timeout: 10000}).should('be.visible').and('contain','Vitória 29090490')

    })
})
//href="https://www.mercadolivre.com.br/navigation/addresses-hub?go=https%3A%2F%2Fwww.mercadolivre.com.br%2F"