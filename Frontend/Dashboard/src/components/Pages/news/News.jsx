import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { baseUrl, truncate } from "../../util/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RiAddCircleLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";



const News = () => {
  const [news, setNews] = useState([]);
  const [path, setPath] = useState("");
  const [delete1, setDelete1] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`${baseUrl}/get-newses`)
      .then((res) => {
        console.log("newsssss", res.data.data);
        setNews(res.data.data);
        setPath(res.data.filepath);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [delete1]);

  const onclickHandler = () => {
    navigate("/add-news")

  }

  const ondeleteHandler = (id) => {
    axios.delete(`${baseUrl}/delete-news/${id}`)
      .then((res) => {
        console.log(res)
        setDelete1(id)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const oneditHandler = (id) => {
    navigate(`/edit-news/${id}`)

  }
  return (
    <div>
      <div className="flex justify-end">
        <button className="mb-4 flex items-center bg-blue-600 rounded px-3 py-2 text-white " onClick={onclickHandler}>Add News <span className="ms-2 text-xl font-bold"><RiAddCircleLine className="" /></span></button>

      </div>

      <Table bordered>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {news &&
            news.map((elem, ind) => {
              return (
                <tr key={ind}>
                  <td>{++ind}</td>
                  <td>
                    <img
                      src={`${path}/${elem.image}`}
                      alt=""
                      style={{ width: "80px", margin: "auto" }}

                    />
                  </td>
                  <td>{elem.title ? truncate(elem.title, 20) : ""}</td>
                  <td>
                    {elem.description ? truncate(elem.description, 40) : ""}
                  </td>
                  <td>{elem.category.name}</td>
                  <td>
                    <div className="flex justify-center items-center">
                    <FaEdit className="text-3xl" onClick={() => oneditHandler(elem._id)}/>
                    <RiDeleteBin5Fill className="text-3xl ms-2" onClick={() => ondeleteHandler(elem._id)}/>

                    </div>

                  </td>
                </tr>
              );
            })}
          <tr></tr>
        </tbody>
      </Table>
    </div>
  );
};

export default News;
