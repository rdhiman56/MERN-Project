# MERN-Project

Ecommerce End to End Project

Server connection :- Express

// Connect Mongo DB to server

After brew installation, here are commands:
xcode-select --install
brew tap mongodb/brew
brew install mongodb-community@5.0
brew services start mongodb-community@5.0
brew services stop mongodb-community@5.0
mongod --config /opt/homebrew/etc/mongod.conf --fork
mongosh
https://www.youtube.com/watch?v=s1WQ0eEpqqg

MONGO Learining:--
setup mongo using terminal : zshrc, vim .zshrc , export brew mongo path etc
https://www.anycodings.com/questions/zsh-command-not-found-mongo

Mongo DB setup :- "show dbs" (all database), "use ecommerce" (to createdatabase), 

Collection 
find, create, limit, update:- 

"db.students.insertOne({name:"Rahul", color:"sexy"})" (Add collection)
db.personal.insertMany([{ name: "rahul"},{name: "dhiman"},{name:"harish"}])
https://www.youtube.com/watch?v=AYDP1S5BbTo

MongoDB:- Main video
https://www.youtube.com/watch?v=AN3t-OmdyKA




=>>>>>>>>>>>>>> Start to End Project >>>>>>>>>>>>>>>>

1. Basic Server Connection
2. connect DB
3. Api creation - MongoDB using postman / collection / routing / func
4. backend-error-handling -> Handling uncought exception , unhandled proimise Rejection, wrong mongoDB id Error
5. search-filter-pagination
6. Backend User/ Password Authentication.

