import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import CampaignCard from "../common/CampaignCard";

const Campaign = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8008/get-latestcampaigns")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="campaign_div">
      <div className="campaign_img">
        <div className="lg:w-5/12 m-auto pt-20 campaign_data">
          <h1 className="text-white text-40px font-bold">LASTEST CAMPAIGN</h1>
          <p className="text-white text-lg pt-3">
            Quis vel eros donec ac odio tempor orci. Urna condimentum mattis
            pellentesque id nibh tortor id aliquet.
          </p>
        </div>

        <Container>
          <Row className="pt-4">
            {data &&
              data.slice(0, 3).map((elem, ind) => {
                return (
                  <Col md={4} key={ind}>
                    <CampaignCard campaign={elem} />
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Campaign;
