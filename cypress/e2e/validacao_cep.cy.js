describe('Validar pagina mercado livre', () => {
   
    it('Validar CEP no mercado livre', () => { 
        
        cy.visit('https://www.mercadolivre.com.br/')
        cy.get('a.nav-menu-cp', {timeout: 10000}).should('be.visible').click() 
        cy.get('[data-testid="zip-code-textfield"]').should('be.visible').type('29090490')//clicando na opção "informe seu cep" digitando o CEP 

        //cy.get('[data-testid="button-use-zipcode"]').click()//clicando em "usar"
        //cy.wait(15000)
        //cy.get('[data-testid="action:understood-button"]').click()
        //cy.wait(3000)
        //cy.get('.nav-menu-cp-logged', { timeout: 10000}).should('be.visible').and('contain','Vitória 29090490')//validar CEP foi inserido com sucesso, indicando no topo da página
    })

    it('Validar a pagina "ajuda" do mercado livre', () => { 
        cy.visit('https://www.mercadolivre.com.br/?msockid=0c03928622f06e7a2b8184bf23ba6f1f')
        cy.get('footer').scrollIntoView({duration:1000})
        cy.get('li.nav-footer-navigation__item').should('be.visible').and('have.length', 9)      
        cy.get('.nav-footer-navigation__item > [href="https://www.mercadolivre.com.br/ajuda"]').should('have.text', 'Contato').click()//clicar na opçao "contato"
        cy.url().should('eq','https://www.mercadolivre.com.br/ajuda') //validar que foi redirecionado para a url "contato"
        cy.get('.search-bar__subtitle').should('be.visible').and('have.text','Como podemos te ajudar?')//validar que foi redirecionado para a url "contato"
        cy.get('a.andes-list__item-anchor').should('be.visible').and('have.length', 8)//validar a quantidade de opções que possui na página
        //cy.get('li').should('have.text','Perguntas frequentes sobre vendas').scrollIntoView({duration:1000}).click()//acessar a opção "Perguntas frequentes sobre vendas"
        cy.get('h1.folder__title').should('be.visible', {timeout: 20000}).and('have.text','Vendas')//validar que foi redirecionado para a url "vendas"
        cy.get('li.andes-list__item').should('have.length', 13)//validar a quantidade de opções que possui na página
    })

    it.only('Validar a pagina de "categorias" no mercado livre', () => { 
        cy.visit('https://www.mercadolivre.com.br/')
        cy.get('.nav-menu-categories-link', {timeout: 10000}).click() 
        cy.get('ul.nav-categs-departments').contains('Supermercado')
        cy.get('[alt="Lava Roupas Líquido Omo Lavanderia Profissional Lavagem 7 L"]').should('be.visible').click()
        cy.url().should('eq','https://www.mercadolivre.com.br/lava-roupas-liquido-omo-lavanderia-profissional-lavagem-7-l/p/MLB17001072?pdp_filters=shipping%3Afulfillment%7Cdeal%3AMLB1299092-1#wid%3DMLB3369802499%26sid%3Dunknown%26position%3D1%26section%3DHOME%26tracking_id%3Df8dbbbcb-9d49-4989-ac5a-c3ca1e4a7520') 
        cy.url().contains('omo-lavanderia-profissional')
    })
})
