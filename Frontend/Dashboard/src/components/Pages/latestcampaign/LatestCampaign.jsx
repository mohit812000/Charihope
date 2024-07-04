import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl, truncate } from "../../util/api";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RiAddCircleLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const LatestCampaign = () => {
  const [campaign, setCampaign] = useState([]);
  const [delete1, setDelete1] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${baseUrl}/get-latestcampaigns`)
      .then((res) => {
        console.log("latestCCCC", res.data.data);
        setCampaign(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [delete1]);

  const onclickHandler = () => {
    navigate("/add-campaign");
  };

  const oneditHandler = (id) => {
    navigate(`/edit-campaign/${id}`);
  };

  const ondeleteHandler = (id) => {
    axios
      .delete(`${baseUrl}/delete-campaign/${id}`)
      .then((res) => {
        console.log(res);
        setDelete1(id);
      })
      .catch((err) => {
        console.log(err);
        alert("Error!");
      });
  };

  return (
    <div>
      <div className="flex justify-end">
        <button className="mb-4 flex items-center bg-blue-600 rounded px-3 py-2 text-white " onClick={onclickHandler}>Add Campaign <span className="ms-2 text-xl font-bold"><RiAddCircleLine className="" /></span></button>

      </div>
      <Table bordered>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Days</th>
            <th>Donor</th>
            <th>Raised</th>
            <th>Goal</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {campaign &&
            campaign.map((camp, ind) => {
              return (
                <tr>
                  <td>{++ind}</td>
                  <td>
                    <img
                      src={`${baseUrl}/uploads/latestcampaign/${camp.image}`}
                      alt=""
                      style={{ height: "50px" }}
                    />
                  </td>
                  <td>{camp.title ? truncate(camp.title, 20) : ""}</td>
                  <td>
                    {camp.description ? truncate(camp.description, 40) : ""}
                  </td>

                  <td>{camp.days}</td>
                  <td>{camp.donor}</td>
                  <td>{camp.raised}</td>
                  <td>{camp.goal}</td>
                  <td>
                    <div className="flex items-center justify-center">
                      <FaEdit className="text-3xl" onClick={() => oneditHandler(camp._id)} />
                      <RiDeleteBin5Fill className="text-3xl ms-2" onClick={() => ondeleteHandler(camp._id)} />
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default LatestCampaign;
