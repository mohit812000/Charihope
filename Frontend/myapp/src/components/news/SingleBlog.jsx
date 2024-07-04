import React, { useEffect, useState } from "react";
import BreadcrumbComp from "../common/BreadcrumbComp";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import blogImg1 from "../../assets/Image/singleblog/blog_detail_1.jpg";
import blogImg2 from "../../assets/Image/singleblog/blog_detail_2.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import MiniCard from "../common/MiniCard";
import { LuPencilLine } from "react-icons/lu";
import { CiFolderOn } from "react-icons/ci";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import img1 from "../../assets/Image/home/footer/blog_2.jpg";
import img2 from "../../assets/Image/home/footer/blog_1.jpg";
import img3 from "../../assets/Image/home/footer/blog_6.jpg";

const single_minicard = [
  {
    id: 1,
    title: "Eget nunc lobortis matt aliquam faucibus purus.",
    date: "May 3, 2019",
    img: `${img1}`,
  },

  {
    id: 2,
    title: "Fames ac turpis eges maecenas pharetr morbi.",
    date: "May 3, 2019",
    img: `${img2}`,
  },

  {
    id: 3,
    title: "Eget fringilla phas faucibus scelerisque eleif don…",
    date: "May 3, 2019",
    img: `${img3}`,
  },
];

const SingleBlog = () => {
  const [single_blog, setSingle_blog] = useState({});
  const [categories, setCategories] = useState([]);
  const { blog_id } = useParams();
  // console.log("params", blog_id);

  useEffect(() => {
    axios
      .get(`http://localhost:8008/get-news/${blog_id}`)
      .then((res) => {
        console.log("singledata", res.data.data);
        setSingle_blog(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [blog_id]);

  useEffect(() => {
    axios
      .get("http://localhost:8008/get-categories")
      .then((res) => {
        console.log("category", res.data.data);
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(()=>{
    window.scrollTo(0,0)
  })

  return (
    <div>
      <div>
        <BreadcrumbComp
          title="EGET NUNC LOBORTIS MATT ALIQUAM FAUCIBUS PURUS."
          crumb="Eget nunc lobortis matt aliquam faucibus purus."
        />
      </div>

      <div>
        <Container>
          <Row>
            <Col md={8}>
              <div className="text-left singlePage_div mt-20 lg:h-[225vh]">
                <img
                  src={`http://localhost:8008/uploads/news/${single_blog.image}`}
                  alt=""
                />
                <h1 className="text-4xl font-bold mt-5">{single_blog.title}</h1>

                <div className="flex mt-3">
                  <p className="flex items-center text-sm">
                    <span>
                      <LuPencilLine />
                    </span>
                    by:admin
                  </p>

                  {single_blog.category && (
                    <p className="flex items-center mx-4 text-sm">
                      <span>
                        <CiFolderOn />
                      </span>
                      {single_blog.category.name}
                    </p>
                  )}

                  <p className="flex items-center text-sm">
                    <span>
                      <BiSolidMessageRoundedDots /> 
                    </span>
                    Comment off
                  </p>
                </div>

                <p className="mt-3">
                  Augue ut lectus arcu bibendum at varius vel pharetra vel.
                  Vestibulum lorem sed risus ultricies. In curs turpis massa
                  tincidunt dui ut ornare. Nisl pretium fusce id velit ut tortor
                  pretium viverra. Gravida neque convallis a cras semper auctor.
                  Phasellus egestas tellus rutrum tellus pellentesque eu
                  tincidunt tortor. Cursus risus at ultrices mi tempus imperdiet
                  nulla malesuada pellentesque. Eget magna fermentum iaculis eu
                  non diam phasellus vestibulum tincidunt eget nullam non nisi
                  est sit amet.
                </p>

                <p>{single_blog.description}</p>

                <div className="flex my-10">
                  <img src={blogImg1} alt="blogImg1" className="w-[48%] mr-4" />
                  <img src={blogImg2} alt="blogImg2" className="w-[48%]" />
                </div>

                <p>
                  Diam sit amet nisl suscipit adipiscing. In dictum non
                  consectetur a erat nam at. Aliquet eget sit amet tellu cras
                  adipiscing enim eu. Id semper risus in hendrerit gravida.
                  Dolor sed viverra ipsum nunc aliquet. Ne malesuada fames ac
                  turpis. Hendrerit dolor magna eget est lorem ipsum dolor. Eget
                  nunc lobortis mattis aliquam faucibus. Tempor nec feugiat nisl
                  pretium fusce.
                </p>
                <hr className="mt-5" />
                <div className="flex justify-between">
                  <p className="text-sm">
                    <span className="font-bold text">Tags:</span>Charity,Donate
                  </p>

                  <div className="flex">
                    <FaFacebookF className="ICON"/>
                    <FaTwitter className="ICON"/>
                    <FaPinterestP className="ICON"/>
                    <MdMailOutline className="ICON"/>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="w-[68%] mt-20">
                <h3 className="text-left text-[21px] font-bold">Latest News</h3>
                <hr />
                {single_minicard &&
                  single_minicard.map((single_card) => {
                    return <MiniCard miniData={single_card} />;
                  })}
              </div>

              <div className="text-left mt-20">
                <h3 className="text-[24px] font-bold">Categories</h3>

                {categories &&
                  categories.map((category, ind) => {
                    return (
                      <>
                        <hr className="w-64" />
                        <li key={ind} className="list-none mt-3">
                          <a href="" className="anchor">{category.name}</a>
                        </li>
                      </>
                    );
                  })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SingleBlog;
