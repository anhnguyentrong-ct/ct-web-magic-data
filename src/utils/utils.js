const res = await fetch(
  "https://gateway.chotot.org/v1/public/recommender/homepage?fingerprint="
);
const data = await res.json();
if (window) {
  console.log("this run");
  window.adData = data;
}
console.log("this data: ", data);
