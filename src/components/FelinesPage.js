import React from "react";
import platform from "../platform";
import FelinesList from "./FelinesList";

const runManageScrollToBottom = platform.tools.runManageScrollToBottom;

console.log(">>> >>> platform 1: ", platform);
console.log(">>> >>> StoreWrap 1: ", platform);

function TheComp(props) {
  console.log(">>> >>> platform 2: ", platform);
  console.log(">>> >>> StoreWrap 2: ", platform);
  React.useEffect(() => {
    console.log(">>> @FelinesPage - mounted");
    runManageScrollToBottom(handleScrolledToBottom);
  }, []);
  let loadingMsg = "";
  if (!props.forPgCnt) {
    loadingMsg = "(Fetching first set of felines.)";
  } else {
    loadingMsg =
      props.forPgCnt < props.forPgCntMax
        ? "(Fetching more)"
        : "(Done - no more)";
  }
  return (
    <div>
      -= FelinesPage | (Time: {Date.now()}) =-
      <FelinesList />
      {loadingMsg}
    </div>
  );
}

const propsMapping = {
  forPgCnt: "felinesPgCnt",
  forPgCntMax: "felinesPgCntMax"
};

export default platform.withStoreWrap(TheComp, propsMapping);

function handleScrolledToBottom() {
  platform.notify({
    subject: "FelinesPageScrolledToBottom"
  });
}
