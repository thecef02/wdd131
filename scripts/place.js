//footer
let yr = new Date().getFullYear();
document.getElementById("currentyear").textContent =
  `${yr} Cristian Fernandez | Utah, USA`;
const d = new Date(document.lastModified);
document.getElementById("lastModified").textContent =
  `Last Modify ${d.toLocaleString("en-US", { hour12: false }).replace(",", "")}`;

const temperatureC = 10;
const windSpeedKmh = 5;

function calculateWindChill(tempC, windKmh) {
  return (13.12 + 0.6215 * tempC - 11.37 * windKmh ** 0.16 + 0.3965 * tempC * windKmh ** 0.16);
}

const windChillElement = document.querySelector("#windchill");
let windChillText = "N/A55";
// alert(`${temperatureC} ${windSpeedKmh}`);
if (temperatureC <= 10 && windSpeedKmh > 4.8) {
  const wc = calculateWindChill(temperatureC, windSpeedKmh);
  windChillText = `${wc.toFixed(1)} °C`;
}

windChillElement.textContent = windChillText;
