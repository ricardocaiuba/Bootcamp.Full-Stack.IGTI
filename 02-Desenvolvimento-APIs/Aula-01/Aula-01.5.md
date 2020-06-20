## Aula 1.5
### Módulos do Node.js
---
- **Módulos do Node.js**
	- Um módulo do node.js é o mesmo que uma biblioteca no JavaScript.
	- É um conjunto de funções que podem ser incluídas em uma aplicação.
	- O Node.js segue o CommonJS. 
	- Assim é possível incluir um módulo que está em outro arquivo utilizando a função chamada require.
	- É possível criar um módulo e importá-lo em outro arquivo facilmente.
	- **Módulo HTTP**
		- O módulo nativo HTTP permite transferir dados através do protocolo HTTP.
		- Este módulo consegue criar um servidor HTTP capaz de escutar portas do servidor e enviar respostas de volta ao cliente.
	- **Módulo File System**
		- File System permite trabalhar com arquivos fazendo ações como ler, criar, atualizar, excluir e renomear arquivos.
		- Possui os métodos readFile(), appendFile(), writeFile(), unlink() e rename().
	- **Módulo Events**
		- O módulo Events permite criar, disparar e escutar eventos.
		- O objeto EventEmitter permite que sejam adicionadas call-backs para os eventos.
		- Para disparar um evento basta chamar o método emit().