const mainColor: string = "#2ecc71";
const darkColor: string = "#1b7943";

document.body.style.backgroundColor = mainColor;
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.margin = "20px";

const heading = document.querySelector("h1");
if (heading) {
    heading.style.color = darkColor;
}