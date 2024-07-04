import React from "react";
import AboutUs from "../components/common/AboutUs";
import HomeSection2 from "../components/common/HomeSection2";
import Volunteers from "../components/home/Volunteers";
import NumberCounter from "../components/common/NumberCounters";
// import { Breadcrumb } from 'react-bootstrap'
import BreadcrumbComp from "../components/common/BreadcrumbComp";
const About = () => {
  return (
    <div>
      <BreadcrumbComp title="About Us" crumb="About Us"/>
      <AboutUs/>
      <HomeSection2/>
      <Volunteers/>
      <NumberCounter/>
    </div>
  );
};

export default About;
