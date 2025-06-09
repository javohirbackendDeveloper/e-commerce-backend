FROM node:19.6-alpine

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

ENV NODE_ENV=production

COPY package.json pnpm-lock.yaml* ./

RUN --mount=type=cache,target=/app/.pnpm \
  pnpm set cache /app/.pnpm && \
  pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

USER node

EXPOSE 4000

CMD ["node", "dist/src/main.js"]
