## Aula 2.3
### **Express: instalação, Hello World e configurações iniciais**
---
- **Configurações iniciais**
	- Nos exemplos anteriores foi utilizado o CommonJS através do método require para importação e exportação de módulos.
	- O padrão atual do Javascript são os módulos do ECMAScript 6.
	- Node.js está começando a suportar este modo, bastando habilitar uma flag no momento.
		- `node -experimental-modules src/index.js`.
		- incluir `"type": "module"` no ***package.json***.