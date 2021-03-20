console.log("hello event")

console.log("hello event 2")

const allCards = document.querySelectorAll("#comic-card")

window.addEventListener('load', function() {
  console.log(allCards)
})



// // --More Comic Info-- //
// const renderMoreInfo = function () {

//   // // --More Info Card Listener-- //
//   // const comicCards = document.querySelectorAll('#comic-card')
//   // comicCards.forEach(function(i) {
//   //     i.addEventListener('click', function() {
//   //         const selectComic = Comic.all.find(comic => comic.id === parseInt(i.dataset.id))
//   //         selectComic.renderMoreInfo(moreComicImg, moreComicTitle, moreComicCat, moreComicDesc)
//   //     })
//   // })
// }

// window.addEventListener("load", function() {
//   const allCards = 
//   console.log(allCards)
// })