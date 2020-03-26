import { debounce } from "lodash";

//::DEFAULT::::::::::-::::::::::-::::::::::-::::::::::-::::::::::
export default runManageScrollToBottom;
function runManageScrollToBottom(scrolledToBottomHandler) {
  window.onscroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      scrolledToBottomHandler();
    }
  }, 200);
}
