FROM --platform=linux/amd64 oven/bun

WORKDIR /app

# Install dependencies first
COPY package*.json ./
RUN bun install

# Copy the rest of the application
COPY . .

EXPOSE 3000
CMD ["bun", "run", "dev"]