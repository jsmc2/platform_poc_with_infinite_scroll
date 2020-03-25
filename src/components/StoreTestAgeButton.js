import React from "react";
import platform from "../platform/platform";

const StoreTestAgeButton = React.memo(props => {
  return (
    <div>
      <button onClick={handleTheClickOnButton_} data-idfier={props.id}>
        Increment Age - {Date.now()}
      </button>
    </div>
  );
});

export default StoreTestAgeButton;

// HOISTED HELPER FUNCTIONS
function handleTheClickOnButton_(event) {
  const event_ = { ...event };
  const id = event_.currentTarget.getAttribute("data-idfier");
  platform.notify({
    subject: "IncrementAgeButtonClicked",
    id,
    meta: {
      fromComponent: "StoreTest",
      prevNotice: null
    }
  });
}
