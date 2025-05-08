# ==== BUILD PHASE ====
FROM node:18-alpine as base

WORKDIR /usr/src/app

# Global dependencies
RUN npm install -g pnpm

# Copy package files
COPY pnpm-lock.yaml .
COPY package.json .
COPY .npmrc .

# Copy workspace files
COPY apps/ ./apps/
COPY packages/ ./packages/

# Install dependencies
RUN pnpm install --frozen-lockfile

# ==== PRODUCTION PHASE ====
FROM base as production

# Set production environment
ENV NODE_ENV=production

# Clean dev dependencies
RUN pnpm prune --prod