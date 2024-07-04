import React, { useEffect, useState } from "react";
import BreadcrumbComp from "../common/BreadcrumbComp";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../util.js/api";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../assets/Image/home/footer/blog_2.jpg";
import img2 from "../../assets/Image/home/footer/blog_1.jpg";
import img3 from "../../assets/Image/home/footer/blog_6.jpg";
import img4 from "../../assets/Image/home/footer/gallery_4.jpg";
import img5 from "../../assets/Image/home/home_campaign/blog_4.jpg";
import MiniCard from "../common/MiniCard";
import { Formik } from "formik";
import { FaDollarSign } from "react-icons/fa6";


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

const amtData = [
  {
    id: 1,
    price: 1.00,
  },

  {
    id: 2,
    price: 10.00,
  },

  {
    id: 3,
    price: 50.00,
  },

  {
    id: 4,
    price: 100.00,
  }
]

const DonationPage = () => {
  const [donate, setDonate] = useState({});

  const { donation_id } = useParams();
  const [amt, setAmt] = useState();

  const customButton = () => {
    setAmt("")

  }

  useEffect(() => {
    axios
      .get(`${baseUrl}/get-campaign/${donation_id}`)
      .then((res) => {
        // console.log("single donation", res.data.data);
        setDonate(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [donation_id]);

  const onclickHandler = (amount) => {
    console.log("amount", amount)
    setAmt(amount)

  }
  return (
    <div>
      <BreadcrumbComp
        title="ORGANIZE A CAR WASH AND DONATE THE PROFITS TO CHARITY"
        crumb="Organize a car wash and donate the profits to charity"
      />

      <Container>
        <div className="my-20">
          <Row>
            <Col md={8}>
              <div>
                <img
                  src={`${baseUrl}/uploads/latestcampaign/${donate.image}`}
                  alt=""
                />

                <div className="donation_div shadow-xl mt-10 p-4">
                  <div className="border rounded w-[200px] flex items-center">
                    <span className="text-white bg-[#fa7f4b] p-[10px] h-14 rounded-s-md text-xl flex items-center"><FaDollarSign />
                    </span>

                    <input type="number" value={amt} className="focus-visible:outline-none w-[159px]" onChange={(e) => setAmt(e.target.value)} placeholder="0" />
                  </div>
                  <div className="text-left my-3">
                    {
                      amtData &&
                      amtData.map((e, i) => {
                        return (
                          <button className="border bg-slate-300 hover:bg-[#fa7f4b] hover:text-white rounded px-5 py-2 me-2" key={i} onClick={() => onclickHandler(e.price)}>{e.price}</button>
                        )
                      })
                    }

                    <button onClick={customButton} className=" bg-slate-300 hover:bg-[#fa7f4b] hover:text-white py-2 rounded px-2">Custom Amount</button>
                  </div>

                  <h5 className="text-left font-bold">Pesonal Info</h5>
                  <hr />
                  <Formik
                    initialValues={{ firstName: "", lastName: "", email: "" }}
                    validate={(values) => {
                      const errors = {};

                      if (!values.firstName) {
                        errors.firstName = "First Name is required";
                      }

                      if (!values.lastName) {
                        errors.lastName = "Last Name is required";
                      }

                      if (!values.email) {
                        errors.email = "Email is required";
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                          values.email
                        )
                      ) {
                        errors.email = "Invalid email address";
                      }
                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 400);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="flex gap-3">
                          <div className="block grow w-[50%]">
                            <input
                              type="text"
                              name="firstName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="First Name"
                              value={values.firstName}
                              className="border w-[100%]"
                            />
                            <p className="text-left text-red-400 text-sm mt-2">
                              {errors.firstName &&
                                touched.firstName &&
                                errors.firstName}
                            </p>
                          </div>

                          <div className="block grow w-[50%]">
                            <input
                              type="text"
                              name="lastName"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              placeholder="Last Name"
                              value={values.lastName}
                              className="border w-[100%]"
                            />
                            <p className="text-left text-red-400 text-sm mt-2">
                              {errors.lastName &&
                                touched.lastName &&
                                errors.lastName}
                            </p>
                          </div>
                        </div>

                        <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Email"
                          value={values.email}
                          className="border w-full mt-3"
                        />
                        <p className="text-left text-red-400 text-sm mt-2">{errors.email && touched.email && errors.email}</p>

                        <button type="submit" className="bg-[#fa7f4b] text-white rounded px-3 py-2 font-semibold" disabled={isSubmitting}>
                          DONATE NOW
                        </button>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="campaign_minidiv w-[78%]">
                <h3 className="text-left text-[21px] font-bold">
                  Recent Posts
                </h3>

                <hr />
                {minicard_data &&
                  minicard_data.map((mini) => {
                    return <MiniCard miniData={mini} />;
                  })}
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default DonationPage;
