describe("Open Kasir Aja", ()=>{
    it("should contain url login", ()=>{
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/login')
    })
    it('user successfully login to kasir AJA', ()=>{
        //open website kasir aja
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/login')

        //input email & password
        cy.get('#email').type("puput@gmail.com")
        cy.get('#password').type("12345678")

        //click login button
        //cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()
        //bisa cara ini
        cy.contains('login').click()
        //assert dashboard page after login
        cy.url().should('include', '/dashboard')
        cy.contains("kasirAja")
    })
})