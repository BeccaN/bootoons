const rootEl = document.getElementById("root")
const comicCon = document.getElementById("comic-container")

fetch ("http://127.0.0.1:3000/comics")
    .then ((res) => res.json())
    .then ((data) => renderComics(data))

const renderComics = function (comics) {
    console.log(comics)
    // Change BADGE to a heart icon
    comics.forEach((comic) => {
        comicCon.innerHTML += `
        <div class="p-2">
            <div class="relative">
                <div class="bg-white w-1/4 border-4 rounded overflow-hidden shadow">
                    <img src="${comic.img_url}" class="w-full">
                    <h1 class="flex justify-center">Title: ${comic.title}</h1>
                    <div>
                        <span class="bg-gray-300 text-xs uppercase font-bold rounded absolute top-0 ml-1 mt-2">BADGE</span> 
                    </div>
                </div>
            </div
        </div>
        `
    })
}

// div container for new comic form
// div container for display more data on selected comic

// pt 2 Cernan's videos
// create Comic JS Object?
// wire new comic form
// wire more comic info display
// wire a 'likes' badge/button 