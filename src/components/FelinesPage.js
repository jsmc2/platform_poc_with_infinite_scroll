import React from "react";
import platform from "../platform";
import FelinesList from "./FelinesList";
import useMousePosition from "../hooks/useMousePosition";

const runManageScrollToBottom = platform.tools.runManageScrollToBottom;
const style_presentSelfNested = { marginLeft: "20px" };

const TheComp = React.memo(props => {
  React.useEffect(() => {
    runManageScrollToBottom(handleScrolledToBottom);
  }, []);

  const debounceInMS_for_useMousePosition = 5;
  const { x, y } = useMousePosition(debounceInMS_for_useMousePosition);

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
    <div style={{ ...style_presentSelfNested }}>
      -= FelinesPage (w/ Store -|- Memoed -|- Time: {Date.now()} -|-{" "}
      {`Mouse at: x=${x}, y=${y}`} -|- {`Pg #: ${props.forPgCnt}`}) =-
      <FelinesList />
      {loadingMsg}
    </div>
  );
});

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
