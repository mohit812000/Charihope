import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import fImg1 from "../assets/Image/home/footer/blog_1.jpg";
import fImg2 from "../assets/Image/home/footer/blog_2.jpg";
import fImg3 from "../assets/Image/home/footer/blog_6.jpg";

import gImg1 from "../assets/Image/home/footer/gallery_1.jpg";
import gImg2 from "../assets/Image/home/footer/gallery_2.jpg";
import gImg3 from "../assets/Image/home/footer/gallery_3.jpg";
import gImg4 from "../assets/Image/home/footer/gallery_4.jpg";
import gImg5 from "../assets/Image/home/footer/gallery_5.jpg";
import gImg6 from "../assets/Image/home/footer/gallery_6.jpg";

import { IoLocationSharp } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

import { MdOutlineHorizontalRule } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-700 footer_div">
      <Container>
        <Row>
          <Col md={3}>
            <div className="text-left contact_div">
              <h3 className="text-white text-xl font-bold">CONTACT US</h3>

              <div className="mt-4">
                <p>
                  Dolor sit amet consectetur adipiscing elit ut. Iaculis nunc
                  sed augue lacus viverra.
                </p>
                <p className="info">
                  <span>
                    <IoLocationSharp />
                  </span>
                  175 5th Ave, New York, NY 10010
                </p>
                <p className="info">
                  <span>
                    <FaMobileAlt />
                  </span>
                  (+88) 12 345 6789
                </p>
                <p className="info">
                  <span>
                    <LuMail />
                  </span>
                  Info@Charihope.com
                </p>
              </div>
            </div>
          </Col>

          <Col md={3}>
            <div className="text-left p_div">
              <h3 className="text-white text-xl font-bold">USEFUL LINKS</h3>

              <div className="links_div mt-4">
                <h4>
                  <span>
                    <MdOutlineHorizontalRule />
                  </span>
                  About Us
                </h4>
                <h4>
                  <span>
                    <MdOutlineHorizontalRule />
                  </span>
                  How It Works
                </h4>
                <h4>
                  <span>
                    <MdOutlineHorizontalRule />
                  </span>
                  Team
                </h4>
                <h4>
                  <span>
                    <MdOutlineHorizontalRule />
                  </span>
                  Charity Courses
                </h4>
                <h4>
                  <span>
                    <MdOutlineHorizontalRule />
                  </span>
                  Security
                </h4>
              </div>
            </div>
          </Col>

          <Col md={3}>
            <div className="text-left p_div">
              <h3 className="text-white text-xl font-bold">RECENT NEWS</h3>

              <div className="mt-4">
                <div className="flex flex1">
                  <img src={fImg1} alt="" />
                  <div>
                    <h4>Eget nunc lobortis matt aliquam</h4>
                    <p>May 3, 2019</p>
                  </div>
                </div>

                <div className="flex flex1">
                  <img src={fImg2} alt="" />
                  <div>
                    <h4>Fames ac turpis eges maecenas</h4>
                    <p>May 3, 2019</p>
                  </div>
                </div>

                <div className="flex flex1">
                  <img src={fImg3} alt="" />
                  <div>
                    <h4>Eget fringilla phas faucibus scelerisque</h4>
                    <p>May 3, 2019</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col md={3}>
            <h3 className="text-white text-xl font-bold p_div text-left">GALLERY</h3>

            <Row>
              <Col md={4} sm={4}>
                <div className="fimg_div">
                  <img src={gImg1} alt="" />
                  <img src={gImg2} alt="" />
                </div>
              </Col>

              <Col md={4} sm={4}>
                <div className="fimg_div">
                  <img src={gImg3} alt="" />
                  <img src={gImg4} alt="" />
                </div>
              </Col>

              <Col md={4} sm={4}>
                <div className="fimg_div">
                  <img src={gImg5} alt="" />
                  <img src={gImg6} alt="" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

      </Container>
      <div className="bg-slate-600" style={{height:'1px',width:'100%'}}></div>
      <p className="f_para">Copyright @ 2019 <span>ChariHope.</span> Get The Theme.</p>



    </div>
  );
};

export default Footer;
