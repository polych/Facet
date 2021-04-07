var a = 0;
export const nextPage = (element, scrollToEnd, fullHeight, height, func) => {
  b = 0;
  if (element.length > 0 && height !== fullHeight) {
    if (scrollToEnd >= fullHeight) {
      if (a === 1) {
        func("next");
        a = 0;
      } else {
        a = a + 1;
      }
    }
  } else {
    func("next");
  }
};
var b = 0;
export const prevPage = (element, top, fullHeight, height, func) => {
  a = 0;
  if (element.length > 0 && height !== fullHeight) {
    if (top <= 0) {
      if (b === -1) {
        func();
        b = 0;
      } else {
        b = -1;
      }
    }
  } else {
    func();
  }
};
