import numeral from "numeral";

export default function rsFormat(number) {
  return "₹" + numeral(number).format("0,0.00");
}
