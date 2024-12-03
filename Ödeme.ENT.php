<?php

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@Macter Web Payment</title>
    <link rel="shortcut icon"
        href="data:image/png;base64,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"
        type="image/x-icon">
</head>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    * {
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-style: normal;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        text-decoration: none;
        text-transform: uppercase;
    }

    .container {
        min-height: 100vh;
        background: #eee;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
        padding-bottom: 60px;
    }

    .container form {
        background: #eee;
        border-radius: 5px;
        box-shadow: 0 10px 15px rgba(0, 0, 0.1);
        padding: 20px;
        width: 600px;
        padding-top: 160px;
    }

    .container form .inputBox {
        margin-top: 20px;
    }

    .container form .inputBox span {
        display: block;
        color: #999;
        padding-bottom: 5px;
    }

    .container form .inputBox input,
    .container form .inputBox select {
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0.3);
        color: #444;
    }

    .container form .flexbox {
        display: flex;
        gap: 15px;
    }

    .container form .flexbox .inputBox {
        flex: 1 1 150px;
    }

    .container form .submit-btn {
        width: 100%;
        background: linear-gradient(45deg, blueviolet, deeppink);
        margin-top: 20px;
        padding: 10px;
        font-size: 20px;
        color: #fff;
        border-radius: 10px;
        cursor: pointer;
        transition: .2s linear;
    }

    .container form .submit-btn:hover {
        letter-spacing: 2px;
        opacity: .8;
    }

    /* kard üs kısmı başlangıç*/
    .container .card-container {
        margin-bottom: -150px;
        position: relative;
        height: 250px;
        width: 400px;
    }

    .container .card-container .front {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background: gold;
        border-radius: 5px;
        backface-visibility: hidden;
        box-shadow: 0 15px 25px rgba(0, 0, 0.2);
        padding: 20px;
        transform: perspective(1000px) rotateY(0deg);
        transition: trasform .4s ease-out;
    }

    .container .card-container .front .image {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 10px;
    }

    .container .card-container .front .image img {
        height: 50px;
    }

    .container .card-container .front .card-number-box {
        padding: 30px 0;
        font-size: 22px;
        color: #fff;
    }

    .container .card-container .front .flexbox {
        display: flex;
    }

    .container .card-container .front .flexbox .box:nth-child(1) {
        margin-right: auto;
    }

    .container .card-container .front .flexbox .box {
        font-size: 15px;
        color: #fff;
    }

    .container .card-container .back {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: gold;
        border-radius: 5px;
        padding: 20px 0;
        text-align: right;
        backface-visibility: hidden;
        box-shadow: 0 15px 25px rgba(0, 0, 0.2);
        transform: perspective(1000px) rotateY(180deg);
        transition: transform .4s ease-out;
    }

    .container .card-container .back .stripe {
        background: #000;
        width: 100%;
        margin: 10px 0;
        height: 50px;
    }

    .container .card-container .back .box {
        padding: 0 20px;
    }

    .container .card-container .back .box span {
        color: #fff;
        font-size: 15px;
    }

    .container .card-container .back .box .cvv-box {
        height: 50px;
        padding: 10px;
        margin-top: 5px;
        color: #333;
        background: #fff;
        border-radius: 5px;
        width: 100%;
    }

    .container .card-container .back .box img {
        margin-top: 30px;
        height: 30px;
    }

    option:hover {
        color: gold;
    }
</style>

<body>
    <div class="container">
        <div class="card-container">
            <div class="front">
                <div class="image">
                    <img src="data:image/png;base64,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"
                        alt="">
                    <img src="https://img2.pngindir.com/20180802/xri/kisspng-logo-mastercard-vector-graphics-font-visa-mastercard-logo-png-photo-png-arts-5b634298cd58d5.9008352515332317688411.jpg"
                        alt="">
                </div>
                <div class="card-number-box">############</div>
                <div class="flexbox">
                    <div class="box">
                        <span>card holder</span>
                        <div class="card-holder-name">full name</div>
                    </div>
                    <div class="box">
                        <span>expiries</span>
                        <div class="expiration">
                            <span class="exp-month">mm</span>
                            <span class="exp-year">yy</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="back">
                <div class="stripe"></div>
                <div class="box">
                    <span>cvv</span>
                    <div class="cvv-box"></div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png"
                        alt="">
                </div>
            </div>
        </div>
        <form action="">
            <div class="inputBox">
                <span>card number</span>
                <input type="text" maxlength="16" class="card-number-input">
            </div>
            <div class="inputBox">
                <span>card holder</span>
                <input type="text" class="card-holder-input">
            </div>
            <div class="flexbox">
                <div class="inputBox">
                    <span>expiration mm</span>
                    <select name="" id="" class="month-input">
                        <option value="month" selected disabled>month</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                    </select>
                </div>
                <div class="inputBox">
                    <span>expiration yy</span>
                    <select name="" id="" class="year-input">
                        <option value="year" selected disabled>year</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                    </select>
                </div>
                <div class="inputBox">
                    <span>cvv</span>
                    <input type="text" maxlength="4" class="cvv-input">
                </div>
            </div>
            <input type="submit" value="submit" class="submit-btn" onclick="submit()">
        </form>
    </div>
    <script>
        document.querySelector('.card-number-input').oninput = () => {
            document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
        }

        document.querySelector('.card-holder-input').oninput = () => {
            document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
        }

        document.querySelector('.month-input').oninput = () => {
            document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
        }

        document.querySelector('.month-input').oninput = () => {
            document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
        }

        document.querySelector('.year-input').oninput = () => {
            document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
        }

        document.querySelector('.cvv-input').onmouseenter = () => {
            document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
            document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
        }

        document.querySelector('.cvv-input').onmouseleave = () => {
            document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
            document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
        }
        document.querySelector('.cvv-input').oninput = () => {
            document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
        }
    </script>
</body>

</html>