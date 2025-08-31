import "./style.css";
import Header from "./src/components/Header/Header.js";
import Hero from "./src/components/Hero/Hero.js";
import Main from "./src/components/Main/Main.js";
import Footer from "./src/components/Footer/Footer.js";

const app = document.getElementById("app");

app.appendChild(Header());
app.appendChild(Hero());
app.appendChild(Main());
app.appendChild(Footer());
