FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3173

# Comando para levantar Vite/React exponiendo el puerto hacia fuera
CMD ["npm", "run", "dev", "--", "--host"]