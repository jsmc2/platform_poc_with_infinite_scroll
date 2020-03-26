import React from "react";
import platform, { notify } from "../platform";
import ListHeader from "./ListHeader";
import ListSubheader from "./ListSubheader";
import AnimalsList from "./AnimalsList";

const style_presentSelfNested = { marginLeft: "20px" };
const propsMapping = {
  list: "felines"
};

//::DEFAULT::::::::::-::::::::::-::::::::::-::::::::::-::::::::::
export default platform.withStoreHOC(propsMapping, React.memo(TheComp));
function TheComp(props) {
  // Get props from StoreWrap.
  React.useEffect(() => {
    handleCompMounted_();
  }, []);
  return (
    <div style={{ ...style_presentSelfNested }}>
      -= FelinesList (w/ Store -|- Memoed -|- Time: {Date.now()}) =-
      <ListHeader />
      <ListSubheader />
      <AnimalsList list={props.list} />
    </div>
  );
}

//::HOISTED::::::::::-::::::::::-::::::::::-::::::::::-::::::::::
// HOISTED HELPER FUNCTIONS:
function handleCompMounted_() {
  notify({
    subject: "FelinesListMounted"
  });
}
