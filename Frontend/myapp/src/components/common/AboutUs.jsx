import react from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../assets/Image/home/home_about/about_us_img.png";
import img from "../../assets/Image/home/home_about/about_info.jpg";
import signature from "../../assets/Image/home/home_about/signature.png";
import { BiSolidQuoteRight } from "react-icons/bi";

const AboutUs = () => {
  return (
    <div className="about_section lg:p-16">
      <Container>
        <Row>
          <Col md={6}>
            <div className="img_div">
              <img src={image} style={{ width: "90%" }} />
            </div>
          </Col>

          <Col md={6}>
            <div className="about text-left pt-24">
              <h1>ABOUT US</h1>
              <p className="P1">
                Turpis cursus in hac habitasse platea dictumst iaculis urna id
                volutpat lacus.
              </p>

              <div className="text-4xl w-[20%] quote_icon mb-3">
                <BiSolidQuoteRight />
              </div>

              <p className="italic P2">
                “Sit amet risus nullam eget felis eget nunc. Et ligula ullamcor
                malesuada proin libero nunc consequat interdum. Tortor aliquam
                nulla facilisi cras fermentum diam sollicitudin tempor. Feugiat
                in fermentum posuer urna nec tincidunt praesent semper. Molestie
                nunc non blandit massa enim nec dui. Lectus arcu bibendum at
                varius vel pharetra vel turpis nunc. Commodo sed egestas egestas
                fringilla phasellus.
              </p>

              <div className="information flex justify-between items-center lg:pt-4">
                <div className="flex items-center gap-2">
                  <div className="info_img">
                    <img src={img} alt="" />
                  </div>

                  <div className="div_2">
                    <h5>Jeremy Murphy</h5>
                    <p>CEO & Founder ChariHope</p>
                  </div>
                </div>
                <div className=" w-[29vw]  lg:w-[8vw] ">
                  <img
                    src={signature}
                    className="h-full w-full object-cover sign"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
