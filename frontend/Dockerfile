FROM node:8-alpine 
RUN mkdir -p /app/client
WORKDIR /app/client
COPY . /app/client
RUN npm install 
EXPOSE 3000 
CMD [ "npm", "start" ]