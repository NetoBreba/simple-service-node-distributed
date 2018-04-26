FROM node:latest

COPY ../service /home
WORKDIR /home/service/dist

EXPOSE 9000

CMD ["npm install"]
CMD ["node", "server.js"]