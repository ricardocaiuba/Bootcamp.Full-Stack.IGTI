## Aula 16.2
### Requisições HTTP com Javascript
---
- **Promises**:
	- São contruções cuja execução **retorna algo no futuro**, ou seja, é uma **promessa de execução**.
	- A execução pode ser **resolvida (ok)**, ou **rejeitada (erro)**.
	- A promise resolvida é interceptada com **then**.
	- A promise rejeitada é interceptada com o **catch**.
	- Resolve parcialmente o problema do **callback hell**.
- **Async/await**
	- Açúcar sintático (syntax sugar) sobre promises.
	- Melhoram a **legibilidade** do código.
	- Dá a impressão de código síncrono.
	- Deve-se decorar a função com **async**.
	- Toda instrução relacionada à promise deve ser precedida de **await**.