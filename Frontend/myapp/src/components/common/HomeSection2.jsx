import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaHeartbeat } from "react-icons/fa";
import { BiSolidDonateBlood } from "react-icons/bi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiBleedingHeart } from "react-icons/gi";

const data = [
  {
    id: 1,
    title: "Our Mission",
    desc: "Purus in mollis nunc sed. Lacus suspendisse faucibus.",
    icon: <FaHeartbeat />,
  },

  {
    id: 2,
    title: "Our Program",
    desc: "Nunc pulvinar sapien et ligula. Natoq penatibus.",
    icon: <BiSolidDonateBlood />,
  },

  {
    id: 3,
    title: "Support 24/7",
    desc: "Tempus iaculis urna id volutpat la facilisi morbi iaculis.",
    icon: <MdOutlineSupportAgent />,
  },

  {
    id: 4,
    title: "Become Volunteer",
    desc: "Ultricies integer quis auctor elit sed. Magna eget est lorem.",
    icon: <GiBleedingHeart />,
  },
];

function HomeSection2() {
  return (
    <div className="section2">
      <Container>
        <Row>
          {data &&
            data.map((elem, ind) => {
              return (
                <Col lg={3} md={5} sm={12} key={ind}>
                  <Card
                    className="card"
                    style={{
                      backgroundColor: "rgb(243,242,243)",
                      border: "none",
                    }}
                  >
                    <div className="icon_div">
                      <div className="icon">{elem.icon}</div>
                    </div>
                    <Card.Body>
                      <Card.Title className="title">{elem.title}</Card.Title>
                      <Card.Text className="text">{elem.desc}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}

export default HomeSection2;
