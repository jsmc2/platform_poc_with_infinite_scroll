import _ from "lodash";

export function getProperty(propertyDotPath, object) {
  let didFail = false;
  const parts = propertyDotPath.split(".");
  let property = object || this;
  if (parts.length === 1) {
    property = property[parts[0]];
  } else {
    for (let idx = 0; idx < parts.length; idx++) {
      if (idx < parts.length - 1) {
        if (typeof property === "object") {
          property = property[parts[idx]];
        } else {
          didFail = true;
          break;
        }
      } else {
        property = property[parts[idx]];
      }
    }
  }
  return didFail ? undefined : property;
}
export function setProperty(value, propertyDotPath, object) {
  // Failure defaults::
  let didSet = false;
  let keyToSet = "";
  const parts = propertyDotPath.split(".");
  let property = object || this;
  if (parts.length === 1) {
    keyToSet = parts[parts.length - 1];
  } else {
    const firstPart = property[parts[0]];
    if (typeof firstPart === "object") {
      let part;
      object[parts[0]] = _.cloneDeep(firstPart, true);
      let didBreak = false;
      for (let idx = 0; idx < parts.length - 1; idx++) {
        if (typeof property === "object") {
          part = parts[idx];
          property = property[part];
        } else {
          didBreak = true;
          break;
        }
      }
      keyToSet = didBreak ? "" : parts[parts.length - 1];
    }
  }
  if (keyToSet) {
    property[keyToSet] = value;
    didSet = true;
    object.writeTS = Date.now();
  }
  return didSet;
}
