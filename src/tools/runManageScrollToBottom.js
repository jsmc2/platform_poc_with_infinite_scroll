import { debounce } from "lodash";

function runManageScrollToBottom(scrolledToBottomHandler) {
  window.onscroll = debounce(() => {
    console.log(
      ">>> Scrolling : ",
      window.innerHeight,
      document.documentElement.scrollTop,
      document.documentElement.offsetHeight
    );
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      console.log(">>> Scrolling and at bottom");
      scrolledToBottomHandler();
      // Do awesome stuff like loading more content!
    }
  }, 200);
}

export default runManageScrollToBottom;
