const fetch = require('node-fetch');
const cheerio = require('cheerio');

async function carregarJS() {
  try {
    const response = await fetch('https://example.com');
    const html = await response.text();
    
    const $ = cheerio.load(html);
    
    const scripts = [];
    $('script').each((i, el) => {
      const src = $(el).attr('src');
      const inline = $(el).html();
      
      if (src) {
        scripts.push({ tipo: 'externo', url: src });
      } else if (inline) {
        scripts.push({ tipo: 'inline', codigo: inline.substring(0, 100) + '...' });
      }
    });
    
    console.log(scripts);
  } catch (erro) {
    console.error('Erro:', erro);
  }
}

carregarJS();
