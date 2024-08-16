import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateNew() {
  const navigate = useNavigate();
  const [Data, setData] = useState({
    Work: "",
    Time: "",
    Status: false,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData({
      ...Data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const respone = await fetch("http://localhost:5000/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...Data, Status: Data.Status || false }),
    });

    console.log(respone);

    navigate("/all");
  };

  return (
    <>
      <form
        className="container d-flex justify-content-around border border-light-subtle rounded"
        style={{ margin: "20px auto", padding: "10px" }}
        onSubmit={handleSubmit}
      >
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            id="workInput"
            name="Work"
            value={Data.Work}
            onChange={handleChange}
            placeholder="Enter work"
          />
        </div>
        <div className="col-md-3">
          <input
            type="text"
            className="form-control"
            id="timeInput"
            name="Time"
            value={Data.Time}
            onChange={handleChange}
            placeholder="Enter time"
          />
        </div>
        <div className=" d-flex align-items-end">
          <button
            type="submit"
            disabled={Data.Work == "" || Data.Time == "" ? true : false}
            className="btn btn-primary w-100"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default CreateNew;
