## Aula 7.1 
### JavaScript - DOM
---
- **Introdução - JavaScript - DOM:**
	- Document Object Model.
	- Representa uma árvore de objetos em memória.
	- No caso da web, mapeia documentos HTML em objetos.
	- Com isso, pode-se facilmente recuperar e modificar dados dos documentos.
- O comando ***`querySelector()`*** :
	- Principal comando para acessar elementos do DOM um-a-um.
	- Opções de parâmetros:
		- Elemento/ Classes /Id's.
- O comando ***`querySelectorAll()`***
	- Principal comando para acessar elementos agrupados do DOM.
	- O retorno é do tipo NodeList. Para converter para array (mais comum), use Array.from.
	- Opções de parâmetros:
		- Elemento/ Classes /Id's.
- A propriedade ***`textContent`***
	- Refere-se ao conteúdo textual de alguns elementos.