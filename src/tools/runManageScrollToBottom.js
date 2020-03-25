import { debounce } from "lodash";

function runManageScrollToBottom(scrolledToBottomHandler) {
  window.onscroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      scrolledToBottomHandler();
      // Do awesome stuff like loading more content!
    }
  }, 200);
}

export default runManageScrollToBottom;
