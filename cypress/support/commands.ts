Cypress.Commands.add('checkTheDashboardPageInPtBrLanguage', () => {
  cy.title().should('eq', 'Template | Dashboard');
  cy.contains('Alternador de localidade').should('be.visible');
  cy.contains('Alternar para en').should('be.visible');
  cy.contains('Conteudo em português').should('be.visible');
});

Cypress.Commands.add('checkTheDashboardPageInEnUsLanguage', () => {
  cy.title().should('eq', 'Template | Dashboard');
  cy.contains('Locale switcher').should('be.visible');
  cy.contains('Switch to pt').should('be.visible');
  cy.contains('Content in English').should('be.visible');
});

Cypress.Commands.add('checkTheSignInPageInPtBrLanguage', () => {
  cy.title().should('eq', 'Template | Entrar');
  cy.contains('Alternador de localidade').should('be.visible');
  cy.contains('Alternar para en').should('be.visible');
  cy.contains('Conteudo em português').should('be.visible');
});

Cypress.Commands.add('checkTheSignInPageInEnUsLanguage', () => {
  cy.title().should('eq', 'Template | SignIn');
  cy.contains('Locale switcher').should('be.visible');
  cy.contains('Switch to pt').should('be.visible');
  cy.contains('Content in English').should('be.visible');
});
