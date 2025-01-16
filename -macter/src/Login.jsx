import React from 'react'
import './ALFACSS/Login.css'
function Login() {
    return (
        <div className="wrapper">
            <div className="container main">
                <div className="row">
                    {/* Sol Taraf */}
                    <div className="col-md-6 side-image">
                        {/* Görsel */}
                        <img src="" alt="" />
                        <div className="text">
                            <p>
                                <i></i>
                            </p>
                        </div>
                    </div>
                    {/* Sağ Taraf */}
                    <div className="col-md-6 right">
                        <form method="post" action="#" id="macter-login">
                            <div className="input-box">
                                <header>@Macter Web Design Login.</header>
                                <div className="input-field">
                                    <input
                                        type="text"
                                        className="input"
                                        name="username"
                                        required
                                        autoComplete="off"
                                    />
                                    <label htmlFor="username">Username</label>
                                </div>
                                <div className="input-field">
                                    <input
                                        type="text"
                                        className="input"
                                        name="email"
                                        required
                                        autoComplete="off"
                                    />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-field">
                                    <input
                                        type="password"
                                        className="input"
                                        name="pass"
                                        required
                                        autoComplete="off"
                                    />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="input-field">
                                    <input
                                        type="submit"
                                        className="submit"
                                        id="submit"
                                        name="submit"
                                        value="Sign up"
                                    />
                                </div>
                                <div className="signin">
                                    <span>
                                        Lorem ipsum dolor sit amet. <a href="#">Login here</a>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login