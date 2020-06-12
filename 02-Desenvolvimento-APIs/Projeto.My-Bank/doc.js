export const swaggerDocument = {
  swagger: "2.0",
  info: {
    description: "My Bank API description",
    version: "1.0.0",
    title: "My Bank API",
    contact: {
      email: "ricardo.caiuba@gmail.com",
    },
  },
  host: "localhost:3000",
  tags: [
    {
      name: "account",
      description: "Account Management",
    },
  ],
  paths: {
    "/account": {
      get: {
        tags: ["account"],
        summary: "Get existing accounts",
        description: "Get existing accounts description",
        produces: ["application/json"],
        responses: {
          "200": {
            description: "successful operation",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/Account",
              },
            },
          },
          "400": {
            description: "Error occurred",
          },
        },
      },
      post: {
        tags: ["account"],
        summary: "Create a new account",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Account object",
            required: true,
            schema: {
              $ref: "#/definitions/Account",
            },
          },
        ],
        responses: {
          "200": {
            description: "Account created",
          },
          "400": {
            description: "Error occurred",
          },
        },
      },
    },
  },
  definitions: {
    Account: {
      type: "object",
      properties: {
        name: {
          type: "string",
          example: "Ricardo Rodrigues",
        },
        balance: {
          type: "integer",
          example: 150.56,
        },
      },
    },
  },
  externalDocs: {
    description: "Find out more about Swagger",
    url: "http://swagger.io",
  },
};
