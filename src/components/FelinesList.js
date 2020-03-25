import React from "react";
import platform from "../platform";
import ListHeaderMemoed from "./ListHeaderMemoed";
import ListSubheaderUnmemoed from "./ListSubheaderUnmemoed";
import AnimalsList from "./AnimalsList";

const TheComp = React.memo(props => {
  // Get props from StoreWrap.
  React.useEffect(() => {
    handleCompMounted_();
  }, []);
  return (
    <div>
      -= FelinesList | (Time: {Date.now()}) =-
      <ListHeaderMemoed />
      <ListSubheaderUnmemoed />
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
