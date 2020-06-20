## Aula 2.6
### Express: rotas, middlewares e tratamento de erros
---
- **Tratamentos de erros**
	- É a parte muito importante de uma API.
	- Um erro pode ser originado a partir de vários pontos.
	- É importante que a API seja capaz de se recuperar de um erro e informar adequadamente ao usuário o que aconteceu.
	- O Express faz um tratamento padrão caso nenhum outro tenha sido especificado.
	- Caso o erro tenha siido gerado a partir de um código assíncrono e deseje realizar o tratamento padrão, é preciso passar o erro para o "next"