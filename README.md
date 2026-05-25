# ai-workflow-platform
ai-workflow-platform


# TEST POSTGRES

## docker exec -it ai-postgres psql -U admin -d postgres
## \l

pnpm --filter @repo/database prisma generate
pnpm --filter @repo/database prisma migrate dev --name init
docker exec -it ai-postgres psql -U admin
\c ai_platform

\dt



docker exec -it ai-kafka kafka-console-consumer \
--bootstrap-server localhost:9092 \
--topic user.created \
--from-beginning