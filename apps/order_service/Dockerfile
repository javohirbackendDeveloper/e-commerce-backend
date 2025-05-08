# Use base image
FROM base as builder

# Build order_service
RUN pnpm build --filter=order_service...

# Production image
FROM node:18-alpine as production

WORKDIR /usr/src/app

# Copy production dependencies
COPY --from=base /usr/src/app/node_modules ./node_modules
COPY --from=base /usr/src/app/pnpm-lock.yaml .
COPY --from=base /usr/src/app/package.json .
COPY --from=base /usr/src/app/.npmrc .

# Copy built application
COPY --from=builder /usr/src/app/apps/order_service/dist ./dist
COPY --from=builder /usr/src/app/apps/order_service/package.json ./app-package.json

# Set environment variables
ENV NODE_ENV=production
ENV PORT=4002

# Expose port
EXPOSE 4002

# Start command
CMD ["pnpm", "--filter", "order_service", "start:prod"]