
function Filter({changeInputUptoBody}) {

    const handleChangeOption = (e) => {
        changeInputUptoBody(e.target.value)
    }

    return (
        <div className="filter">
            <div className="filter-text">Filter by year</div>
            <select 
                id="year"
                onChange={handleChangeOption}
            >
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
        </div>
    )
}

export default Filter;