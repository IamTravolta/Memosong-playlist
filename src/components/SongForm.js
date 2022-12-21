import React from "react";

class SongForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            artist: "",
            genre: "",
            rating: "",
        }
    }

    render() {
        const addTitle = (event) => {
            this.setState({
                title: event.target.value
            })
        }

        const addArtist = (event) => {
            this.setState({
                artist: event.target.value
            })
        }
        const addGenre = (event) => {
            this.setState({
                genre: event.target.value
            })
        }
        const addRating = (event) => {
            this.setState({
                rating: event.target.value
            })
        }
        const onSubmit = (event) => {
            event.preventDefault();
            this.props.onSubmit(this.state)
        }

        return (
            <div className="add-song-form">
                <form onSubmit={onSubmit}>
                    <input 
                        className = "form-item"
                        placeholder = "Song Here"
                        type = "text"
                        onInput = {addTitle}
                    />

                    <input 
                        className = "form-item"
                        placeholder = "Artist Name Here"
                        type = "text"
                        onInput = {addArtist}
                    />

                    <select
                        className = "form-item"
                        name = "genre"
                        type = "text"
                        /* id = "sel-val" */
                        onInput = {addGenre}
                    >

                        <option value = "selecter" hidden>Select Genre</option>
                        <option value = "Hip Hop">Hip Hop</option>
                        <option value = "Classical">Classical</option>
                        <option value = "Rock">Jazz</option>
                        <option value = "POP">POP</option>
                        <option value = "R&B">R&B</option>
                    </select>

                    <select
                        className = "form-item"
                        defaultValue = "default"
                        name = "rating"
                        onInput = {addRating}
                    >
                        <option value = "1 Star" hidden>Select Star</option>
                        <option value = "2 Stars">1 star</option>
                        <option value = "2 Stars">2 stars</option>
                        <option value = "3 Stars">3 stars</option>
                        <option value = "4 Stars">4 stars</option>
                        <option value = "5 Stars">5 stars</option>
                    </select>

                    <input 
                        className="addInput" type="submit" value="Add"> 
                        
                    </input>
                </form>
            </div>
        )
    }
}

export default SongForm