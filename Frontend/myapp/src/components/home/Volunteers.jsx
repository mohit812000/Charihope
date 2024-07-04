import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { IoIosAddCircleOutline } from "react-icons/io";
import vImg1 from "../../assets/Image/home/home_volunteer/volunteer-img1.jpg";
import vImg2 from "../../assets/Image/home/home_volunteer/volunteer-img2.jpg";
import vImg3 from "../../assets/Image/home/home_volunteer/volunteer-img3.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";


const volunteerData = [
  {
    id: 1,
    name: "Gabriel Watkins",
    desg: "Volunteers",
    img: `${vImg1}`,
  },

  {
    id: 2,
    name: "Veronica Cooper",
    desg: "Volunteers",
    img: `${vImg2}`,
  },

  {
    id: 3,
    name: "Jessica Anderson",
    desg: "Volunteers",
    img: `${vImg3}`,
  },
];

const Volunteers = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);

  const handleShowModal = (volunteer) => {
    setSelectedVolunteer(volunteer);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="lg:min-h-[120vh] pt-14 volunteer_div">
      <h1 className="font-extrabold mb-6 text-4xl">MEET OUR VOLUNTEERS</h1>
      <p className="lg:w-2/5 m-auto text-lg">
        Tellus integer feugiat scelerisque varius morbi enim nunc. Tempus
        egestas sed sed risus pretium.
      </p>

      <Container>
        <Row>
          {volunteerData &&
            volunteerData.map((volunteer, ind) => {
              return (
                <Col md={4} key={ind}>
                  <div className="mt-10 volunteer_imgdiv">
                    <div className="lg:w-full volunteer_img">
                      <img src={volunteer.img} alt="" />
                      <div className="blank"></div>
                      <div className="hover_icon">
                        <IoIosAddCircleOutline
                          onClick={() => handleShowModal(volunteer)}
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold mt-4">
                        {volunteer.name}
                      </h3>
                      <p className="text-sm">{volunteer.desg}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="">
            <img src={selectedVolunteer?.img} alt="" className="w-[600px] h-[300px] object-cover"/>
            <div>
              <Modal.Title className="text-center">{selectedVolunteer?.name}</Modal.Title>

              <p className="text-center">{selectedVolunteer?.desg}</p>

              <p >Augue ut lectus arcu bibendum at varius vel pharetra vel. Vestibulum lorem sed risus ultricies. In curs turpis massa tincidunt dui ut ornare.</p>
            </div>
            <div className="flex justify-center">
            <FaFacebookF className="vol_icon"/>
            <FaTwitter className="vol_icon"/>
            <FaTumblr className="vol_icon"/>
            <FaPinterestP className="vol_icon"/>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Volunteers;
