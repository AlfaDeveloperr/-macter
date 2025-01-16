import React from 'react'

function footer() {
    return (
        <section className="footer">
            <div className="search">
                <input type="text" className="search-input" placeholder="Search" />
                <button className="btn btn-primary">search</button>
            </div>
            <div className="share">
                <a href="#" className="fab fa-facebook"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
                <a href="#" className="fab fa-pinterest"></a>
            </div>

            <div className="links">
                <a href="#" className="active">Home</a>
                <a href="#">About</a>
                <a href="#">Menu</a>
                <a href="#">Products</a>
                <a href="#">Review</a>
                <a href="#">Contact</a>
                <a href="#">Blogs</a>
            </div>

            <div className="credit">
                created by <span>Full stack Developer Nebi Aytiş</span> | all rights reserved
            </div>
        </section>
    )
}
export default footer