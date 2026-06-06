# ai-workflow-platform
ai-workflow-platform


# TEST POSTGRES

## docker exec -it ai-postgres psql -U admin -d postgres
\c ai_platform
\dt


docker compose down -v
pnpm --filter @repo/database generate
docker compose up
pnpm --filter @repo/database migrate --name init
pnpm --filter @repo/database migrate --name chat_models




pnpm --filter auth-service dev
pnpm --filter api-gateway dev
pnpm --filter ai-orchestrator dev
pnpm --filter chat-service dev
pnpm --filter web-ui dev

pnpm --filter knowledge-service dev



docker exec -it ai-kafka kafka-console-consumer \
--bootstrap-server localhost:9092 \
--topic user.created \
--from-beginning


sudo lsof -i :5432
sudo kill -9  <PID>




https://a9152028-0b33-4cbb-8ff9-e2ec7952a426.us-east-2-0.aws.cloud.qdrant.io



Where You Are Today

Your pipeline is:

Question
   ↓
Embedding
   ↓
Qdrant
   ↓
Top Chunks
   ↓
Prompt
   ↓
LLM
   ↓
Answer



What You've Actually Built

You now have:

✅ API Gateway
✅ Auth Service
✅ Chat Service
✅ Kafka Event Bus
✅ AI Orchestrator
✅ Multi-Provider AI
✅ Streaming Responses
✅ Knowledge Service
✅ Ollama Embeddings
✅ Qdrant Vector Search
✅ Complete RAG Pipeline