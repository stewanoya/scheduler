describe("Appointemnts", () => {
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");
    cy.visit("/").contains("Monday");
  });
  it("Should book an interview", () => {
    cy.get("[alt=Add]").first().click();

    cy.get("[data-testid=student-name-input]").type("Lydia Miller-Jones");

    cy.get("[alt='Sylvia Palmer']").click();

    cy.get("button").contains("Save").click();

    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Sylvia Palmer");
  });
  it("Should Edit an interview", () => {
    cy.get("[alt='Edit']").click({ force: true });

    cy.get("[data-testid=student-name-input]").clear().type("Stewart Anoya");

    cy.get("[alt='Tori Malcolm']").click();

    cy.get("button").contains("Save").click();

    cy.contains(".appointment__card--show", "Stewart Anoya");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });

  it("should cancel an interview", () => {
    cy.get("[alt=Delete]").click({ force: true });

    cy.contains("Confirm").click();
    cy.contains("DELETING").should("exist");
    cy.contains("DELETING").should("not.exist");

    cy.contains(".appointment__card--show", "Archie Cohen").should("not.exist");
  });
});
