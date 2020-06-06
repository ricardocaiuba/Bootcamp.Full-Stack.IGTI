## Aula 2.4
### Express: rotas, middlewares e tratamento de erros
---
- **Rotas**
	- É possível capturar todos os métodos HTTP para o mesmo endpoint utilizando o método "all".
	- O caminho para uma rota pode ser definido como uma string, um padrão de string ou uma expressão regular.
	- Caracteres especiais:
			- ?, +, * e ()
				- **?**: indica que a letra imediatamente anterior a ele é opcional.
				- **+**: indica que a letra imediatamente anterior a ela pode ser repetida diversas vezes naquela posição.
				- *:  indica que naquela posição pode ocorrer qualquer string.
				- **()**:  indica que a string dentro dos parênteses será tratada como uma unidade.
- "-" e "." são tratados normalmente