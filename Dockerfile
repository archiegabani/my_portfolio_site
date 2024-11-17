# Stage 1: Build the React application
FROM node:18-alpine AS build

WORKDIR /gabani_archie_final_site

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build && npm run lint && npm run prettier:check && npm test

# Stage 2: Serve the built application
FROM node:18-alpine

RUN npm install -g serve

WORKDIR /gabani_archie_final_site

COPY --from=build /gabani_archie_final_site/dist ./dist

EXPOSE 5575

# Use a non-root user for better security
RUN adduser -D reactuser
USER reactuser

CMD ["serve", "-s", "dist", "-l", "5575"]
