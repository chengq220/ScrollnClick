function scrollThrough() {
  return new Promise((resolve) => {
    console.log("scrolling through");
    window.scrollTo(0, 0);
    var currentScroll = 0;
    var scrollInterval = setInterval(function() {
      currentScroll += 12;
      window.scrollTo(0, currentScroll);
      if (currentScroll >= document.body.scrollHeight) {
        clearInterval(scrollInterval);
        console.log("done scrolling");
        resolve("finished");
      }
    }, 60);
  });
}

async function reload_next(){
    const result = await scrollThrough();
    console.log("refresh page");
    // window.location.reload(true);
    document.getElementById("mangaFile").click();
}

// reload_next();

setInterval(function() {
  reload_next();
}, 3000);
