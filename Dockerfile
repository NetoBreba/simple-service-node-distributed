FROM node:latest

COPY service /home/service
WORKDIR /home/service/dist

EXPOSE 9000

RUN cd /home/service
RUN npm install
CMD ["node", "server.js"]