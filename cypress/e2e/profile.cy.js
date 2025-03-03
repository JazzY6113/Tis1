describe('Личный кабинет', () => {
    it('Просмотр заявок', () =>{
        cy.fixture('cypressTest').then(data => {
            cy.log('переход на авторизацию')
            cy.visit('https://dev.profteam.su')

            cy.get('[href="/login"] > .button').click();
            cy.get('.form-input--text').type(data.login)
            cy.get('.form-input--password').type(data.password)
            cy.wait(1000)
            cy.get(':nth-child(3) > .button').click()

            cy.get('.header-container__desktop > .notification-bell > .notification-bell__icon__desktop > svg').should('be.visible')
            cy.wait(1000)
            cy.get('.header-container__desktop > .notification-bell > .notification-bell__icon__desktop > svg').click()
            cy.wait(1000)
            cy.get('.header-container__desktop > .notification-bell > .notification-bell__similar > .notifications-similar > .notifications-similar__header > .link').click()
        })
    })
})