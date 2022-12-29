import React from "react";
import SongForm from "./SongForm"
import SongList from "./SongList"
import Filter from "./Filter"

class SongOverview extends React.Component {

    constructor() {
        super()
        this.state = {
            songs: [
                {
                    title: "United in grief",
                    artist: "Kendrick Lamar",
                    genre: "Hip Hop",
                    rating: "3 Stars"
                },
                {
                    title: "Thriller",
                    artist: "Michael Jackson",
                    genre: "Pop",
                    rating: "5 Stars"
                },
                {
                    title: "Blue in green",
                    artist: "Miles Davis",
                    genre: "Jazz",
                    rating: "4 Stars"
                },
            ],
            filteredSongs: undefined
        }
    }

    addSong = (song) => {
        this.setState({
            songs: [
                ...this.state.songs,{
                    id: song.id,
                    title: song.title,
                    artist: song.artist,
                    genre: song.genre,
                    rating: song.rating,
                }
            ]
        })
   }
   deleteSong = (id) => {
        this.setState((prevState) => {
            const songs = prevState.songs
            const newList = songs.filter((song, index) => index !==id)
            return {
                songs: newList
            }
        })
    }

    FilterGenre = (event) => {
        this.setState((prevState) => {
            const songs = prevState.songs
            const genre = event.target.value
            const filteredList = songs.filter((songs) => songs.genre === genre)
            return {
                filteredSongs: filteredList
            }
        })
    }

    FilterRating = (event) => {
        this.setState((prevState) => {
            const songs = prevState.songs
            const rating = event.target.value
            const filteredList = songs.filter((songs) => songs.rating === rating)
            return{
                filteredSongs: filteredList
            }
        })
    }

    resetFilter = () => {
        this.setState({
            filteredSongs: undefined
        })
    }

    render() {
        return (
            <div className="overview">
                <h2>Type in your song and click the add button to queue song to list below</h2>



                <SongForm onSubmit={this.addSong}/>
                <Filter 
                songs={this.state.songs}
                FilterGenre={this.FilterGenre}
                FilterRating={this.FilterRating}
                hasFilter={!!this.state.filteredSongs}
                resetFilter={this.resetFilter}
                />
                <table className="song-table">
                    <tbody>
                        <tr className="song-header">  
                            <th className="Song">Song</th>
                            <th className="Artist">Artist</th>
                            <th className="Genre">Genre</th>
                            <th className="Rating">Rating</th>
                        </tr>
                    </tbody>
                
                    <SongList 
                        className="song-list"
                        songs={this.state.filteredSongs ?? this.state.songs}
                        handleClick={this.deleteSong}
                    />

                </table>
            </div>
            );
        }
    }

export default SongOverview;