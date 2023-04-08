import React from "react";
import { useParams } from "react-router-dom";

const NotePage = () => {
  const params = useParams();

  return (
    <>
      <div>NotePage</div>
      <div>{params.id}</div>
    </>
  );
};

export default NotePage;
