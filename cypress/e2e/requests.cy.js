describe('Личный кабинет', () => {
  beforeEach(() => {
    cy.visit('https://dev.profteam.su');
    cy.get('[data-cy=login-username]').type('Bogomolov_cypress');
    cy.get('[data-cy=login-password]').type('cypress_Bogomolov123');
    cy.get('[data-cy=login-button]').click();
  });

  it('Просмотр уведомлений', () => {
    cy.get('[data-cy=notifications]').click();
    cy.contains('Ваши уведомления').should('be.visible');
  });

  it('Прочтение уведомления', () => {
    cy.get('[data-cy=notifications]').click();
    cy.get('[data-cy=notification-item]').first().click();
    cy.contains('Уведомление прочитано').should('be.visible');
  });
});