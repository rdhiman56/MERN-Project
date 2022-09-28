const mongoose = require("mongoose");

const connectDatabase = () => {
    var dburl = "mongodb://127.0.0.1:27017/ecommerce";
    mongoose.connect(dburl, function(err, data) {
      if (err) {
        throw err;
      }
      console.log(`db connected ${data.connection.host}`);
    });
//   mongoose
//     .connect("mongodb://127.0.0.1:27017/Ecommerceapp")
//     .then((data) => {
//       console.log(`Mongodb connected with server : ${data.connection.host}`);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
  //   mongoose
  //     .connect("mongodb://127.0.0.1:27017/Ecommerce")
  //     .then((data) => {
  //       console.log(`Mongodb connected with server : ${data.connection.host}`);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  // mongoose
  //   .connect("mongodb://127.0.0.1:27017/Ecommerce", {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     // useCreateIndex: true
  //   })
  //   .then((data) => {
  //     console.log(`Mongodb connected with server : ${data.connection.host}`);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // mongoose.connect(process.env.DB_URI, function(err, data) {
  //     if(data){
  //         console.log(`Mongodb connected with server : ${data.connection.host}`);
  //     }else {
  //         console.log(err);
  //     }
  // });
};

module.exports = connectDatabase;
