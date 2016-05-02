
main = function(file, node) {
  function update () {
    var title = document.querySelector('span.trackTitle');
    var artist = document.querySelector('div.trackArtist');
    if (title && artist) {
      document.querySelector('title').textContent = artist.textContent + ' / ' + title.textContent;
    }
  }

  setInterval(update, 400);
};

main();
