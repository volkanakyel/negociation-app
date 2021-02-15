describe("Negocation app tabs testing", () => {
  before(() => {
    //Visits the app running locally
    cy.visit("http://localhost:8080/");
  });
  it("renders employer tab active class by default", () => {
    cy.get("[data-cy=tabs-list]")
      .find("div")
      .should("have.class", "is-active")
      .contains("employer tab");
  });
  it("renders current tab details", () => {
    cy.get("[data-cy=tab-content]").contains("Enter Maximum offer");
  });
});
