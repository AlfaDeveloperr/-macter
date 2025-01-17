import React from 'react'
import './ALFACSS/index.css'
function Section_menu() {
  return (
    <section class="menu" id="menu">
      <h1 class="heading">our <span>menu</span></h1>
      <div class="box-container">
        <div class="box">
          <div class="box-head">
            <img src="" alt="" />
            <span class="menu-category">PIZZA</span>
            <h3>6 Mini Pizzas</h3>
            <div class="price">$104.99 <span>119.99</span></div>
          </div>
          <div class="box-bottom">
            <a href="#" class="btn" id="cart_Item_1">add to cart</a>
          </div>
        </div>
        <div class="box">
          <div class="box-head">
            <img src="" alt="" />
            <span class="menu-category">Burger</span>
            <h3>5 Mini Burgers</h3>
            <div class="price">$99.99 <span>109.99</span></div>
          </div>
          <div class="box-bottom">
            <a href="#" class="btn" id="cart_Item_2">add to cart</a>
          </div>
        </div>
        <div class="box">
          <div class="box-head">
            <img src="" alt="" />
            <span class="menu-category">PIZZA</span>
            <h3>2 Mixed Pizzas</h3>
            <div class="price">$49.99 <span> 59.99</span></div>
          </div>
          <div class="box-bottom">
            <a href="#" class="btn" id="cart_Item_3">add to cart</a>
          </div>
        </div>
        <div class="box">
          <div class="box-head">
            <img src="" alt="" />
            <span class="menu-category">Burger</span>
            <h3>3 Burgers</h3>
            <div class="price">$79.99 <span>$79.99</span></div>
          </div>
          <div class="box-bottom">
            <a href="#" class="btn" id="cart_Item_4">add to cart</a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Section_menu()