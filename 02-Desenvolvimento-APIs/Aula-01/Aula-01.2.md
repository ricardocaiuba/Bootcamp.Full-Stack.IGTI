## Aula 1.2
### Backend, Frontend a API's
---
- **API**
	- Application Programming Interface.
	- Conjunto de serviços que são expostos de forma a permitir a comunicação entre sistemas.
	- Uma aplicação acessa recursos de outra sem saber como foram implementados.
		- Quem está fornecendo tem um maior controle sobre o que está sendo feito.
	- Pode ser vista como um contrato, representado pela documentação.
	- **Webservices**:
		- Serviços que fazem parte de uma API são chamados de webservices.
		- Um webservice somente transmite as informações, não sendo por si só uma aplicação.
		- ***Vantagens***:
			- Facilidade na integração de sistemas;
				- Depende do protocolo HTTP e um formato, como o JSON.
			- Favorece a reutilização de software;
				- Integração entre aplicações desenvolvidas em linguagens e plataformas diferentes.
			- Segurança na integração.
				- Evita que aplicações interagem diferentes banco de dados.

- **REST**
	- É a sigla para Representational State Transfer e foi descrito por Roy Fielding, um dos protocolos HTTP.
	- Utiliza uma URI (Uniform Resource Identifier)
	- Através dos endpoits é possível realizar várias operações.
	- Além do endpoint, o cliente precisa informar o método HTTP:
		- *GET*: obter os dados de um recurso.
		- *POST*: Cria um novo recurso.
		- *PUT:* substituir os dados de um determinado recurso.
		- *DELETE*: excluir um determinado recurso.