import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1> Info Page</h1>
      <p>Some page info</p>
      <button className="btn" onClick={() => history.push("/")}>
        Back to task list{" "}
      </button>
    </>
  );
};
