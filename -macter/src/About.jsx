import React from 'react'
import './ALFACSS/index.css'
function About() {
    return (
        <section class="about" id="about">
            <h1 class="heading">about <span>us</span></h1>
            <div class="row">
                <div class="image">
                    {/* <img src="images/about.jpg" alt="about"> */}
                </div>
                <div class="content">
                    <h3>What Is The Secret Recipe Of Our Burgers?</h3>
                    <p>
                        Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Quisquam
                        Voluptatem Facere Amet Temporibus Culpa Sit Illo Earum Cupiditate
                        Soluta Perferendis!
                    </p>
                    <p>
                        Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Quisquam
                        Voluptatem Facere Amet Temporibus Culpa Sit Illo Earum Cupiditate
                        Soluta Perferendis!
                    </p>
                    <p>
                        Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Quisquam
                        Voluptatem Facere Amet Temporibus Culpa Sit Illo Earum Cupiditate
                        Soluta Perferendis!
                    </p>
                    <a href="#" class="btn">learn more</a>
                </div>
            </div>
        </section>
    )
}
export default About()