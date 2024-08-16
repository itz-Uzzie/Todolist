import { useEffect, useState } from "react";

function All() {
  const [Data, setData] = useState("");
  const del = async (_id) => {
    const response = await fetch(`http://localhost:5000/api/delete/${_id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setData((prevData) => prevData.filter((task) => task._id !== _id));
      console.log("Deleted:", response);
    }
  };
  const upd = async (_id) => {
    const response = await fetch(`http://localhost:5000/api/update/${_id}`, {
      method: "PATCH",
    });
    if (response.ok) {
      const result = await response.json();
      setData((prevData) =>
        prevData.map((task) => (task._id === _id ? result : task))
      );
      console.log(result);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/api/all", {
        method: "GET",
      });
      const result = await response.json();
      console.log(result);
      setData(result);
    };
    fetchData();
  }, []);
  return (
    <div className="row">
      {Data && Data.length > 0 ? (
        Data.map((currElem) => {
          const { Work, Time, Status, _id } = currElem;
          if (!_id) return null;
          return (
            <div
              className="container d-flex justify-content-around border border-light-subtle rounded"
              key={_id}
              style={{ margin: "20px auto", padding: "10px" }}
            >
              <div className="container d-flex justify-content-start align-items-center">
                <h4 className=" h5 pe-5">{Work}</h4>
                <h4 className="h6">{Time}</h4>
              </div>
              <div className="container"></div>
              <div className="container d-flex justify-content-around">
                <button
                  className="btn btn-outline-success"
                  onClick={() => upd(_id)}
                >
                  {Status == false ? "Mark as done" : "Completed"}
                </button>
                <button
                  className="btn btn-outline-primary float-end"
                  onClick={() => del(_id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p>No any data available</p>
      )}
    </div>
  );
}

export default All;
