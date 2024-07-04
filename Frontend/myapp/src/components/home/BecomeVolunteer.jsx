import React from "react";
import { Button } from "react-bootstrap";

const BecomeVolunteer = () => {
  return (
    <div className="become_volunteer lg:min-h-[60vh] lg:mt-20">
      <div>
        <h1 className="text-white font-bold">BECOME A VOLUNTEER</h1>
        <p className="text-white lg:w-2/3 m-auto text-lg">
          Sodales ut eu sem integer vitae. Porttitor leo a diam sollicitudin
          tempor id eu nisl nunc. Ac felis donec et odio.
        </p>

        <Button className="join_btn rounded-pill mt-10">JOIN WITH US</Button>
      </div>
    </div>
  );
};

export default BecomeVolunteer;
