// const search = (query)=>{
//     console.log("searching for ",query);
// }

// search("H")
// search("HA")
// search("HAR")
// search("HARD")

//without debounce, the search function will be called for every keystroke, which can lead to performance issues.

function debounce(func, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId); // Cancel the last call
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const search = (query) => {
  console.log("searching for ", query);
};

const searchWithDebounce = debounce(search, 1000);

searchWithDebounce("H");
searchWithDebounce("HA");
searchWithDebounce("HAR");
searchWithDebounce("HARD");
