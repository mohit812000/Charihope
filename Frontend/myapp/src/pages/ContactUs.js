import React from "react";
import BreadcrumbComp from "../components/common/BreadcrumbComp";
import ContactForm from "../components/contact us/ContactForm";
import ContactMap from "../components/contact us/ContactMap";

const ContactUs = () => {
  return (
    <div>
        <BreadcrumbComp title="Contact Us" crumb="Contact" />
        <ContactForm/>
        <ContactMap/>
    </div>
  );
};

export default ContactUs;
