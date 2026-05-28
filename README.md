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




docker exec -it ai-kafka kafka-console-consumer \
--bootstrap-server localhost:9092 \
--topic user.created \
--from-beginning


sudo lsof -i :5432
sudo kill -9  <PID>