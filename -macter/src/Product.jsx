import React from 'react'
import './ALFACSS/index.css'
function Product() {
    return (
        <section class="products" id="products">
            <h1 class="heading">our <span>products</span></h1>
            <div class="box-container">
                <div class="box">
                    <div class="box-head">
                        <span class="title">MINI BURGER</span>
                        <a href="#" class="name">Bacon Burger</a>
                    </div>
                    <div class="image">
                        {/* <img src="images/product-1.png" alt=""> */}
                    </div>
                    <div class="box-bottom">
                        <div class="info">
                            <b class="price">$6.00</b>
                            <span class="amount">110gr / 300 Cal</span>
                        </div>
                        <div class="product-btn">
                            <a href="#">
                                <i class="fas fa-plus"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="box-head">
                        <span class="title">MINI BURGER</span>
                        <a href="#" class="name">Bacon Burger</a>
                    </div>
                    <div class="image">
                        {/* <img src="images/product-2.png" alt=""> */}
                    </div>
                    <div class="box-bottom">
                        <div class="info">
                            <b class="price">$6.00</b>
                            <span class="amount">110gr / 300 Cal</span>
                        </div>
                        <div class="product-btn">
                            <a href="#">
                                <i class="fas fa-plus"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="box dark-bg">
                    <div class="box-head">
                        <span class="title">MINI BURGER</span>
                        <a href="#" class="name">Bacon Burger</a>
                    </div>
                    <div class="image">
                        {/* <img src="images/dark-product.jpg" alt=""> */}
                    </div>
                    <div class="box-bottom">
                        <div class="info">
                            <b class="price">$6.00</b>
                            <span class="amount">110gr / 300 Cal</span>
                        </div>
                        <div class="product-btn">
                            <a href="#">
                                <i class="fas fa-plus"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Product()