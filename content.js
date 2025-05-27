export class MainPage {
    static showMainPage(caption) {

        const contents = document.getElementById('contents');
        contents.style.display  = "flex";
        contents.style.flexDirection = "column"

        // Caption for Main content
        const headCaption = document.createElement('h2');
        headCaption.textContent = caption;
        headCaption.style.color = "white";
        headCaption.style.fontFamily = "'Bebas Neue', sans-serif";
        headCaption.style.fontSize = "3rem";
        headCaption.style.margin = "18vh auto";
        headCaption.style.alignSelf = "center";
        headCaption.style.textAlign = "center";
        headCaption.style.textShadow = "5px 5px 10px black"
        
        //search bar container
        const searchContainer = document.createElement('div');
        searchContainer.style.display = "flex";
        searchContainer.style.flexDirection = "row";
        searchContainer.style.justifyContent = "space-around";

        // Search Bar
        const searchBar = document.createElement('input');
        searchBar.type = "text";
        searchBar.id = "searchInput";
        searchBar.placeholder = "What are you looking for ?";
        searchBar.style.width = "35vw";
        searchBar.style.height = "3rem"
        searchBar.style.borderRadius = "50px";
        searchBar.style.border = "none";
        searchBar.style.paddingLeft = "2rem";
        searchBar.style.alignSelf = "center"
        searchBar.style.fontFamily = "Consolas";
        searchBar.style.fontSize = "1.7rem";
        searchBar.addEventListener('focus', () => {
            searchBar.style.outline = "red";
            searchBar.style.textAlign = "left";
            searchBar.placeholder = "";
        });
        searchBar.addEventListener('blur', () => {
            searchBar.placeholder = "What are you looking for ?"
        })

        //dropdown list
        const dropList = document.createElement('select');
        dropList.style.width = "35vw";
        dropList.style.height = "3rem";
        
        dropList.style.borderRadius = "50px";
        dropList.style.border = "none";
        dropList.style.padding = "0 2rem";
        dropList.style.lineHeight = "3rem";
        dropList.style.fontSize = "1.7rem";
        dropList.style.fontFamily = "Consolas"

        const items = [ "All Category", "Food", "Cafe", "Restaurant", "Shopping", "Drink", "Culture"];

        items.forEach(item => {
            const listItem = document.createElement('option');
            listItem.value = item;
            listItem.textContent = item;
            
            dropList.appendChild(listItem);
        });

        //search button
        const button = document.createElement('button');
        button.textContent = "Search Places";
        button.style.alignSelf = "center";
        button.style.padding = "0 1.5rem";
        button.style.borderRadius = "50px";
        button.style.border = "none";
        button.style.height = "3rem";
        button.style.fontSize = "1.7rem";
        button.style.fontFamily = "Consolas";
        button.style.marginTop = "3rem";
        

        searchContainer.appendChild(searchBar);
        searchContainer.appendChild(dropList);

        contents.appendChild(headCaption);
        contents.appendChild(searchContainer);
        contents.appendChild(button)
    }
}
