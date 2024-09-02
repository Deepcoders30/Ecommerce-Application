import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import "./home.scss";
import Category from "../../components/category/Category.js";
import {axiosClient} from "../../utils/axiosCient.js";
import Product from "../../components/product/Product";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";



function Home() {
  const categories=useSelector(state=>state.categoryReducer.categories);
  const [topProducts, setTopProducts]=useState(null);

  async function fetchData(){
    const topProductsResponse=await axiosClient.get("/products?filter[isTopPick][$eq]=true&populate=image");     
    setTopProducts(topProductsResponse.data.data);
  }
  
  useEffect(()=>{
    fetchData();  
  }, [])


  return (
    <div className="Home">
      <Hero />

      <section className="collection container">
        <div className="info">
          <h2 className="heading">Shop By Categories</h2>
          <p className="subheading">
            Shop from the best, our Film and TV Posters Collection.
          </p>

          <div className="content">
            {categories?.map(category => <Category key={category.id} category={category} />)}
            
          </div>
        </div>
      </section>

      <section className="collection container">
        <div className="info">
          <h1 className="heading">Our Top Picks</h1>
          <p className="subheading">All New Designs, Same Old Details.</p>

          <div className="content">
            {topProducts?.map(product => <Product key={product.id} product={product} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
