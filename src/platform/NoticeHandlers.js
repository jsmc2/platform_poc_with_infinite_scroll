export function TheAppMounted(notice, store) {
  console.log("|-----");
  console.log(">>> Running handler for ApplicationMounted");
  console.log(">>> Notice is: ", notice);
  console.log(">>> storeIs: ", store.readVal(""));
}
// Helper FelinesPageScrolledToBottom, FelinesListMounted.
async function fetchFelines_(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
export async function FelinesListMounted(notice, store) {
  // Fetch first set of cat listings.
  const url =
    "https://api.thecatapi.com/v1/images/search?limit=10&page=0&order=Desc";
  const felines = await fetchFelines_(url);
  // Put listings in store::
  store.writeData(felines, "felines");
  store.writeData(1, "felinesPgCnt");
  store.writeData(5, "felinesPgCntMax");
  store.commitWrites();
}
export async function FelinesPageScrolledToBottom(notice, store) {
  let felinesPgCnt = store.readData("felinesPgCnt");
  let felinesPgCntMax = store.readData("felinesPgCntMax");
  if (felinesPgCnt && felinesPgCntMax && felinesPgCnt + 1 <= felinesPgCntMax) {
    felinesPgCnt += 1;
    const url = `https://api.thecatapi.com/v1/images/search?limit=10&page=${felinesPgCnt -
      1}&order=Desc`;
    const felines = await fetchFelines_(url);
    // Put listings in store::
    const existingFelines = store.readData("felines");
    const updatedFelines = [...existingFelines, ...felines];
    store.writeData(updatedFelines, "felines");
    store.writeData(felinesPgCnt, "felinesPgCnt");
    store.commitWrites();
  }
}
export function ListingsScrolledToFold(notice, store) {
  console.log("|-----");
  console.log(">>> Running handler for ListingsScrolledToFold");
  console.log(">>> Notice is: ", notice);
  console.log(">>> storeIs: ", store.readVal(""));
}
export function IncrementAgeButtonClicked(notice, store) {
  const id = notice.id;
  let age = store.readData(`persons.${id}.age`);
  age += 1;
  store.startWrites();
  store.writeData(age, `persons.${id}.age`);
  store.commitWrites();
}
export function SomethingElseHappened(notice, store) {
  console.log("|-----");
  console.log(">>> Running handler for SomethingElseHappened");
  console.log(">>> Notice is: ", notice);
  console.log(">>> storeIs: ", store.readVal(""));
}
