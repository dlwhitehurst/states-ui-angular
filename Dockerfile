FROM node:18-alpine3.16 as build
WORKDIR /app

RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install --legacy-peer-deps
COPY . .
RUN ng build

FROM nginx as runtime
COPY --from=build /app/dist /usr/share/nginx/html
