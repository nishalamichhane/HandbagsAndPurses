import React from 'react';
import './App.css';
import './index.css';
import Button from './components/Button.js';
import Product from './components/Product.js';
import Tile from './components/Tile.js';
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';
//import {logDOM} from "@testing-library/react";

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
          <nav className="nav">
          <Button btnText = "to the collection" onClick={()=>console.log("to the collection")}/>
          <Button btnText = "shop all bags" onClick={()=>console.log("shop all bags")}/>
          <Button btnText = "pre-orders" toBeDisabled={true}/>
          </nav>
      <main className="main">
       <Product labelTxt="Best Seller" price="€400" bagName="The Handy Bag" img={bag1} />
          <Product labelTxt="Best Seller" price="€250" bagName="The Styling Bag" img={bag2} />
          <Product labelTxt="New Collection" price="€300" bagName="The Simple Bag" img={bag3} />
          <Product labelTxt="New Collection" price="€150" bagName="The Trendy Bag" img={bag4} />
      </main>
          <footer className="footer">
              <section className="section p"><Tile title="The Brand" paragraph="Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsumLorem Ipsum lorem ipsumLorem Ipsum lorem ipsumLorem Ipsum lorem ipsum"/></section>
              <section className="section"><Tile title=""  paragraph={brand}/></section>
              <section className="section"><Tile  title= "" paragraph={ourStory}/></section>
              <section className="section p"><Tile title="Our Story" paragraph="Lorem Ipsum lorem ipsumLorem Ipsum lorem ipsumLorem Ipsum lorem ipsumLorem Ipsum lorem ipsumLorem Ipsum lorem ipsum"/></section>
          </footer>
      </>
  );
}
export default App;



