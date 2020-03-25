import React from "react";
import platform from "../platform";
import FelinesList from "./FelinesList";

const runManageScrollToBottom = platform.tools.runManageScrollToBottom;

function TheComp(props) {
  React.useEffect(() => {
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
