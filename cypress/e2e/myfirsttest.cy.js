describe('my first test', () =>{

    it('verify title positive', () => {
       
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM')
    })

    it('verify title negative', () => {
       
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRMa')
    })
})