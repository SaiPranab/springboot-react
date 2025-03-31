export default function Product({title, price, ...others}) {
    // console.log(props);
    console.log("I am inside Product Component");
    
    
    return <>
      <h1>{title}</h1>
      <h2>{price}</h2>
      <h3>{others.description}</h3>
    </>
}

// export default Product;