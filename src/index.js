// MANTRA: When some event happens, I want to make what kind of fetch and then manipulate the DOM in what way?
// --global variables-- //
const mainUrl = "http://127.0.0.1:3000/"
const comicCon = document.getElementById("comic-container")
const createComicForm = document.getElementById("create-comic-form")
let moreComicImg = document.getElementById("comic-more-img")
let moreComicTitle = document.getElementById("comic-more-title")
let moreComicCat = document.getElementById("comic-more-cat")
let moreComicDesc = document.getElementById("comic-more-desc")
const randomComicBtn = document.getElementById("random-comic-btn")
const catFilter = document.getElementById("categories")
const formErrorCon = document.getElementById("form-errors")

// --DOM Loads Event Listener-- //
document.addEventListener('DOMContentLoaded', () => {
    getComics()
    // --Add submit event listener to 'New Comic Form'
    createComicForm.addEventListener("submit", (e) => createFormHandler(e))
    // --Add 'random comic' button event listener
    randomComicBtn.addEventListener('click', (e) => Comic.randomComic(e))

})

// --Add 'category filter' onchange event
function filterHandler() {
    comicCon.innerHTML = ''
    Comic.renderWithCatFilter(catFilter.value).forEach(comic => {
        comicCon.innerHTML += comic.renderComic()
        //--More Info Card Listener-- //
        moreComicInfoEvent()
    })
}

// --Fetch for Comics Function-- //
const getComics = function () {
    fetch(mainUrl + "comics")
        .then ((resp) => resp.json())
        .then ((comics) => {
            comics.forEach(comic => {
                let newComic = new Comic(comic)
                comicCon.innerHTML += newComic.renderComic()
            })
            //--More Info Card Listener-- //
            moreComicInfoEvent()
        })
        .then ((resp) => Comic.randomComic(resp))
}

// --Form Handler Function For Post Fetch-- //
const createFormHandler = function (e) {
    e.preventDefault()
    const titleInput = e.target.comic_title.value
    const descInput = e.target.comic_desc.value
    const imageInput = e.target.comic_img.value
    const categoryId = parseInt(e.target.categories.value)
    postFetch(titleInput, descInput, imageInput, categoryId)
}

// --New Comic Post Fetch Function-- //
const postFetch = function (title, description, img_url, category_id) {
    const comicData = {title, description, img_url, category_id}
    
    fetch(mainUrl + "comics", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(comicData)
    })
    .then(resp => resp.json())
    .catch(error => {
        console.log(error)
    })
    .then(comic => {
        console.log(comic.errors)
        if (comic.errors) {
            renderErrors(comic.errors)
        }
        else {
            let newComic = new Comic(comic)
            comicCon.innerHTML += newComic.renderComic(comic)
            location.reload()
        }
    })
}

// --Render Errors-- //
const renderErrors = function (errors) {
    errors.forEach(error => {
        formErrorCon.innerHTML += `<li>${error}</li>`
    })
}

// --More Comic Info Event-- //
const moreComicInfoEvent = function () {
    const comicCards = document.querySelectorAll('#comic-card')
    comicCards.forEach(card => {
        card.addEventListener("click", function(e) {
            const selectComic = Comic.all.find(comic => comic.id === parseInt(e.target.parentElement.parentElement.dataset.id))
            selectComic.renderMoreInfo(moreComicImg, moreComicTitle, moreComicCat, moreComicDesc)
        })
    })
}