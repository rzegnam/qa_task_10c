import * as baseLocators from "../locators/base_locators";
import * as careersLocators from "../locators/careers_page_locators";

describe("Careers page", () => {
  const automationText = "Automation";

  beforeEach(() => {
    cy.visit("/");
    baseLocators.titleHeader().should("have.class", "title").and("be.visible");
    baseLocators.careersTab().click();
    cy.url().should("contain", "careers");
  });

  it("should check that there is only one qa role opened", () => {
    careersLocators.qaOffer().should("have.length", 1);
  });

  it("should check that searching for 'Automation' results are displayed", () => {
    careersLocators.searchInput().type(automationText);
    careersLocators
      .jobOffers()
      .children()
      .each(($offer) => {
        expect($offer).to.contain(automationText);
      });
  });
});
