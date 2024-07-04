import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { baseUrl } from "../../util.js/api";
import MiniCard from "../common/MiniCard";
import img1 from "../../assets/Image/home/footer/blog_2.jpg";
import img2 from "../../assets/Image/home/footer/blog_1.jpg";
import img3 from "../../assets/Image/home/footer/blog_6.jpg";
import img4 from "../../assets/Image/home/footer/gallery_4.jpg";
import img5 from "../../assets/Image/home/home_campaign/blog_4.jpg";
import CampaignCard from "../common/CampaignCard";

const minicard_data = [
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

  {
    id: 4,
    title: "Turpis egestas pretiu pharetra magna ac placerat.",
    date: "May 3, 2019",
    img: `${img4}`,
  },

  {
    id: 5,
    title: "Sodales ut eu sem integer vitae. Porttitor leo a d…",
    date: "May 3, 2019",
    img: `${img5}`,
  },
];

const CampaignSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/get-latestcampaigns`)
      .then((res) => {
        console.log("campaign", res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="my-20">
      <Container>
        <Row>
          <Col md={8}>
            <Row>
              {data &&
                data.map((elem, ind) => {
                  return (
                    <Col md={6} key={ind}>
                      <CampaignCard campaign={elem} />
                    </Col>
                  );
                })}
            </Row>
          </Col>

          <Col md={4}>
            <div className="campaign_minidiv w-[78%]">
              <h3 className="text-left text-[21px] font-bold">Recent Posts</h3>

              <hr />
              {minicard_data &&
                minicard_data.map((mini) => {
                  return <MiniCard miniData={mini} />;
                })}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CampaignSection;
