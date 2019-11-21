FROM node:8-alpine 
RUN mkdir -p /app/frontend
WORKDIR /app/frontend
COPY . /app/frontend
RUN npm install 
EXPOSE 3000 
CMD [ "npm", "start" ]