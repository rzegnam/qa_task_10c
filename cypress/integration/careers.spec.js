describe("Careers page", () => {
  it("should check that there is only one qa role opened", () => {
    // Open 10C home page ('https://10clouds.com/')
    cy.visit("/");
    // assertion
    // Open Careers tab
    cy.get(":nth-child(8) > .Link__NavLink-sc-1ryxvh0-1 > span").click();
    // assertion
    // Validate that there is __exactly__ 1 'QA Automation Engineer' role open
    cy.get('[href="/careers/qa-automation-engineer-poland/"]').should(
      "have.length",
      1
    );
  });

  it.only("should check that there is only one qa role opened", () => {
    // make this custom command or something
    // create selectors/locators folder
    // Open 10C home page('https://10clouds.com/')
    cy.visit("/");
    // assertion
    // Open Careers tab
    cy.get(":nth-child(8) > .Link__NavLink-sc-1ryxvh0-1 > span").click();
    // assertion
    // Type 'Automation' in Search jobs input
    cy.get("#search-job").type("Automation");
    // Validate that each result contains "Automation" in title
    cy.get(".job-offers__wrapper")
      .children()
      .each(($result) => {
        const text = $result.text();
        expect(text).to.include("Automation");
      });
  });
});
