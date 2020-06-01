## Aula 1.4
### Node.js
---
- **Node.js Event loop**
	- o Node.js é uma plataforma baseada em eventos. Isso significa que tudo o que acontece no Node.js é uma reação a um evento.
	- Uma transação processada passa por várias callbacks.
	- Node.js trabalha com assincronismo, permitindo que seja desenvolvido uma aplicação orientada a eventos, graças ao Event loop.
	- O Event loop é basicamente um loop infinito, que a cada iteração,  verifica se existem novos eventos em sua fila de eventos.