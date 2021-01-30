FROM node:15

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# If you are building your code for production
# RUN npm ci --only=production

COPY . .

EXPOSE 3002 3306

ADD start.sh /
RUN chmod u+x /start.sh

CMD ["/start.sh"]
