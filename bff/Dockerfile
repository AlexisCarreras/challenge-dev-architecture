FROM node:18-alpine AS builder
WORKDIR /app

COPY pnpm-lock.yaml ./
COPY package.json ./
COPY pnpm-workspace.yaml ./
COPY tsconfig.json ./
COPY bff/package.json ./bff/package.json
COPY bff/tsconfig.json ./bff/tsconfig.json

RUN corepack enable && pnpm install --frozen-lockfile --filter bff...

COPY bff ./bff

RUN cd bff && pnpm install --filter bff && pnpm tsc --project ./tsconfig.json

FROM node:18-alpine AS runner
WORKDIR /app

COPY --from=builder /app/bff/dist ./dist
COPY --from=builder /app/bff/package.json ./package.json
COPY --from=builder /app/bff/node_modules ./node_modules
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

RUN corepack enable && pnpm install --prod --no-frozen-lockfile

RUN ls -la node_modules
RUN ls -la node_modules/cors

EXPOSE 5000
CMD ["pnpm", "--filter", "bff", "start"]