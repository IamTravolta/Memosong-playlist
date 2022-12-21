import React from "react";
import SongForm from "./SongForm"
import SongList from "./SongList"

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

    render() {
        return (
            <div className="overview">
                <SongForm onSubmit={this.addSong}/>
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