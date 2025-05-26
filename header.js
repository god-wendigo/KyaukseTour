import { lightblue, primary, secondary } from './color.js';

export class Header {
    static navbar(text, imgSrc) {
        const mainHeader = document.getElementById("navbar");
        mainHeader.style.backgroundColor = lightblue;
        mainHeader.style.backdropFilter = "blur(10px)"
        mainHeader.style.display = "flex";
        mainHeader.style.padding = "10px";
        mainHeader.style.alignItems = "center";
        mainHeader.style.width = "100vw";
        mainHeader.style.justifyContent = "space-between";

        const logo = document.createElement("a");
        logo.href = "../index.html";
        logo.style.display = "flex";
        logo.style.alignItems = "center";
        logo.style.gap = "10px";

        const logoImg = document.createElement("img");
        logoImg.src = imgSrc;
        logoImg.style.width = "4rem";
        logoImg.style.height = "4rem";
        logoImg.classList.add("filter");

        const logoTxt = document.createElement("span");
        logoTxt.textContent = text;
        logoTxt.style.fontFamily = "Myay Phyu";
        logoTxt.style.fontSize = "4rem";
        logoTxt.style.fontWeight = "600";
        logoTxt.style.color = "white";

        const ul = document.createElement("ul");
        ul.style.marginRight = "5rem";
        ul.style.display = "flex";
        ul.style.listStyle = "none";
        ul.style.gap = "2rem";

        const navItems = [
            { text: "Explore", href: "" },
            { text: "Blog", href: "" },
            { text: "Shop", href: "" }
        ];

        navItems.forEach(item => {
            const li = document.createElement("li");
            const a = document.createElement("a");

            a.textContent = item.text;
            a.href = item.href;
            a.style.color = "white";
            a.style.fontFamily = "Consolas";
            a.style.fontSize = "1.7rem";
            a.style.fontWeight = "800";

            li.appendChild(a);
            ul.appendChild(li);
        });

        if (window.innerWidth <= 480) {
            ul.style.display = "none";
            mainHeader.style.justifyContent = "center";
        }

        logo.appendChild(logoImg);
        logo.appendChild(logoTxt);

        mainHeader.appendChild(logo);
        mainHeader.appendChild(ul);

        return mainHeader;
    }
}


