import React from "react";
import { Input, Button } from "../index";
function ComponentLibrary() {
  return (
    <div className='row m-0"'>
      <div className="py-3 d-flex  ms-3">
        {" "}
        <Input
          placeholder={""}
          value={""}
          classNameInput={"p-2 border rounded "}
          onChange={""}
          labelName={""}
          classNameLabel={"h6 text-grey1"}
        />
      </div>
      <div className="d-flex  row  ">
        <Button title={"Login"} className={"mt-4 p-3 h6 w-25 ms-3 "} />
        <Button
          title={"Login"}
          className={"mt-4 p-3 h6 w-25 ms-3 text-secondary bg-secondary"}
        />
        <Button
          title={"Login"}
          className={"mt-4 p-3 h6 w-25 ms-3 text-grey bg-grey "}
        />
        <Button
          title={"Login"}
          className={"mt-4 p-3 h6 w-25 ms-3 text-grey1 bg-grey1 "}
        />
      </div>
    </div>
  );
}

export default ComponentLibrary;
