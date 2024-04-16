const puppeteer = require('puppeteer');
// Para não dar erro ao passar do tempo de execução utilize export declare class PuppeteerError extends Error


(async () => {
  // Array de URLs que você deseja processar
  const urls = [
    'https://www.google.com/search?q=puppeteer+npm+documentation&sca_esv=582ec9845e97149d&sxsrf=ACQVn0-uC-ALlwfasro7XFxk0DdInxfxBA%3A1713264892848&ei=_FgeZvO5M_DW5OUP98K3iAE&udm=&oq=pupper&gs_lp=Egxnd3Mtd2l6LXNlcnAiBnB1cHBlcioCCAEyChAjGLECGLADGCcyChAjGLECGLADGCcyChAjGLECGLADGCcyChAAGIAEGLADGAoyCBAAGIAEGLADMgoQABiABBiwAxgKMgoQABiABBiwAxgKMgoQABiABBiwAxgKMgoQABiABBiwAxgKMgoQABiABBiwAxgKSL0XUABYAHABeACQAQCYAQCgAQCqAQC4AQHIAQCYAgGgAg2YAwCIBgGQBgqSBwExoAcA&sclient=gws-wiz-serp',
    // Adicione mais URLs conforme necessário
  ];

  // Tempo de espera em milissegundos (por exemplo, 15 segundo)
  const waitTime = 15000;

  // Launch the browser
  const browser = await puppeteer.launch();

  // Loop para rodar por todas as URLs
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];

    // Abrir uma nova página para a URL atual
    const page = await browser.newPage();

    // Navegar para a URL atual
    await page.goto(url);

    // Definir o tamanho da tela para capturar a página inteira
    await page.setViewport({ width: 1920, height: 1080 });

    // Definir o tamanho do viewport
    const viewportHeight = page.viewport().height;
    let viewportOffset = 0;

    // Loop para rolar a página e carregar os dados
    while (viewportOffset < await page.evaluate(() => document.body.offsetHeight)) {
      await page.evaluate(offset => {
        window.scrollBy(0, offset);
      }, viewportHeight);
      await new Promise(resolve => setTimeout(resolve, waitTime));
      viewportOffset += viewportHeight;
    }

    // Construir o nome do arquivo PDF usando um contador 
    const pdfName = `page_${i + 1}.pdf`;

    // Salvar a página como PDF
    await page.pdf({ path: pdfName, format: 'A4' });

    console.log(`PDF salvo como ${pdfName}`);

    // Fechar a página atual
    await page.close();
  }

  // Fechar o navegador após o processamento de todas as URLs
  await browser.close();
})();

