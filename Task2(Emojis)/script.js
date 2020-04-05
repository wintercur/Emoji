document.addEventListener("DOMContentLoaded",() => {
   td = document.querySelector("#emojis");
   table = document.querySelector("#emojis");

   fetch("https://api.github.com/emojis", {
      method: "GET"
   })
      .then(response => {
         return response.json();
      })
      .then(data => {
         emojis = data;
         keys = Object.keys(emojis);
         Emojis("");
      });
});

function Emojis() {
   show = keys;
   show.forEach(key => {
      td = document.createElement("td");
      img = document.createElement("img");
      img.setAttribute("alt", key);
      img.setAttribute("src", emojis[key]);
      td.innerHTML = key;
      td.appendChild(img);
      table.appendChild(td);
   });
   }