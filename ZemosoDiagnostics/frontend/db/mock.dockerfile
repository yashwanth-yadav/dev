FROM node:14-alpine
RUN npm install -g json-server
COPY . /data
EXPOSE 3004
CMD ["json-server","--watch","/data/db.json","--host","0.0.0.0","-p","3004"]