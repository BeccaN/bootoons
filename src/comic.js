class Comic {
  // constructor
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.description = data.description
    this.img_url = data.img_url
    this.category = data.comic_category
    Comic.all.push(this)
  }

  //render comic function
  renderComic() {
    return `
    <div id="comic-card" data-id="${this.id}" class="relative m-5">
        <div class="bg-main rounded overflow-hidden shadow">
            <img src="${this.img_url}" class="w-full h-sm object-cover">
        </div>
    </div>
    `;
  }

  // more comic info function
  renderMoreInfo(moreComicImg, moreComicTitle, moreComicCat, moreComicDesc) {
    moreComicImg.innerHTML = `<img src="${this.img_url}" class="w-full h-xl object-contain">`
    moreComicTitle.innerText = `"${this.title.toLowerCase()}"`
    moreComicCat.innerText = this.category
    moreComicDesc.innerText = this.description.toLowerCase()
  }

  // category filter function
  static renderWithCatFilter(category) {
    let filterComics = Comic.all.filter(comic => comic.category == catFilter.value)
    return filterComics
  }

  // return random comic static function
  static randomComic() {
    var randomItem = Comic.all[Math.floor(Math.random() * Comic.all.length)]
    randomItem.renderMoreInfo(moreComicImg, moreComicTitle, moreComicCat, moreComicDesc) 
  }
}

// all comics
Comic.all = [];