import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../util.js/api";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LatestNews = () => {
  const [news, setNews] = useState([]);
  const [filterdata, setFilterdata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${baseUrl}/get-newses`)
      .then((res) => {
        console.log("latest", res.data.data);
        setNews(res.data.data);
        setFilterdata(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onClickHandler = (categoryName) => {
    console.log("category", categoryName);
    const filtered = news.filter((data) => data.category.name === categoryName);
    setFilterdata(filtered);
    navigate(`/latest-single/${categoryName}`);
  };

  return (
    <div className="lg:min-h-[740px] pt-5">
      <h1 className="text-4xl font-bold">LATEST NEWS</h1>
      <p className="text-lg text-gray-500 lg:w-[600px] mx-auto">
        Condimentum id venenatis a condimentum vitae. Sit amet venenatis urna cursus eget nunc.
      </p>

      <div>
        <Container>
          <Row>
            {filterdata &&
              filterdata.map((latest, ind) => {
                return (
                  <Col md={4} key={ind} className="">
                    <div className="latestnews_div1 my-[11px]">
                      <img className="h-[100px]"
                        src={`${baseUrl}/uploads/news/${latest.image}`}
                        alt={latest.image}
                      />
                      <div className="latestnews_div2">
                        <div>
                          <h3 className="text-xl w-3/4 mx-auto font-bold">{latest.title}</h3>
                          <button
                            className="rounded-full px-6 py-1"
                            onClick={() => onClickHandler(latest.category.name)}
                          >
                            {latest.category.name}
                          </button>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LatestNews;
