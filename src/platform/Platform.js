import noticeHandling from "./Platform_NoticeHanding";
import store from "./Platform_Store";
import { StoreChangedContext } from "./Platform_Contexts";
import withStoreHOC from "./Platform_withStoreHOC";

let __pkg = null;

//::DEFAULT::::::::::-::::::::::-::::::::::-::::::::::-::::::::::
export default Platform();
function Platform() {
  const Publik = {
    initPlatform
  };
  return Publik;
}

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
      notify: noticeHandling.notify,
      tools: { ...tools }
    };
  }
  return __pkg;
}
