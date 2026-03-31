
let yr = new Date().getFullYear();
document.getElementById("currentyear").textContent =
    `${yr} Cristian Fernandez | Utah, USA`;

const d = new Date(document.lastModified);
document.getElementById("lastModified").textContent =
    `Last Modify ${d.toLocaleString("en-US", { hour12: false }).replace(",", "")}`;

   




let count = localStorage.getItem("reviewCount");

if (count === null) {
    count = 0;
} else {
    count = Number(count);
}

count++;
localStorage.setItem("reviewCount", count);
if (count == 1) {
    document.getElementById("reviewCount").textContent = "This is the first review.";
}else{
    document.getElementById("reviewCount").textContent = count;
}

