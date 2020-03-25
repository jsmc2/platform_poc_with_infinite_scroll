import React from "react";
import StoreTestPerson from "./StoreTestPerson";
import StoreTestAgeButton from "./StoreTestAgeButton";
import Timestamp from "./Timestamp";

function Output() {
  return (
    <div>
      <h3>-- Store Test - {Date.now()} --</h3>
      <StoreTestPerson greeting="Howdy. " />
      <StoreTestAgeButton id="bob" />
      <Timestamp />
    </div>
  );
}

export default Output;
