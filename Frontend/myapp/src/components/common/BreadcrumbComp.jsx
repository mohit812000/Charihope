import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const BreadcrumbComp = ({ title, crumb }) => {
  return (
    <div className="breadcrumb_img">
      <div>
        <h1 className="text-white font-bold">{title}</h1>
        <Breadcrumb className="mt-3">
          <div className="flex items-center mx-auto">
            <Breadcrumb.Item href="#">
              <Link to="/" className="text-white text-[17px]" style={{ textDecoration: 'none' }}>
                Home
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="text-white text-[17px]">
              {crumb}
            </Breadcrumb.Item>
          </div>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default BreadcrumbComp;
