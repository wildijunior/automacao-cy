require("cypress-xpath");

Given("estou na home", () => {
  cy.visit("/");
  cy.wait(2000);
  cy.title().should("eq", "Blog do Agi -");
});

When("clico na lupina", () => {
  cy.get("#search-open").click();
});

Then("entao vejo elementos de pesquisa em tela", () => {
  //   cy.xpath(
  //     "//input[@name='s' or contains(@placeholder,'Pesquisar ...')]"
  //   ).type('testando');
  cy.get(".desktop-search").should("be.visible");
});
