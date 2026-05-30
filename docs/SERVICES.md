Auth Service

Responsibilities:

- User Signup
- User Login
- JWT Generation
- JWT Validation
- User Management
- Event Publishing

Endpoints:

POST /auth/signup
POST /auth/login
POST /auth/refresh

Events:

user.created
user.logged_in
Chat Service

Responsibilities:

- Conversation Management
- Message Storage
- Message Validation
- Event Publishing

Endpoints:

POST /conversations
GET  /conversations

POST /messages
GET  /messages/:conversationId

Events:

chat.message.created
AI Orchestrator

Responsibilities:

- Consume Kafka Events
- Route AI Requests
- Call Providers
- Save AI Responses

Consumes:

chat.message.created

Produces:

assistant.message.created (future)