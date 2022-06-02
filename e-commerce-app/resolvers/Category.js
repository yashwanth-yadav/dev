exports.Category={
    products:({id:categoryId},{filter},{db})=>{
      //const categoryId=parent.id;
      const categoryProducts=db.products.filter((product)=>product.categoryId)
      let filteredCategoryProducts=categoryProducts;
      if(filter){
        const {onSale}=filter;
        if(onSale){
          filteredCategoryProducts=filteredCategoryProducts.filter(product=>{
            return product.onSale;
          });
        }
        
      }
      return filteredCategoryProducts;
    }
  };