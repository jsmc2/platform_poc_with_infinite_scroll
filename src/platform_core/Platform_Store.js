import _ from "lodash"; // TODO, later facade lodash in Tools.
import * as Tools from "./Platform_Tools";

/* TODOS:
  1.  Do reads and writes against a standard dataPojo = storePojo.data  
      and make a nextDajo from that.  
      This will allow deep clones in Tools.setProperty be specific
      to the the more niched path under data specified by the first
      key of the dot path under data.
*/
let __wasStorePojoRetrieved = false;
let __wasStorePojoInited = false;

//::DEFAULT::::::::::-::::::::::-::::::::::-::::::::::-::::::::::
export default Store();
function Store() {
  const info = {
    storePojo: { data: {} }, // let
    nextStorePojo: { data: {} }, //let
    logForWritesToNext: [], //const
    logForCommits: [], // const
    commitHandler: storePojo => {}
  };
  const ii = info;
  const PublikMethods = {
    initStorePojo,
    getStorePojo,
    readData,
    readNextData,
    writeData,
    readVal,
    readNextVal,
    writeVal,
    startWrites,
    commitWrites,
    setCommitHandler
  };
  const PublikFunctions = {};
  const Publik = {
    ...PublikMethods,
    ...PublikFunctions
  };
  return Publik;

  //::HOISTED::::::::::-::::::::::-::::::::::-::::::::::-::::::::::

  // HOISTED PUBLIK METHODS (Have closures over module's info.)
  function initStorePojo(initalTree) {
    if (__wasStorePojoInited === false) {
      ii.nextStorePojo = { ...initalTree };
      commitWrites();
      __wasStorePojoInited = true;
    }
    return __wasStorePojoInited;
  }
  function getStorePojo() {
    let pojo = false;
    if (__wasStorePojoRetrieved === false) {
      pojo = ii.storePojo;
      __wasStorePojoRetrieved = true;
    }
    return pojo;
  }
  function readData(propertyDotPath) {
    let val = undefined;
    if (propertyDotPath.length) {
      propertyDotPath = "data." + propertyDotPath;
      val = Tools.getProperty(propertyDotPath, ii.storePojo);
      // Deep clone any maninpulation to return val doen't affect storePojo.
      val = _.cloneDeep(val, true);
    }
    return val;
  }
  function readNextData(propertyDotPath) {
    let val = undefined;
    if (propertyDotPath.length) {
      propertyDotPath = "data." + propertyDotPath;
      val = Tools.getProperty(propertyDotPath, ii.nextStorePojo);
      // Deep clone any maninpulation to return val doen't affect storePojo.
      val = _.cloneDeep(val, true);
    }
    return val;
  }
  function writeData(val, propertyDotPath) {
    let didWrite = false;
    if (!ii.nextStorePojo) {
      startWrites();
    }
    if (propertyDotPath.length) {
      propertyDotPath = "data." + propertyDotPath;
      didWrite = Tools.setProperty(val, propertyDotPath, ii.nextStorePojo);
      _updateLogForWritesToNext(
        propertyDotPath,
        val,
        Date.now(),
        "didWrite_" + didWrite
      );
    }
    return didWrite;
  }
  function readVal(propertyDotPath) {
    let val = Tools.getProperty(propertyDotPath, ii.storePojo);
    val = typeof val === "object" ? { ...val } : val;
    return val;
  }
  function readNextVal(propertyDotPath) {
    let val = Tools.getProperty(propertyDotPath, ii.nextStorePojo);
    val = typeof val === "object" ? { ...val } : val;
    return val;
  }
  function writeVal(val, propertyDotPath) {
    const timestamp = Tools.setProperty(val, propertyDotPath, ii.nextStorePojo);
    _updateLogForWritesToNext(propertyDotPath, val, timestamp);
    const newVal = readNextVal(propertyDotPath);
    return newVal;
  }
  function startWrites() {
    const startWritesTS = Date.now();
    ii.nextStorePojo = {
      ...ii.storePojo,
      startWritesTS
    };
    return startWritesTS;
  }
  function commitWrites() {
    const commitTS = Date.now();
    const prevCommitTS = ii.storePojo.commitTS;
    ii.storePojo = {
      ...ii.storePojo,
      ...ii.nextStorePojo,
      commitTS,
      prevCommitTS
    };
    ii.nextStorePojo = null;
    _setCommitsLogItem(commitTS);
    Publik.commitTS = commitTS;
    ii.commitHandler(Publik);
  }
  function setCommitHandler(commitHandler) {
    ii.commitHandler = commitHandler;
  }

  // HOISTED PRIVATE METHODS (Have closures over module's info.)
  function _updateLogForWritesToNext(dotPath, val, timestamp, didWrite) {
    const item = { dotPath, val, timestamp, didWrite };
    ii.logForWritesToNext.push(item);
  }
  function _setCommitsLogItem(timestamp) {
    const item = { timestamp };
    ii.logForCommits.push(item);
  }
}
