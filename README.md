# MeanStackDemoApp
A demo application that uses Mean Stack end-to-end.

Need to donwload below items:-
1. MongoDb - https://www.mongodb.com/download-center#community.
2. NodeJs - https://nodejs.org/en/download/.
3. AngularJs - https://docs.angularjs.org/misc/downloading.
4. Finally say npm install express --save, this will add express to your project.

See below link to install MongoDB on windows:-
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

Run Configuration:-
Once MongoDB id installed follow below steps:

1. Open Cmd with admin privilages and navigate to the bin folder of MongoDB.
2. Type Mongod, this will start your MongoDB server.
3. Type Mongo, this will connect to the service
4. Now type "use mean-demo", this will open mean-demo DB or create a new DB named mean-demo, if it does not exist.
5. Type "db.createCollection("meeetups")", this will create a collection named meetups.
6. Now you can run the application and data gets saved to mean-demo meetups collections and fetch from db as well.

