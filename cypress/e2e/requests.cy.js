describe('Заявки', () => {
    it('роль Работодателя-Позитив', () =>{
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на авторизацию')
            cy.visit('https://dev.profteam.su')

            cy.get('[href="/login"] > .button').click();
            cy.get('.form-input--text').type(data.login)
            cy.get('.form-input--password').type(data.password)
            cy.wait(1000)
            cy.get(':nth-child(3) > .button').click()

            cy.get('.page-nav__role-block > .button').click()
            cy.get('.select-role-form > :nth-child(1)').click()
            cy.get('.variants-company > :nth-child(2)').click()
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.name_for_employer)
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.address_for_employer)
            cy.get('.form-area').type(data.description_for_employer)
            cy.get('.create-company-form__description-block > .button').click()
            cy.wait(1000)
        })
    })

    it('роль Работодателя-Негатив', () =>{
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на авторизацию')
            cy.visit('https://dev.profteam.su')

            cy.get('[href="/login"] > .button').click();
            cy.get('.form-input--text').type(data.login)
            cy.get('.form-input--password').type(data.password)
            cy.wait(1000)
            cy.get(':nth-child(3) > .button').click()

            cy.get('.page-nav__role-block > .button').click()
            cy.get('.select-role-form > :nth-child(1)').click()
            cy.get('.variants-company > :nth-child(2)').click()
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.none_existent_name_for_employer)
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.none_existent_address_for_employer)
            cy.get('.form-area').type(data.none_existent_desc_for_employer)
            cy.get('.create-company-form__description-block > .button').click()
            cy.wait(2000)
        })
    })

    it('роль учебного заведения-Позитив', () =>{
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на авторизацию')
            cy.visit('https://dev.profteam.su')

            cy.get('[href="/login"] > .button').click();
            cy.get('.form-input--text').type(data.login)
            cy.get('.form-input--password').type(data.password)
            cy.wait(1000)
            cy.get(':nth-child(3) > .button').click()

            cy.get('.page-nav__role-block > .button').click()
            cy.get('.select-role-form > :nth-child(1)').click()
            cy.get('.variants-company > :nth-child(2)').click()
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.name_for_institution)
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.address_for_institution)
            cy.get('.form-area').type(data.description_for_institution)
            cy.get('.create-company-form__description-block > .button').click()
            cy.wait(2000)
        })
    })

    it('роль учебного заведения-Негатив', () =>{
        cy.fixture('cypressTest').then(data => {
            cy.log('Переход на авторизацию')
            cy.visit('https://dev.profteam.su')

            cy.get('[href="/login"] > .button').click();
            cy.get('.form-input--text').type(data.login)
            cy.get('.form-input--password').type(data.password)
            cy.wait(1000)
            cy.get(':nth-child(3) > .button').click()

            cy.get('.page-nav__role-block > .button').click()
            cy.get('.select-role-form > :nth-child(1)').click()
            cy.get('.variants-company > :nth-child(2)').click()
            cy.get(':nth-child(1) > .form-control--medium > .form-input--text').type(data.none_existent_name_for_institution)
            cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.none_existent_address_for_institution)
            cy.get('.form-area').type(data.none_existent_desc_for_institution)
            cy.get('.create-company-form__description-block > .button').click()
        });
    });
});