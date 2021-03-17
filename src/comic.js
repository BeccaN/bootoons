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
            <img src="${this.img_url}" class="w-full h-72 object-cover">
        </div>
    </div>
    `;
  }

  // more comic info function
  renderMoreInfo(moreComicImg, moreComicTitle, moreComicCat, moreComicDesc) {
    moreComicImg.innerHTML = `<img src="${this.img_url}" class="object-cover">`
    moreComicTitle.innerText = this.title
    moreComicCat.innerText = this.category
    moreComicDesc.innerText = this.description
  }

  // category filter function
  renderWithCatFilter() {
    // when user types in category into filter and hits enter => 
    // return this if this.category === what is typed into category filter
  }

  // return random comic static function
}

// all comics
Comic.all = [];

