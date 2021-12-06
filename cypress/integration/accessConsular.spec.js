describe("Access to Consular", () => {
  before(() => {
    cy.visit("https://ec-lisboa.itamaraty.gov.br/login");
  });

  it("should check scheduling dates", () => {
    cy.login(Cypress.env("email"), Cypress.env("pass"));
    cy.get(".container .title", { timeout: 10000 }).should('be.visble');
    cy.get(".row .col .btn-outline-primary").contains('Continuar').click();
    cy.get(".container .title", { timeout: 10000 }).should('be.visble');
    cy.get(".alert-primary").should("have.text", "Não há horários disponíveis no momento. Tente novamente mais tarde!");
  });
});
