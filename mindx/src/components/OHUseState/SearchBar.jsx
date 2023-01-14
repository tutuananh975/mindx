
function SearchBar({onInput}) {

    return (
        <input 
            placeholder="Search" 
            onChange={(e) => onInput(e.target.value)}
        />
    )
}

export default SearchBar;