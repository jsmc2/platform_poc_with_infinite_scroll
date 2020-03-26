import { tools as __tools } from "../tools";
import { hooks } from "../hooks";
import { initPlatform } from "../platform_core";
import * as noticeHandlers from "./NoticeHandlers";

let __initaizedPlatform = false;

//::DEFAULT::::::::::-::::::::::-::::::::::-::::::::::-::::::::::
export default inializePlatform();
function inializePlatform() {
  console.log(">>> START inializePlatform.  (KEEP THIS CONSOLE.LOG)");
  if (__initaizedPlatform === false) {
    const initialStoreData = bgetInitialStoreData_();
    const tools = { ...__tools, ...hooks };
    __initaizedPlatform = initPlatform(initialStoreData, noticeHandlers, tools);
  }
  return __initaizedPlatform;
}

//::EXPORTS::::::::::-::::::::::-::::::::::-::::::::::-::::::::::
// Individully export functionality for view.
export const notify = __initaizedPlatform.notify;
export const tools = __initaizedPlatform.tools;
export const withStoreHOC = __initaizedPlatform.withStoreHOC;
export const withPlatformHOC = __initaizedPlatform.withPlatformHOC;

//::HOISTED::::::::::-::::::::::-::::::::::-::::::::::-::::::::::

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
          age: 23
        }
      }
    }
  };
  return initialStoreData;
}
