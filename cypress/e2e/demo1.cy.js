describe('demo1', () => {

    it('test1', ()=>{

        cy.visit("https://www.saucedemo.com/")

        cy.wait(3000)

        cy.title().should('eq', 'Swag Labs')

        cy.get('#user-name').type('error_user')

        cy.get('#password').type('secret_sauce')

        cy.get('#login-button').click()

        cy.wait(3000)

        //cy.get('#react-burger-menu-btn').click()

        //cy.get('#logout_sidebar_link').click()

        cy.title().should('eq', 'Swag Labs')

        cy.wait(3000)

        //cy.get('.product_sort_container').select(1)
        //cy.get('.product_sort_container').select('za')

        cy.get('.title').should('have.text', 'Products')

        cy.wait(2000)

        cy.get('#add-to-cart-sauce-labs-backpack').click()

        cy.wait(2000)

        cy.get('.shopping_cart_link').click()

        cy.wait(2000)

        cy.get('#remove-sauce-labs-backpack').click()


        cy.get('#react-burger-menu-btn').click()

        cy.get('#logout_sidebar_link').click()
    })     
    
})