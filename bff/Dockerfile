FROM node:18-alpine AS builder
WORKDIR /app

# Copiar archivos necesarios para instalar dependencias
COPY pnpm-lock.yaml ./
COPY package.json ./
COPY pnpm-workspace.yaml ./
COPY tsconfig.json ./
COPY bff/package.json ./bff/package.json
COPY bff/tsconfig.json ./bff/tsconfig.json

# Habilitar corepack e instalar dependencias del BFF
RUN corepack enable && pnpm install --frozen-lockfile --filter bff...

# Copiar el código del BFF
COPY bff ./bff

# Build del BFF
RUN cd bff && pnpm install --filter bff && pnpm tsc --project ./tsconfig.json

FROM node:18-alpine AS runner
WORKDIR /app

# Copiar solo lo necesario para ejecutar la aplicación
COPY --from=builder /app/bff/dist ./dist
COPY --from=builder /app/bff/package.json ./package.json
COPY --from=builder /app/bff/node_modules ./node_modules
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml

# Instalar dependencias nuevamente en el runner
RUN corepack enable && pnpm install --prod --no-frozen-lockfile

# Verificar que las dependencias estén presentes
RUN ls -la node_modules
RUN ls -la node_modules/cors

EXPOSE 5000
CMD ["pnpm", "--filter", "bff", "start"]