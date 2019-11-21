FROM node:8-alpine 
RUN mkdir -p /app/backend
WORKDIR /app/backend
COPY . /app/backend
RUN npm install 
EXPOSE 5000 
CMD [ "npm", "start" ]