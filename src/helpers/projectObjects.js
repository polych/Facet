export const textFlow2 = [
  { title: "text21", text: "text22" },
  { title: "text23", text: "text24" },
  { title: "text25", text: "text26" },
  { title: "text27", text: "text28" },
  { title: "text29", text: "text30" },
];
export const textFlow = [
  { title: "text10", text: "text11" },
  { title: "text12", text: "text13" },
  { title: "text14", text: "text15" },
  { title: "text16", text: "text17" },
];
const initarr = (number, text) => {
  let values = {};
  for (let i = 1; i <= number; i++) {
    let a = `${text}${i}`;
    values = {
      ...values,
      [a]: "",
    };
  }
  return values;
};
export const initValues = {
  name: "",
  titleDescr: "",
  invested: 0,
  need: 0,
  images: {
    mainImg: null,
    ...initarr(7, "img"),
  },
  ...initarr(33, "text"),
};
