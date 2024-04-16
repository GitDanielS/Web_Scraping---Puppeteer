
# Puppeteer PDF Generator

Este script Node.js utiliza o Puppeteer para gerar arquivos PDF de páginas da web. Ele automatiza o processo de abrir páginas da web, rolar até o final para carregar todos os dados e salvar a página como um arquivo PDF.

## Requisitos

- Node.js
- Puppeteer

## Como usar

1. Clone o repositório ou copie o conteúdo do script para o seu projeto.
2. Instale as dependências:

   ```bash
   npm install puppeteer
Edite o array urls no script para incluir as URLs que deseja processar.

Defina o tempo de espera, se necessário, ajustando a variável waitTime.

Execute o script: node serve.js
Isso iniciará o processo de geração de PDF para cada URL fornecida.

Observações
Certifique-se de ter uma conexão de internet ativa durante a execução do script para que as páginas sejam carregadas corretamente.
Os arquivos PDF serão salvos no diretório do script com nomes como page_1.pdf, page_2.pdf, etc.
Você pode ajustar o tamanho da tela e outras configurações conforme necessário no script.
