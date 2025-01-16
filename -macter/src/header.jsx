import { useState } from 'react'
import './ALFACSS/index.css'

function header() {

    return (
        <>
            <header className="header">
                <a href="#" className="logo">
                    <img src="https://www.associazioneargilla.it/wp-content/uploads/2019/07/masterchef_logo_sub_001_Italia_2-01-856x1024.png" alt="" />
                </a>
                <nav className="navbar">
                    <a className="active" href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#menu">Menu</a>
                    <a href="#products">Products</a>
                    <a href="#review">Review</a>
                    <a href="#contact">Contact</a>
                    <a href="#blogs">Blogs</a>
                </nav>

                <div className="buttons">
                    <button id="fas-fa-users">
                        <i className="fas fa-users"></i>
                    </button>
                    <button id="cart-btn">
                        <i className="fas fa-shopping-cart"></i>
                    </button>
                    <button id="menu-btn">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                <div className="cart-items-container">
                    {['cart item 01', 'cart item 02', 'cart item 03', 'cart item 04'].map((item, index) => (
                        <div className="cart-item" key={index}>
                            <i className="fas fa-times" id={`cart_Item_${index}_Icons`}></i>
                            <img src="" alt="" />
                            <div className="content">
                                <h3>{item}</h3>
                                <div className="price">$15.99/-</div>
                            </div>
                        </div>
                    ))}
                    <a href="#" className="btn">CheckNow Now</a>
                </div>
            </header>
        </>
    )
}

export default header