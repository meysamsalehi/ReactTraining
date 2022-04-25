import React from "react";

const MemoComp = (props) => {
  console.log("memo");
  return <div>pure component {props.name}</div>;
};

export default React.memo(MemoComp);
