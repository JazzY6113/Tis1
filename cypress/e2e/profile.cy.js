describe('Подача заявок', () => {
  beforeEach(() => {
    cy.visit('https://dev.profteam.su');
    cy.get('[data-cy=login-username]').type('Bogomolov_cypress');
    cy.get('[data-cy=login-password]').type('cypress_Bogomolov123');
    cy.get('[data-cy=login-button]').click();
  });

  it('Подача заявки на роль Работодателя', () => {
    cy.get('[data-cy=apply-employer]').click();
    cy.contains('Заявка отправлена').should('be.visible');
  });

  it('Подача заявки на роль Учебного заведения', () => {
    cy.get('[data-cy=apply-education]').click();
    cy.contains('Заявка отправлена').should('be.visible');
  });

  it('Ошибка при повторной подаче заявки', () => {
    cy.get('[data-cy=apply-employer]').click();
    cy.get('[data-cy=apply-employer]').click();
    cy.contains('Заявка уже отправлена').should('be.visible');
  });
});