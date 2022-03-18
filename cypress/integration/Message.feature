Feature: Devo ver mensagem de pesquisa nao encontrada

    Testar retorno de pesquisa sem exito

    Scenario: Devo ver mensagem de pesquisa nao encontrada
      Given estou com imput aberto
      When insiro palavras sem nexo
      Then devo ver mensagem de pesquisa nao encontrada