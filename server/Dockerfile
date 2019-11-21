FROM node:8-alpine 
RUN mkdir -p /app/server
WORKDIR /app/server
COPY . /app/server
RUN npm install 
EXPOSE 5000 
CMD [ "npm", "start" ]