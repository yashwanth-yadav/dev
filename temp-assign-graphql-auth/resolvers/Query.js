const jwt = require('jsonwebtoken');

exports.Query= {
    hello: () => {
      return "World";
    },
    products: (parent,{filter},req,{db}) =>  {
      if (!req.isAuth) {
        throw new Error('Unauthenticated!');
      }
      let filteredProducts=db.products;
      if(filter){
        const {onSale,avgRating}=filter;
        if(onSale){
          filteredProducts=products.filter(product=>{
            return product.onSale;
          })
          if ([1, 2, 3, 4, 5].includes(avgRating)) {
            filteredProducts = filteredProducts.filter((product) => {
              let sumRating = 0;
              let numberOfReviews = 0;
              db.reviews.forEach((review) => {
                if (review.productId === product.id) {
                  sumRating += review.rating;
                  numberOfReviews++;
                }
              });
              const avgProductRating = sumRating / numberOfReviews;
    
              return avgProductRating >= avgRating;
            });
          }
        }
      }
      return filteredProducts;
    },
    
    product:(parent,{id},req,{db})=>{
      // if (!req.isAuth) {
      //   throw new Error('Unauthenticated!');
      // }
        //const {id}=args;

        return product=db.products.find((product) => product.id === id);
    },
    categories:(parent,args,req,{db})=>{
      if (!req.isAuth) {
        throw new Error('Unauthenticated!');
      }
      return db.categories
    },
    category:(parent,{id},{db})=>{
     // const {id}=args;

      return db.categories.find((category)=>category.id===id)
    },

    login: async (parent,{ email, password },{db}) => {
      // console.log(db.users);
      const user = await db.users.find((user) => user.email === email);
      if (!user) {
        throw new Error('User does not exist!');
      }
      //bcrypt 
      const isEqual = await password===(user.password);
      if (!isEqual) {
        throw new Error('Password is incorrect!');
      }
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        'somesupersecretkey',
        {
          expiresIn: '1h'
        }
        
      );
      const categories=db.categories;
      const products=db.products;
      const reviews=db.reviews;
      
      return { userId: user.id, token: token, tokenExpiration: 1,categories:categories,products:products,reviews:reviews};
    }
  };