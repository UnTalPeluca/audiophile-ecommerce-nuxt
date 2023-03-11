export default function (value) {
  if(value === undefined || value === null) return "$ 0";
  return "$ " + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
