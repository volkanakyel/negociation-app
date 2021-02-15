describe("Negocation app tabs behaviour", () => {
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

describe("Employer tab submit offer", () => {
  before(() => {
    //Visits the app running locally
    cy.visit("http://localhost:8080/");
  });
  it("renders the input number with employer offer", () => {
    cy.get("#offerEmployer")
      .find("input")
      .type(40000);
  });
  it("should submit the offer disable the current tab and switch to employee tab", () => {
    cy.get("#submitOffer")
      .find("button")
      .click();
  });
  it("renders employer tab disable", () => {
    cy.get("[data-cy=tabs-list]")
      .find("div")
      .should("have.class", "disable-tab")
      .contains("employer tab");
  });
});

describe("Salary offer and open modal", () => {
  it("should submit employee salary and submit", () => {
    cy.get("#employeeSalary")
      .find("input")
      .type("35000");
  });
  it("renders modal on submit employee salary", () => {
    cy.get("#submitSalary")
      .find("button")
      .click();
  });
  it("renders modal with success message", () => {
    cy.get(".modal")
      .find("h2")
      .should("have.class", "win");
  });
  it("should close modal after success message", () => {
    cy.get("#modal")
      .find("button")
      .click();
  });
});
