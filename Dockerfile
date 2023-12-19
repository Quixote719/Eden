FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable
COPY . /app
WORKDIR /app

RUN pnpm install
RUN pnpm run build

FROM base
CMD [ "pnpm", "run", "dev" ]
