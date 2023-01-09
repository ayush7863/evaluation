import React from "react";
import axios from "axios";

const Project = () => {
  const [item, setItem] = React.useState([]);

  const getProject = () => {
    axios
      .get(
        "https://api.github.com/search/repositories?q=user:ayush7863+fork:true&sort=updated&per_page=10&type=Repositories"
      )
      .then((el) => setItem(el.data.items));
    // console.log(res)
  };
  React.useEffect(() => {
    getProject();
  }, []);

  console.log(item);

  return (
    <>
      <div
        style={{
          border: "2px solid white",
          height: "400px",
          display: "grid",
          width: "60%",
          margin: "auto",
          gridTemplateColumns: "repeat(2,1fr)",
        }}
      >
        {item.map((el) => (
          <div
            key={el.id}
            style={{
              border: "2px solid white",
              width: "250px",
            }}
          >
            ProjectName:{el.name}{<br/>}description:{el.description}{<br/>}forks:{el.forks_count}
            {/* <div syle={{border:"2px solid black"}}>{}</div> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
