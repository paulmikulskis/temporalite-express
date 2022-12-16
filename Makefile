# You can view the temporal ui at http://localhost:8233
temporalite:
	docker compose up -d temporalite

workers:
	yarn ts-node src/worker/index.ts

client:
	yarn ts-node src/client.ts

up:
	make temporalite && make workers& make client