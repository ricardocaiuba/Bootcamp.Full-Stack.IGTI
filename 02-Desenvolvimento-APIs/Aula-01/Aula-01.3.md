## Aula 1.3
### Node.js
---
- **Node.js**
	- Criado em 2009 na tentativa de resolver o problema de arquiteturas bloqueantes.
	- Plataforma como .NET, Java ou PHP paralizam um processamento enquanto realizam im processo I/O no servidor.
		- Esta paralização é o chamado de modelo bloqueante (Blocking-Thread)
		- Enquanto uma requisição é processada, as demais ficam ociosas em espera.
		- Esses servidores criam várias threads para darem vazão a fila de espera.
	- O Node.js já possui uma arquitetura não bloqueante.
	- Utiliza bastante a programação assíncrona, com o auxílio das funções de callback do JavaScript