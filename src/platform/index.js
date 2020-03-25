import { Tools } from "../tools";
import platform from "./Platform_";
import * as noticeHandlers from "./NoticeHandlers";
let __initaizedPlatform = false;

if (__initaizedPlatform === false) {
  console.log(">>> TOOOOOOLS: ", Tools);
  const initialStoreData = bgetInitialStoreData_();

  __initaizedPlatform = platform.initPlatform(
    initialStoreData,
    noticeHandlers,
    Tools
  );
}

console.log(">>> platformm : ", platform);

export default __initaizedPlatform;

// HOISTED HELPER FUNCTIONS (Have NO closures over module's info.)
function bgetInitialStoreData_() {
  const initialStoreData = {
    data: {
      persons: {
        bob: {
          id: "bob",
          name: "Bob",
          age: 25,
          spouse: "sue"
        },
        sue: {
          id: "sue",
          name: "Sue",
          age: 23,
          spouse: "bob"
        }
      }
    }
  };
  return initialStoreData;
}
