describe('fb', () => {

    it('test1', ()=>{

        cy.visit("https://www.saucedemo.com/")

        cy.wait(3000)

        cy.title().should('eq', 'Swag Labs')

        cy.get('#user-name').type('error_user')

        cy.get('#password').type('secret_sauce')

        cy.get('#login-button').click()

        cy.wait(3000)

        cy.get('#react-burger-menu-btn').click()

        cy.get('#logout_sidebar_link').click()

    })
})