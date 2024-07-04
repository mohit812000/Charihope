import CountUp from "react-countup";
import { Container, Row, Col } from "react-bootstrap";
import { PiTShirt } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import { LiaDonateSolid } from "react-icons/lia";
import { FaRibbon } from "react-icons/fa";




const counterdata = [
  {
    id: 1,
    start: 0,
    end: 200,
    icon:<PiTShirt />, 
    para: "Volunteers",
    duration:3
  },

  {
    id: 2,
    start: 0,
    end: 5000,
    icon:<GrGroup /> , 
    para: "Donation",
    duration:2.50

  },

  {
    id: 3,
    start: 0,
    end: 80,
    para: "Compaign",
    icon:<LiaDonateSolid />,
    duration:3.75

  },

  {
    id: 4,
    start: 0,
    end: 20,
    para: "Awards",
    icon:<FaRibbon />,
    duration:4.25

  },
];
const NumberCounter = () => {
  return (
    <div className=" numberInc_img h-[50vh] text-white">
      <Container>
        <Row>
          {counterdata &&
            counterdata.map((elem, ind) => {
              return (
                <Col md={3} key={ind}>
                  <div className="counter_div">
                    <div className="counter_icon">{elem.icon}</div>
                    <h2 className="text-5xl font-bold mb-6">
                      <CountUp start={elem.start} end={elem.end} duration={elem.duration}></CountUp>+
                    </h2>
                    <p className="conter_para">{elem.para}</p>
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default NumberCounter;
