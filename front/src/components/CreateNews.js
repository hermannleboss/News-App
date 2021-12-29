function CreateNews() {
    return (
        <div>
            <h2>Create News</h2>

            <form action="">
                <div className="relative mb-4">
                    <label htmlFor="title" className="leading-7 text-gray-300">Title</label>
                    <input type="text" id="title" name="title"
                           className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="description" className="leading-7 text-gray-300">Description</label>
                    <textarea id="description" name="description"
                              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
                <div className="relative mb-4">
                    <label htmlFor="imageUrl" className="leading-7 text-gray-300">ImageUrl</label>
                    <input type="imageUrl" id="imageUrl" name="imageUrl"
                           className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <button
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Create News
                </button>
            </form>
        </div>
    )
}

export default CreateNews