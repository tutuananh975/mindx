
function SearchBar({ value, onChange}) {

    return (

        <input
            type="text"
            placeholder="Enter your task here..."
            value={value}
            onChange={onChange}
            style={{
                border: 'none',
                borderBottom: '1px solid #333',
                fontSize: '24px',
                transform: "translateX(5px)",
                width: '100%',
                outline: 'none'
            }}
        />
    )
}

export default SearchBar