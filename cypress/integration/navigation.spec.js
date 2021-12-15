describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should visit root", () => {});

  it("Should navigate to tuesday", () => {
    cy.contains("[data-testid=day]", "Tuesday")
      .click()
      .should("have.class", "day-list__item--selected");
  });
});
