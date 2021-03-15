<div>
    <label class="block text-sm font-medium text-primary">
    Comic Image
    </label>
    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
    <div class="space-y-1 text-center">
        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div class="flex text-sm text-gray-600">
        <label for="comic_img" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
            <span>Upload a file</span>
            <input id="comic_img" name="comic_img" type="file" class="sr-only">
        </label>
        <p class="pl-1">or drag and drop</p>
        </div>
        <p class="text-xs text-gray-500">
        PNG, JPG, GIF up to 10MB
        </p>
    </div>
    </div>
</div>




####

    <div id="root">
        <!-- nav start -->
    
        <h1 class="text-primary font-body text-7xl">BOOTOONS</h1>

        <!-- nav end -->

        <div class="grid grid-cols-3 h-screen flex">

            <!-- form start -->
            <div class="">
                <form action="#" method="POST" id="create-comic-form">
                    <div class="border-4 m-4 rounded p-2">
                            <h3>New Comic!</h3>
                            <div class="">
                                <div class="">
                                    <label for="comic_title" class="text-primary">
                                    Title
                                    </label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                    <input type="text" name="comic_title" id="comic_title" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="New Comic Title">
                                    </div>
                                </div>
                            </div>

                            <div>
                            <label for="comic_desc" class="text-primary">
                                Description
                            </label>
                            <div class="mt-1">
                                <textarea id="comic_desc" name="comic_desc" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Brief description of the new comic."></textarea>
                            </div>
                            </div>
                            <!-- categories start -->
                            <div class="shadow-sm">
                                <label for="categories">
                                    Category
                                </label>
                                <select id="categories" name="categories">
                                    <option value="1">Humor</option>
                                    <option value="2">Scary</option>
                                    <option value="3">Romance</option>
                                    <option value="4">Slice of Life</option>
                                    <option value="5">Animal</option>
                                    <option value="6">Cute</option>
                                    <option value="7">Action</option>
                                    <option value="8">Mystery</option>
                                </select>
                            </div>
                            <!-- categories end -->
                            <div class="grid grid-cols-3 gap-6">
                                <div class="col-span-3 sm:col-span-2">
                                <label for="comic_img" class="text-primary">
                                    Image URL:
                                </label>
                                <div class="mt-1 flex rounded-md shadow-sm">
                                    <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                        http://
                                    </span>
                                    <input type="text" name="comic_img" id="comic_img" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.urlofnewcomic.com">
                                </div>
                                </div>
                            </div>

                            <div class="">
                                <button type="submit" class="">
                                Save
                                </button>
                            </div>
                    </div>
                </form>
            </div>
            <!-- form end -->

            <!-- comics start -->
            <div id="comic-container" class="m-4 grid lg:grid-cols-2">

            </div>
            <!-- comics end -->

            <!-- comic more info start -->
            <div class="border-4 m-4 rounded">

            </div>
            <!-- comic more info end -->
        </div>

    </div>


## Guide individual comic container?
<div class="p-8 shadow text-center rounded my-10 bg-white" v-for="i in 50">
    EXAMPLE INDIVIDUAL COMIC CONTAINER
</div>