## Aula 2.7
### Express: gravação de logs e servindo arquivos estáticos
---
- **Gravação de logs**
	- Uma funcionalidade muito importante para uma API é a gravação de logs.
	- Métodos do console nativo do JavaScript, como o console.log, console.error e console.warm:
		- Não é possível desativar logs;
		- Não é possível definir o nível de logs;
		- Funções síncronas.
	- Existem várias bibliotecas de log para o Node que tentam oferecer uma solução de log mais completa.
	- **Winston**
		- É uma biblioteca que suporta vários tipos de transporte.
		- Permite a configuração de formatos de log.
		- Suporta 7 níveis de log:
			- error: 0;
			- warm: 1;
			- info: 2;
			- http: 3;
			- verbose: 4;
			- debug: 5;
			- silly: 6;