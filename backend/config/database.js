const mongoose = require("mongoose");

const connectDatabase = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          //   useFindAndModify: false,
        });
        console.log(`MongoDB connecteed: ${conn.connection.host}`);
      } catch (err) {
        console.error(err);
        process.exit(1);
      }

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

};

module.exports = connectDatabase;
