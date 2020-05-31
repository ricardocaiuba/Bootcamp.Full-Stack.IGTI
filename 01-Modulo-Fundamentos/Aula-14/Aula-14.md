## Aula 14
### JavaScript Assíncrono
---
- Em JavaAcript existem operações que podem ser lentas, como por exemplo:
	- Requisição de dados à APIs.
	- Processamento intenso de dados.
	- Comunicação com bancos de dados (Nodes.js).
- É de extrema importância que o JavaScript **não espere o término de instruções lentas**.
- A principal técnica para garantir a afirmação acima é a utilização do **event loop**.
- **Event loop**:
	- Funções a serem executadas ficam em uma pilha lógica de invocações (call stack).
	- Quando a função utiliza Web APIs, ele precisa passar pelo event loop, pois está sujeita à lentidões.
	- O event loop executa uma função por vês e faz a orquestração que permite execução assíncrona.
	- Em geral, funções que usam WEB APIs possuem **callbacks** (funções passadas por parâmetros).