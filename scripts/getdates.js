let yr = new Date().getFullYear();
document.getElementById("currentyear").textContent = `${yr} Cristian Fernandez | Utah, USA`;

const d = new Date(document.lastModified);
document.getElementById("lastModified").textContent =`Last Modify ${d.toLocaleString("en-US", { hour12: false }).replace(",", "")}`;