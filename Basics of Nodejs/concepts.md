## nodejs JS runtime

JS runs outside of the browser, the browser has something called V8 engine which runs the code in the browser.

## npm - node package manager

It helps to download various packages present in the browser to our local repo.

## Kaise start kare from scratch : - 

1. Sabse pehle hume npm init -y karna hai -> Yeh package.json initialise karega jismein saare packages aur dependencies jo hum install karenge uska version and details as well as scripts to run the project present rahega.

2. Ab packages install karne ke liye -> npm i <Package_name>

3. Ek file banao like index.js/server.js jaha tumhara server setup hoga

4. Start writing the code.

## Package.json V/S Package.lock.json

## package.json:
 This file is primarily used for managing and documenting metadata about the project, including its name, version, author, dependencies, scripts, and other configuration details. It acts as a manifest for the project.

## package-lock.json: 
This file is generated and updated automatically by npm when installing or updating packages. It is used to lock the exact versions of dependencies installed in the project, ensuring reproducibility and consistent installations across different environments.

## Dependencies V/S Dev-Dependencies

dependencies are packages required for your application to run in production, while devDependencies are tools needed only for local development and testing.

## Projects ka structure kya rakhe : - 

Yeh saare folders hamesha banao for seperation of logic and responsibilities. Har ek module ka apna el specific function hoga aur woh function ka code hamesha ussi module mein hoga taaki readaebility,maintainibility aur testing aasan ho jaaye.

1. Models -> Yaha jo bhi database mein entities banaoge uska schema/blueprints likhoge.

2. Routes -> Yaha par kunsa feature kis route endpoint par hit karne par chalega woh mapping karoge bas, yaha tumhe function ko implement nhi karna hai.

3. Controllers -> Yaha par business logic ka part jismein : User/request se input lete hain,service ko call karte hai aur response return karte hain.Controllers ko thin rakho ,actual business logic maximum possible services mein honi chahiye.

4. Services -> Actual business logic handle karte hain - jaise calculations,database queries ,validations etc.

5. Middlewares -> Yaha par function ke execute karne se pehle kuch checks karne ke liye function banate hai jise middleware karte hai jo final logic run hone se pehle chalta hai uska files iss folder mein.

6. Config : - Iss folder mein database/redis/nodemailer etc koi bhi service ka configuration files likhte hai

7. Utils/Helper : - Reusable generic functions,jaise token generation,date formatting,password helpers yaha likhte hai.

8. Validators/Schemas : - Request body,params,query etc validate karne ka schema(Zod/joi etc) yaha likhenge.

9. Constants :- Roles,status codes,fixed messages/enums jaise reusable constants yaha,

10. Tests :- Unit/integration testing files.

## Core Basics of Nodejs :- 

1. Jab bhi koi secret keys ko rakhna hi,env variables mein rakho aur isko access karne ke liye PROCESS.ENV.<KEY> use karo. -> Refer 01-process-object.ts

2. 