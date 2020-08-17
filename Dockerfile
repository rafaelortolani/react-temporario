# pull official base image
FROM node:alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json /app

RUN yarn install

# add app
COPY . /app

# start app
CMD ["yarn", "start"]
