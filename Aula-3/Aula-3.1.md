## Aula 3.1 
### Noções de HTML
---
- **Introdução:**
	- Hyper Text Markup Language.
	- **Não** pode ser considerada uma linguagem de programação.
	- Define **elementos** que são delimitados por **tags**.
	- **Muita** importância **semântica**.
	- **Pouca** importância **visual**.
	- Excelente fonte de documentação: https://developer.mozilla.org/pt-BR/docs/Web/HTML

- **Estrutura de um elemento HTML**
![Estrutura de um elemento HTML](https://upload.wikimedia.org/wikipedia/commons/7/7b/Estrutura_de_um_elemento_HTML.svg)

- **Principais tags HTML para marcação**
	- `<p>: parágrafos`
	- `<h1> a <h6>: títulos`
	- `<span>: trechos a serem destacados`
	- `<div>: divisões de página`
	- `<table> <tr> <td>: definição de tabelas, linhas e colunas`
	- `<ul> <li>: listas e itens de listas`
	- `<strong> e <em>: ênfase no texto`
	- `<a>: âncoras (links)`

- **Caminho absoluto x caminho relativo**
	- Muitos utilizados em imagens e links.
	- Caminho absoluto:
		- local **absoluto** do recurso (arquivo, imagens, etc.) **em disco**.
		- Em geral, só funciona no ambiente original do site/página HTML
		- Portando, **evite**.
	- Caminho relativo:
		- Local relativo ao recurso (arquivo, imagens, etc.) **em relação aos demais arquivos do projeto**.
		- Pasta Local - `'./'`  
		- Pasta pai - `../`
		- Utilize sempre caminhos relativos.
		- Assim, as referências ao seu pedido funcionarão **em qualquer ambiente**.