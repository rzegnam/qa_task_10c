export const titleHeader = () => cy.get("h1");
export const careersTab = () =>
  cy.get("a[href='/careers/']").eq(0);
