document.addEventListener("DOMContentLoaded",() => {
   span = document.querySelector("#emojis");
   ul = document.querySelector("#emojis");

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
      span = document.createElement("span");
      img = document.createElement("img");
      img.setAttribute("alt", key);
      img.setAttribute("src", emojis[key]);
      span.innerHTML = ":" + key + ":";
      span.appendChild(img);
      ul.appendChild(span);
   });
   }