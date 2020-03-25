import React from "react";
import noticeHandling from "./Platform_NoticeHanding";
import store from "./Platform_Store";
import { StoreChangedContext } from "./Platform_Contexts";

import StoreWrap from "./Platform_StoreWrap";

let __pkg = false;

function Platform() {
  const Publik = {
    initPlatform
  };
  return Publik;
}

export default Platform();

// HOISTED PUBLIK FUNCTIONS (Have NO closures over module's info.)
function initPlatform(initalStoreTree, noticeHandlers, tools) {
  if (__pkg === false) {
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
