import noticeHandling from "./Platform_NoticeHanding";
import store from "./Platform_Store";
import { StoreChangedContext } from "./Platform_Contexts";
import withStoreHOC from "./Platform_withStoreHOC";
import { getHOC } from "./Platform_withPlatformHOC";

let __pkg = null;

//::DEFAULT::::::::::-::::::::::-::::::::::-::::::::::-::::::::::
export default Platform();
function Platform() {
  const Publik = {
    initPlatform
  };
  return Publik;
}

//::EXPORTS::::::::::-::::::::::-::::::::::-::::::::::-::::::::::
export const getStore = () => {
  return __pkg.store;
};

//::HOISTED::::::::::-::::::::::-::::::::::-::::::::::-::::::::::

// HOISTED PUBLIK FUNCTIONS (Have NO closures over module's info.)
function initPlatform(initalStoreTree, noticeHandlers, tools) {
  if (!__pkg) {
    store.initStorePojo(initalStoreTree);
    noticeHandling.setStore(store);
    noticeHandling.setNoticeHandlers(noticeHandlers);
    __pkg = {
      StoreChangedContext,
      store,
      withStoreHOC: withStoreHOC,
      withPlatformHOC: getHOC(store),
      notify: noticeHandling.notify,
      tools: { ...tools }
    };
  }
  return __pkg;
}
