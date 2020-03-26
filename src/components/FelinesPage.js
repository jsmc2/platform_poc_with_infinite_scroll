import React from "react";
import FelinesList from "./FelinesList";
import { notify, withStoreHOC, tools } from "../platform";
const { runManageScrollToBottom, useMousePosition } = tools;

const style_presentSelfNested = { marginLeft: "20px" };
const propsMapping = {
  forPgCnt: "felinesPgCnt",
  forPgCntMax: "felinesPgCntMax"
};

//::DEFAULT::::::::::-::::::::::-::::::::::-::::::::::-::::::::::
export default withStoreHOC(propsMapping, React.memo(TheComp));
function TheComp(props) {
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
}
//::HOISTED::::::::::-::::::::::-::::::::::-::::::::::-::::::::::
function handleScrolledToBottom() {
  notify({
    subject: "FelinesPageScrolledToBottom"
  });
}
