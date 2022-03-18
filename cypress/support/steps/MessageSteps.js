require("cypress-xpath");

Given("estou com imput aberto", () => {
  cy.visit("/");
  cy.wait(2000);
  cy.get("#search-open").click();
  cy.wait(4000);
  cy.xpath(
    "//input[@name='s' or contains(@placeholder,'Pesquisar ...')]"
  ).should("be.visible");
});

When("insiro palavras sem nexo", () => {
  //   cy.xpath(
  //     "//input[@name='s' or contains(@placeholder,'Pesquisar ...')]"
  //   ).type('testando');
  cy.get(".desktop-search > .search-form > label > .search-field").type(
    "@#$@#$@#"
  );
  cy.get(".desktop-search > .search-form > .search-submit").click();
});

Then("devo ver mensagem de pesquisa nao encontrada", () => {
  cy.wait(2000);
  cy.get("#primary > section > div > p").should(
    "have.text",
    "Não encontramos nada para estes termos de busca. Tente novamente com palavras-chave diferentes."
  );
});
