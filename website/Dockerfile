# Use official Hugo extended image with recent version
FROM hugomods/hugo:exts-0.140.1 AS builder

WORKDIR /src
COPY . .

# Build the site
RUN hugo --minify

# Use lightweight server for production
FROM node:20-alpine
WORKDIR /app

# Install serve
RUN npm install -g serve

# Copy built site from builder
COPY --from=builder /src/public ./public

# Railway provides PORT env var
CMD serve public -l $PORT
