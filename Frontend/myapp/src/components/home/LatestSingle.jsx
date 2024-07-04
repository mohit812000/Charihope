import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { FaBookmark } from "react-icons/fa";
import {baseUrl} from "../../util.js/api"
import BreadcrumbComp from "../common/BreadcrumbComp"
import MiniCard from "../common/MiniCard";
import img1 from "../../assets/Image/home/footer/blog_2.jpg";
import img2 from "../../assets/Image/home/footer/blog_1.jpg";
import img3 from "../../assets/Image/home/footer/blog_6.jpg";


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

const LatestSingle = () => {
  const [single_news, setSingle_news] = useState([]);
  const [categories, setCategories] = useState([]);

  const { category_name } = useParams();
  console.log("cat", category_name);

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${baseUrl}/get-newses`)
      .then((res) => {
        console.log("single-news", res.data.data);
        setSingle_news(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(()=>{
    axios
      .get("http://localhost:8008/get-categories")
      .then((res) => {
        console.log("category", res.data.data);
        setCategories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  })

  

  const onClickHandeler = (id) => {
    console.log("single", id);
    navigate(`/single-blog/${id}`);
  };

  const filterByCategory = (categoryName) => {
    console.log("categoryname", categoryName);
   
    navigate(`/latest-single/${categoryName}`);
  };

   
return (
    <div>
      <BreadcrumbComp title={category_name} crumb={category_name}/>
      <Container>
        <Row>
          <Col md={8}>
            {single_news &&
              single_news
                .filter((single) => single.category.name === category_name)
                .map((elem, ind) => {
                  console.log("console",elem)
                  return (
                    <div
                      className="text-left my-5 latest_single"
                      key={ind}
                      onClick={() => onClickHandeler(elem._id)}
                    >
                      <div>
                        <img src={`${baseUrl}/uploads/news/${elem.image}`} alt={elem.image} />
                      </div>
                      <div className="flex mt-3">
                        <p className="flex text-xs mr-4 items-center">
                          <span>
                            <SlCalender/>
                          </span>
                          May 3, 2019
                        </p>
                        <p className="flex text-xs items-center">
                          <span>
                            <FaBookmark/>
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
                          <a href="#" className="anchor">{category.name}</a>
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

export default LatestSingle;
