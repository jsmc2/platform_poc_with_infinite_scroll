import React from "react";
import platform from "../platform";
import ListHeader from "./ListHeader";
import ListSubheader from "./ListSubheader";
import AnimalsList from "./AnimalsList";

const style_presentSelfNested = { marginLeft: "20px" };

const TheComp = React.memo(props => {
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
});

const propsMapping = {
  list: "felines"
};

export default platform.withStoreWrap(TheComp, propsMapping);

// HOISTED HELPER FUNCTIONS:
function handleCompMounted_() {
  platform.notify({
    subject: "FelinesListMounted"
  });
}
