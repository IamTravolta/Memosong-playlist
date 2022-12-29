import React from "react"

function Filter(props) {
    return(
        <div className="song-filter">
            <form>
                <select className="filter-box" defaultValue="default" name="genre-filter" onChange={props.FilterGenre}>
                    <option value="default" disabled hidden>
                        Filter by genre
                    </option>
                    <option value="selecter">Select-genre</option>
                    <option value="Hip Hop">Hip Hop</option>
                    <option value="Classical">Classical</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Pop">POP</option>
                    <option value="R&B">R&B</option>
                </select>
                <select className="filter-box" defaultValue="default" name="rating-filter" onChange={props.FilterRating}>
                    <option value="default" disabled hidden>
                        Filter by rating
                    </option>
                    <option value="1 Star">1 Star</option>
                    <option value="2 Stars">2 Stars</option>
                    <option value="3 Stars">3 Stars</option>
                    <option value="4 Stars">4 Stars</option>
                    <option value="5 Stars">5 Stars</option>
                </select>

                {props.hasFilter && <button className="fil-btn" onClick={props.resetFilter}>reset filter</button>}
            </form>
        </div>
    )
}

export default Filter