FROM node:19.6-alpine


RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

ENV NODE_ENV=production

COPY package.json pnpm-lock.yaml* ./

RUN --mount=type=cache,target=/app/.pnpm \
  pnpm set cache /app/.pnpm && \
  pnpm i --frozen-lockfile --prod

USER node

COPY --chown=node:node . .

EXPOSE 4002

CMD ["pnpm", "run", "start:prod"]

