import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../util/api";
import { RiAddCircleLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Categories = () => {
  const [category, setCategory] = useState();
  const [delete1, setDelete1] = useState();
  const navigate = useNavigate();

  const onclickHandler = () => {
    navigate("/add-category");
  };

  const token = localStorage.getItem("token")


  useEffect(() => {
    axios
      .get(`${baseUrl}/get-categories`)
      .then((res) => {
        console.log("categ........", res.data.data);
        setCategory(res.data.data);

      })
      .catch((err) => {
        console.log(err);
      });
  }, [delete1]);

  const editHandelar = (id) => {
    console.log("/////////", id);
    navigate(`/edit-category/${id}`);
  };


  const deleteHandeler = (id) => {
    setDelete1(id)
    console.log("delete", id);
    axios
      .delete(`${baseUrl}/delete-category/${id}`)
      .then((res) => {
        console.log(res);
        alert("Deleted!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="category_div">
      <div className="flex justify-end">
        <button className="mb-4 flex items-center bg-blue-600 rounded px-3 py-2 text-white " onClick={onclickHandler}>Add Category <span className="ms-2 text-xl font-bold"><RiAddCircleLine className="" /></span></button>

      </div>
      <Table bordered>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Category Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {category &&
            category.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{++i}</td>
                  <td>{e.name}</td>
                  <td>{e.short_description}</td>
                  <td>
                    <div className="flex justify-center items-center">
                      <FaEdit className="text-3xl" onClick={() => editHandelar(e._id)} />
                      <RiDeleteBin5Fill className="text-3xl ms-3" onClick={() => deleteHandeler(e._id)} />

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

export default Categories;
