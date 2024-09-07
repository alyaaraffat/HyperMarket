#Base image of Nodejs v20.16
FROM node:20.16.0 AS build

#Set the working directory
WORKDIR /app

#Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

#Install node || react Dependencies
RUN npm install

#Copy the rest of the application to the working directory
COPY . .

#Build the app --> the output will be in /dist
RUN npm run build

#NGINX to Host the app
FROM nginx:stable-alpine

#Copy the build files to the NGINX defalut directory
COPY --from=build /app/dist /usr/share/nginx/html

#Expose port 80 to access the app
EXPOSE 80

#Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
