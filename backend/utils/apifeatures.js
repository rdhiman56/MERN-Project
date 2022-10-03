// APi Features Links to ProductController File.

class ApiFeatures {
  // constructor
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  // Api Search feature
  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    //console.log("keyword", keyword);

    this.query = this.query.find({...keyword});
    return this;
  }

  // Api filter Feature

  filter() {
    const queryCopy = { ...this.queryStr };
    //   Removing some fields for category
    const removeFields = ["keyword", "page", "limit"];

    removeFields.forEach((key) => delete queryCopy[key]);

    // Search like this in Postman for category :=> http://localhost:4000/api/v1/products?keyword=product1&category=Laptop
    //console.log("category", queryCopy);
    // Search like this in Postman for Price Range :=> http://localhost:4000/api/v1/products?keyword=product1&price[gt]=1200&price[lt]=2000
    //console.log("price", queryCopy);

    // Filter For Price and Rating
    let queryStr = JSON.stringify(queryCopy);
    //console.log("price Stringfy", JSON.stringify(queryCopy));
    
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    // parse again will make object from stringfy
    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;

    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);

    return this;
  }
}

module.exports = ApiFeatures;
