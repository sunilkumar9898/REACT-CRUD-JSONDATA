import React from "react";
import { Row, Col } from "antd";

const Contact = () => {
    return (
        <div className="container">
            <section className="contact">
                <div className="contact_heading">
                    <h1>Get in touch with our creator-friendly support team</h1>
                    <p>We’re here 7 days a week.</p>
                </div>
                <div>
                    <Row className="contact_row" justify="center" wrap={true}>
                        <Col
                            className="col"
                            xxl={7}
                            xl={7}
                            md={7}
                            sm={22}
                            xs={20}>
                            <h1>Chat support</h1>
                            <p>
                                We support chat on our paid plans. Chat support
                                is available Monday - Friday 9AM-6PM ET. Please
                                log in to chat.
                            </p>
                            <a href="">Log In</a>
                        </Col>
                        <Col className="col" md={7} sm={22} xs={20} xxl={7}>
                            <h1>Email support</h1>
                            <p>
                                Prefer to email? Send us an email and we’ll get
                                back to you soon. Lorem ipsum dolor sit amet.
                            </p>
                            <a href="">Send Email</a>
                        </Col>
                        <Col className="col" md={7} sm={22} xs={20} xxl={7}>
                            <h1>Help center</h1>
                            <p>
                                Our self-serve help center is open 24/7 with
                                400+ articles to help Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit.
                            </p>
                            <a href="">Visit Help center</a>
                        </Col>
                    </Row>
                </div>

                <div className="contact_heading1">
                    <p>OUR SUPPORT TEAM</p>
                    <h1>Talk to real people</h1>
                    <p>
                        Amazing customer support is the #1 reason our creators
                        cite for choosing Podia. Our support team knows that the
                        entrepreneurial journey comes with challenges, and we’re
                        here to help you every step of the way.
                    </p>
                </div>
                <div>
                    <Row className="contact_row1" justify="center" wrap={true}>
                        <Col
                            className="col1"
                            xxl={6}
                            xl={7}
                            md={7}
                            sm={10}
                            xs={20}>
                            <img src="07.jpg" alt="" />
                            <h1>MINNESOTA, US</h1>
                            <p>Lilian</p>
                            <p>Beach lover 🌴, keeping life simple!</p>
                        </Col>
                        <Col className="col1" md={7} sm={10} xs={20} xxl={6}>
                            <img src="08.jpg" alt="" />
                            <h1>PENNSYLVANIA, US</h1>
                            <p>Katherine</p>
                            <p>Loves soup.</p>
                        </Col>
                        <Col className="col1" md={7} sm={10} xs={20} xxl={6}>
                            <img src="09.jpg" alt="" />
                            <h1>NEW YORK, US</h1>
                            <p>Katee</p>
                            <p>
                                Will always talk to you about her tomato plants,
                            </p>
                        </Col>
                        <Col className="col1" md={7} sm={10} xs={20} xxl={6}>
                            <img src="10.jpeg" alt="" />
                            <h1>SAN PEDRO SULA, HONDURAS</h1>
                            <p>Lilian</p>
                            <p>Beach lover 🌴, keeping life simple!</p>
                        </Col>

                        <Col
                            className="col1"
                            xxl={6}
                            xl={7}
                            md={7}
                            sm={10}
                            xs={20}>
                            <img src="11.png" alt="" />
                            <h1>MINNESOTA, US</h1>
                            <p>Robert</p>
                            <p>Beach lover 🌴, keeping life simple!</p>
                        </Col>
                        <Col className="col1" md={7} sm={10} xs={20} xxl={6}>
                            <img src="12.png" alt="" />
                            <h1>PENNSYLVANIA, US</h1>
                            <p>Rodrigo</p>
                            <p>Loves soup.</p>
                        </Col>
                        <Col className="col1" md={7} sm={10} xs={20} xxl={6}>
                            <img src="13.jpg" alt="" />
                            <h1>NEW YORK, US</h1>
                            <p>Kayla</p>
                            <p>
                                Will always talk to you about her tomato plants,
                                even when you don’t really want her to.
                            </p>
                        </Col>
                        <Col className="col1" md={7} sm={10} xs={20} xxl={6}>
                            <img src="143.png" alt="" />
                            <h1>SAN PEDRO SULA, HONDURAS</h1>
                            <p>Robert</p>
                            <p>Beach lover 🌴, keeping life simple!</p>
                        </Col>
                    </Row>
                </div>
            </section>
        </div>
    );
};

export default Contact;
