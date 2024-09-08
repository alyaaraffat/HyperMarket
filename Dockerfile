#Base image of Nodejs v20.16
FROM node:20.16.0

#Set the working directory to -> /app
WORKDIR /app

#Copy the packing files to the container
COPY package.json .

#Install all Dependencies of this React js
RUN npm install

#Install Serve package to serve our static pages
RUN npm i -g serve

#Copying all projects files to the container
COPY . .

#Application Build
RUN npm run build

#Access the website from port 3000
EXPOSE 3000

#Run the Serve package to run the app
CMD [ "serve", "-s", "dist" ]
