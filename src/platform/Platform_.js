import React from "react";
import noticeHandling from "./Platform_NoticeHanding";
import store from "./Platform_Store";
import * as Tools from "./Platform_Tools";
import { StoreChangedContext } from "./Platform_Contexts";

import StoreWrap from "./Platform_StoreWrap";

let __pkg = false;

console.log(">>> Platform tools: ", Tools);

function Platform() {
  const Publik = {
    initPlatform
  };
  return Publik;
}

export default Platform();

// HOISTED PUBLIK FUNCTIONS (Have NO closures over module's info.)
function initPlatform(initalStoreTree, noticeHandlers, tools) {
  console.log(">>> INIT PLATFORM");
  if (__pkg === false) {
    console.log(">>> INIT PLATFORM FULLY");
    store.initStorePojo(initalStoreTree);
    noticeHandling.setStore(store);
    noticeHandling.setNoticeHandlers(noticeHandlers);
    __pkg = {
      StoreChangedContext,
      store,
      withStoreWrap: withStoreWrap_,
      notify: noticeHandling.notify,
      tools: { ...tools }
    };
  }
  console.log(">>> Platform pkg: ", __pkg);
  return __pkg;
}

function withStoreWrap_(WrappedComp, propsMapping) {
  return props => {
    return (
      <StoreWrap
        {...props}
        WrappedComp={WrappedComp}
        propsMapping={propsMapping}
      />
    );
  };
}
