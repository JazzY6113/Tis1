describe('Регистрация', () => {
    it('Регистрация-Позитив', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на регистрацию')
            cy.visit('https://dev.profteam.su/registration')

            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login)
            cy.get('.form-input--email').type(data.email)
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password)
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.password)
            cy.wait(1000)
            cy.get('.form__buttons > :nth-child(4)').click()

            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.firstName)
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.lastName)
            cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type(data.thirdName)
            cy.wait(1000)
            cy.get('.form__buttons > :nth-child(3)').click()
        })
    })

    it('Регистрация-Негатив', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на регистрацию')
            cy.visit('https://dev.profteam.su/registration')

            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.none_existent_login)
            cy.get('.form-input--email').type(data.none_existent_email)
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.none_existent_password)
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.none_existent_password)
            cy.wait(1000)
            cy.get('.form__buttons > :nth-child(4)').click()

            cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.none_existent_firstName)
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.none_existent_lastName)
            cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type(data.none_existent_thirdName)
            cy.wait(1000)
            cy.get('.form__buttons > :nth-child(3)').click()
        })
    })

    it('Добавление роли студента', () => {
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на авторизацию')
            cy.visit('https://dev.profteam.su')

            cy.get('[href="/login"] > .button').click();
            cy.get('.form-input--text').type(data.login)
            cy.get('.form-input--password').type(data.password)
            cy.wait(1000)
            cy.get(':nth-child(3) > .button').click()

            cy.get('.page-nav__role-block > .button').click()
            cy.get('.select-role-form > :nth-child(3)').click()
        })
    })
})