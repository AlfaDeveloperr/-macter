import React from 'react'
import './ALFACSS/index.css'
function blogs() {
    const BlogsSection = () => {
        const blogs = [
            {
                id: 1,
                image: "images/blog-1.jpg",
                title: "how to make burgers?",
                date: "by admin / 10st may, 2020",
                description: "Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Temporibus, Laudantium!",
                link: "#",
            },
            {
                id: 2,
                image: "images/blog-2.jpg",
                title: "how to make burgers?",
                date: "by admin / 10st may, 2020",
                description: "Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Temporibus, Laudantium!",
                link: "#",
            },
            {
                id: 3,
                image: "images/blog-3.jpg",
                title: "how to make burgers?",
                date: "by admin / 10st may, 2020",
                description: "Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Temporibus, Laudantium!",
                link: "#",
            },
        ];
        return (
            <section className="blogs" id="blogs">
                <h1 className="heading">
                    our <span>blog</span>
                </h1>
                <div className="box-container">
                    {blogs.map((blog) => (
                        <div className="box" key={blog.id}>
                            <div className="image">
                                <img src={blog.image} alt="blog" />
                            </div>
                            <div className="content">
                                <a href={blog.link} className="title">
                                    {blog.title}
                                </a>
                                <span>{blog.date}</span>
                                <p>{blog.description}</p>
                                <a href={blog.link} className="btn">
                                    read more
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
}