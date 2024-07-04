import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { SlCalender } from "react-icons/sl";
import { FaBookmark } from "react-icons/fa";

import img1 from "../../assets/Image/home/footer/blog_2.jpg";
import img2 from "../../assets/Image/home/footer/blog_1.jpg";
import img3 from "../../assets/Image/home/footer/blog_6.jpg";
import MiniCard from "../common/MiniCard";
import { useNavigate } from "react-router-dom";

const blog_minicard = [
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

const BlogComp = () => {
  const [blog, setBlog] = useState([]);
  const [path, setPath] = useState("");
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8008/get-newses")
      .then((res) => {
        console.log(res.data.data);
        setBlog(res.data.data);
        setPath(res.data.filepath);
      })
      .catch((err) => {
        console.log(err);
      });

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

  const onClickHandeler = (id) => {
    console.log("single", id);
    navigate(`/single-blog/${id}`);
  };

  const filterByCategory = (categoryName) => {
    console.log("categoryname", categoryName);
   
    navigate(`/latest-single/${categoryName}`);
  };
  
  return (
    <div className="blog_div1">
      <Container>
        <Row className="mt-5">
          <Col md={8}>
            {blog &&
              blog.map((elem, ind) => {
                return (
                  <div
                    className="text-left my-5"
                    key={ind}
                    onClick={() => onClickHandeler(elem._id)}
                  >
                    <div>
                      <img src={path + "/" + elem.image} alt={elem.image} />
                    </div>
                    <div className="flex mt-3">
                      <p className="flex mr-4 text-xs items-center">
                        <span>
                          <SlCalender />
                        </span>
                        May 3, 2019
                      </p>
                      <p className="flex text-xs items-center">
                        <span>
                          <FaBookmark />
                        </span>
                        {elem.category.name}
                      </p>
                    </div>
                    <h1 className="text-4xl font-semibold">{elem.title}</h1>
                    <p className="text-sm mt-4">{elem.description}</p>
                    <Button className="mt-3">Read More</Button>
                  </div>
                );
              })}
          </Col>
          <Col md={4}>
            <div className="mt-5 w-[78%]">
              <h3 className="text-left text-[21px] font-bold">Latest News</h3>
              <hr />
              {blog_minicard &&
                blog_minicard.map((blog_card) => {
                  return <MiniCard miniData={blog_card} />;
                })}
            </div>
            <div className="text-left mt-10">
              <h3 className="text-[21px] font-bold">Categories</h3>
              <>
                {categories &&
                  categories.map((category, ind) => {
                    return (
                      <>
                        <hr className="w-64" />
                        <li
                          key={ind}
                          className="list-none mt-3"
                          onClick={() => filterByCategory(category.name)}
                        >
                          <a href="#">{category.name}</a>
                        </li>
                      </>
                    );
                  })}
              </>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogComp;
