# Use base image
FROM base as builder

# Build products_service
RUN pnpm build --filter=products_service...

# Production image
FROM node:18-alpine as production

WORKDIR /usr/src/app

# Copy production dependencies
COPY --from=base /usr/src/app/node_modules ./node_modules
COPY --from=base /usr/src/app/pnpm-lock.yaml .
COPY --from=base /usr/src/app/package.json .
COPY --from=base /usr/src/app/.npmrc .

# Copy built application
COPY --from=builder /usr/src/app/apps/products_service/dist ./dist
COPY --from=builder /usr/src/app/apps/products_service/package.json ./app-package.json

# Copy Prisma files if needed
COPY --from=builder /usr/src/app/apps/products_service/prisma ./prisma

# Set environment variables
ENV NODE_ENV=production
ENV PORT=4003

# Expose port
EXPOSE 4003

# Start command
CMD ["pnpm", "--filter", "products_service", "start:prod"]