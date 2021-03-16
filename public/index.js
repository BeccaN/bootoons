// MANTRA: When some event happens, I want to make what kind of fetch and then manipulate the DOM in what way?
const mainUrl = "http://127.0.0.1:3000/"
const rootEl = document.getElementById("root")
const comicCon = document.getElementById("comic-container")
const createComicForm = document.getElementById("create-comic-form")

// --DOM Loaded Fetch-- //
document.addEventListener('DOMContentLoaded', () => {
    fetch(mainUrl + "comics")
        .then ((res) => res.json())
        .then ((data) => {
            data.forEach(comic => {
                renderComic(comic)
            })
        })
    // --Add submit event listener to 'New Comic Form'
    createComicForm.addEventListener("submit", (e) => createFormHandler(e))
    // --Add 'more comic info' event listener

})
// --Render Comic Function-- //
const renderComic = function (comic) {
    // ##Change BADGE to a heart icon
    comicCon.innerHTML += `
    <div class="relative m-5">
        <div class="bg-main rounded overflow-hidden shadow">
            <img src="${comic.img_url}" class="w-full h-72 object-cover">
            <div>
                <span class="bg-gray-300 text-xs uppercase font-bold rounded absolute top-0 ml-1 mt-2">BADGE</span> 
            </div>
        </div>
    </div>
    `
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
    .then(comic => renderComic(comic))
    

}
// --'More Comic Details' function 
comicCon.addEventListener("click", e => {
    console.log(e.target)
})