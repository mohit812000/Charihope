import React from "react";

const Map = () => {
  return (
    <div className="lg:h-[100%] bg-gray-200 map_div">
      <h1 className="pt-20 lg:text-4xl font-bold mb-4">OUR CAMPAIGN MAP</h1>
      <p className="lg:w-2/5 m-auto text-lg" >
        Tellus integer feugiat scelerisque varius morbi enim nunc. Tempus
        egestas sed sed risus pretium.
      </p>

      <div className="lg:w-full mt-5">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44212990.874151036!2d-16.71084966879126!3d47.440279610719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1708408648060!5m2!1sen!2sin" width="100%" height="600" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default Map;
