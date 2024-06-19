import React from 'react'
import { Card,Row,Col} from "antd";
const About = () => {
    const gridStyle = {
        width: "80%",
        margin:"50px auto",
        placeItem: "center",
        gridTemplatesColumn:"auto"
    };
  return (
      <div className="container">
          <Card className="Card" bordered={false}>
              <Row gutter={[12, 12]} justify="center" wrap={true}>
                  <Col xxl={12} md={12} sm={24} xs={24}>
                      <Card.Grid
                          style={gridStyle}
                          hoverable={false}
                          bordered={false}>
                          <div className="about_text">
                              <h1>
                                  Helping businesses deliver exceptional buyer
                                  experiences.
                              </h1>
                              <p>
                                  Vidyard is the leading video messaging and
                                  asynchronous communications platform for
                                  go-to-market teams. Millions of sales
                                  professionals and more than 250,000
                                  go-to-market teams use Vidyard’s AI-powered
                                  video messaging, video hosting, and digital
                              </p>

                              <button>Sign Up For Free</button>
                          </div>
                      </Card.Grid>
                  </Col>
                  <Col xxl={12} md={12} xs={24} sm={24}>
                      <Card.Grid
                          style={gridStyle}
                          hoverable={false}
                          bordered={false}>
                          {" "}
                          <div className="about_img">
                              <img src="05.webp" alt="" />
                          </div>{" "}
                      </Card.Grid>
                  </Col>
                  <Col xxl={12} md={12} sm={24} xs={24}>
                      <Card.Grid
                          style={gridStyle}
                          hoverable={false}
                          bordered={false}>
                          {" "}
                          <div className="about_img">
                              <img src="06.webp" alt="" />
                          </div>{" "}
                      </Card.Grid>
                  </Col>
                  <Col xxl={12} md={12} sm={24} xs={24}>
                      <Card.Grid
                          style={gridStyle}
                          hoverable={false}
                          bordered={false}>
                          <div className="about_text">
                              <h1>
                                  Our Mission: Helping Millions of Organizations
                                  Grow Better
                              </h1>
                              <p>
                                  We believe not just in growing bigger, but in
                                  growing better. And growing better means
                                  aligning the success of your own business with
                                  the success of your customers. Win-win!
                              </p>
                              <button>
                                  Sign Up For Free
                              </button>
                          </div>
                      </Card.Grid>
                  </Col>
              </Row>
          </Card>
      </div>
  );
}

export default About
