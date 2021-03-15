// MANTRA: When some event happens, I want to make what kind of fetch and then manipulate the DOM in what way?
const mainUrl = "http://127.0.0.1:3000/"
const rootEl = document.getElementById("root")
const comicCon = document.getElementById("comic-container")
const createComicForm = document.getElementById("create-comic-form")

// Loading Page w/ Comics
document.addEventListener('DOMContentLoaded', () => {
    fetch(mainUrl + "comics")
        .then ((res) => res.json())
        .then ((data) => renderComics(data))
    //Add submit event listener to 'New Comic Form'
    createComicForm.addEventListener("submit", (e) => 
    createFormHandler(e))
})
//Function on how to render each comic
const renderComics = function (comics) {
    // Change BADGE to a heart icon
    comics.forEach((comic) => {
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
    })
}
// Function that handles the data submitted in the 'New Comic Form' and how its being POSTed
const createFormHandler = function (e) {
    e.preventDefault()
    const titleInput = e.target.comic_title.value
    const descInput = e.target.comic_desc.value
    const imageInput = e.target.comic_img.value
    const categoryId = parseInt(e.target.categories.value)
    postFetch(titleInput, descInput, imageInput, categoryId)
}
// Post fetch function on 'New Comic Form' 
const postFetch = function (title, description, img_url, category_id) {
    const comicData = {title, description, img_url, category_id}
    
    fetch(mainUrl + "comics", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(comicData)
    })
    .then(resp => resp.json())
    // .then(data => {
    //     const newComicMarkup = `
    //     <div class="m-2">
    //         <div class="relative">
    //             <div class="bg-white w-full border-4 rounded overflow-hidden shadow">
    //                 <img src="${data.img_url}" class="w-full">
    //                 <h1 class="flex justify-center">Title: ${data.title}</h1>
    //                 <h2>Category: ${data.comic_category}</h2>
    //                 <div>
    //                     <span class="bg-gray-300 text-xs uppercase font-bold rounded absolute top-0 ml-1 mt-2">BADGE</span> 
    //                 </div>
    //             </div>
    //         </div
    //     </div>
    //     `
    //     comicCon.innerHTML += newComicMarkup
    // })
    .then(location.reload())
}
// 'More Comic Details' function 
comicCon.addEventListener("click", e => {
    console.log(e.target)
})