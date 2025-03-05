FROM node:18-alpine AS builder
WORKDIR /app

COPY pnpm-lock.yaml ./
COPY package.json ./
COPY pnpm-workspace.yaml ./
COPY tsconfig.json ./
COPY front/package.json ./front/package.json
COPY front/tsconfig.json ./front/tsconfig.json

RUN corepack enable && pnpm install --frozen-lockfile --filter front...

COPY front ./front

RUN cd front && pnpm install && pnpm build

FROM node:18-alpine AS runner
WORKDIR /app

COPY --from=builder /app/front/.next ./.next
COPY --from=builder /app/front/package.json ./package.json
COPY --from=builder /app/front/node_modules ./node_modules
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

RUN corepack enable && pnpm install --prod --no-frozen-lockfile

EXPOSE 3000
CMD ["pnpm", "--filter", "front", "start"]