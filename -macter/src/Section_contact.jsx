import React from 'react'
import './ALFACSS/index.css'
function Section_contact() {
    return (
        <section className="review" id="review">
            <h1 className="heading">
                customer's <span>review</span>
            </h1>
            <div className="box-container">
                <div className="box">
                    <img src="images/quote.png" alt="quote" />
                    <p>
                        Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Autem Nulla
                        Repellendus Similique Porro Explicabo, Blanditiis Voluptatibus
                        Obcaecati Harum Est, Eos Quo Modi Alias. Possimus Odio Quam Ex Earum
                        Ducimus! Officia.
                    </p>
                    <img src="images/avatar-1.png" alt="avatar" className="user" />
                    <h3>Jennifer Becker</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>

                <div className="box">
                    <img src="images/quote.png" alt="quote" />
                    <p>
                        Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Autem Nulla
                        Repellendus Similique Porro Explicabo, Blanditiis Voluptatibus
                        Obcaecati Harum Est, Eos Quo Modi Alias. Possimus Odio Quam Ex Earum
                        Ducimus! Officia.
                    </p>
                    <img src="images/avatar-2.png" alt="avatar" className="user" />
                    <h3>John Doe</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>

                <div className="box">
                    <img src="images/quote.png" alt="quote" />
                    <p>
                        Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Autem Nulla
                        Repellendus Similique Porro Explicabo, Blanditiis Voluptatibus
                        Obcaecati Harum Est, Eos Quo Modi Alias. Possimus Odio Quam Ex Earum
                        Ducimus! Officia.
                    </p>
                    <img src="images/avatar-3.png" alt="avatar" className="user" />
                    <h3>Lisa Arambula</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section_contact()