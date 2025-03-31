import './App.css'
import Product from './components/Product'
// import {Greet1} from './components/Greet';
import {Greet} from './components/Greet';
import { shoeData } from './data/StoreData';

function App() {
  console.log("I am inside App Component");
  let a = 100;
  let b = 20;
  console.log(a+b);

  return (
    <>
      {/* {a + b} */}
      {/* <h1>Hello</h1>     */}
      {/* <Product></Product> */}

      {/* <Product />
      <Product />
      <Product /> */}

      {/* <Product title="Campus Shoes" price="1999.99"/>
      <Product title="Adidas" price="3999.99"/>
      <Product title="PUMA" price="4999.99"/>
      <Product ti as title="Nike" price="6000.99" description="Very Good Shoes" tag="running shoes"/>

      <Greet /> */}

      <Product title={shoeData[0].title} price={shoeData[0].price} />
      <Product title={shoeData[1].title} price={shoeData[1].price} />

      {
        // shoeData.map((shoe) => {
        //   return <Product title={shoe.title} price={shoe.price} description={shoe.description} />
        // })
        
        shoeData.map((shoe, idx) => <Product title={shoe.title} price={shoe.price} description={shoe.description} key={idx}/>)
      }
    </>
  )
}



export default App
