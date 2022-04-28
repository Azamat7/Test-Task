# Test-Task
The app was written on React on the frontend and NestJS on the backend. Everything is written using Typescript. S3 Buckets are used to store images.

## Hosted version

#### You can access the web application hosted on DigitalOcean: http://159.223.1.47/


## Usage

#### 1. Clone repository
    git clone https://github.com/Azamat7/Test-Task.git

#### 2. Run the App locally 
##### Environment variables
You need to set environemnt variables in order to run the application. (Since this is a test project I uploaded my .env files to this repo as well, in order to make the setup quick and easy)

For frontend: .env 

    REACT_APP_API_BASE

For backend: src/common/envs/.env

    PORT
    BASE_URL
    
    DATABASE_HOST
    DATABASE_NAME
    DATABASE_USER
    DATABASE_PASSWORD
    DATABASE_PORT
    
    AWS_S3_BUCKET
    AWS_S3_ACCESS_KEY
    AWS_S3_SECRET_KEY

##### Install dependencies in frontend and start
    npm install
    npm start

   ##### Install dependencies in backend, run migrations, start
    npm install
    npm run start:dev
   
App will be opened in browser at http://localhost:3000/
