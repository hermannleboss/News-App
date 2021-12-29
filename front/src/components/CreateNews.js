function CreateNews() {
    return (
        <div>
            <h2>Create News</h2>

            <form action="">
                <div><label htmlFor="">title</label><input type="text"/></div>
                <div><label htmlFor="">description</label><input type="text"/></div>
                <div><label htmlFor="">imageUrl</label><input type="text"/></div>
                <button>Create News</button>
            </form>
        </div>
    )
}

export default CreateNews