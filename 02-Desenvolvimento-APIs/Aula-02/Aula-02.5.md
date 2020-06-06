## Aula 2.5
### Express: rotas, middlewares e tratamento de erros
---
- **Middlewares**
	- Funções de middlewares são funções que tem acesso ao seguinte:
		- Objeto de solicitação: (request).
		- Objeto de resposta: (response).
		- Próxima função de middleware no ciclo da requisição e reposta do aplicativo (next)
	- Podem executar qualquer código, fazer mudanças nos objetos de solicitação, encerrar o ciclo e chamar a próxima função de middleware na pilha.
	- Ela pode ser utilizada para interceptar chamadas em específico ou qualquer chamada.
	- Configuração em nível de aplicação ou roteador.