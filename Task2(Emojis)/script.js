const getEmojis = () => (
    fetch('https://api.github.com/emojis')
      .then((response) => response.json())
      .catch((error) => console.error(error))
  );

  getEmojis().then((emojis) => {
    const images = Object.entries(emojis).flatMap(
      ([ name, image ]) => ({
        name,
        image
      })
    );
    images.forEach((emoji) => {
      const image = new Image();
      image.src = emoji.image;
      image.title = emoji.name;
      image.alt = emoji.name;
      document.write('<p>'+emoji.name+'</p>');
      document.body.appendChild(image);
    });
});
