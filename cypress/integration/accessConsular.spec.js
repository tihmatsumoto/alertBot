describe("Access to Consular", () => {
  before(() => {
    cy.visit("https://ec-lisboa.itamaraty.gov.br/login");
  });

  it("should check scheduling dates", () => {
    cy.login(Cypress.env('email'), Cypress.env('pass'));
    cy.wait(5000);
    cy.get("a[href='/availability']").click();
    cy.get(".table").should("be.visible");
    cy.get("tr > td:nth-of-type(1)").each(($el, index, $list) => {
      if ($el.text() === "Procuração e substabelecimento para fins diversos") {
        cy.get("tr>td:nth-of-type(2)")
          .eq(index)
          .should("have.text", "Indisponível. no momento, confira mais tarde");
      }
    });
  });
});
