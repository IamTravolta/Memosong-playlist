import React from "react"

function About(props) {
    return (
        <div className="container">
            <div className="imager">
                <img src={process.env.PUBLIC_URL + "./memoplayer.svg"} />
            </div>
            <div className="texter">
                    <p>I am so excited to finally have found an application that meets all of my music streaming needs: MEMOSONG – PLAYLISTER. This web-based application is a godsend for avid music fans like myself who often find themselves searching for their favorite tunes on multiple streaming platforms.</p>
                    <p>MEMOSONG – PLAYLISTER allows me to transfer my playlists from one platform to another with ease. I’m also able to easily back up my playlists so that I can access them even if the streaming site I initially saved them on goes down. Additionally, the app has a variety of features that make it simple and easy to use; I especially love how quickly and seamlessly I can add new songs or rearrange my playlists.</p>
                    <p>Overall, having MEMOSONG – PLAYLISTER in my arsenal of music tools is such a great feeling!</p>
            </div>
        </div> 
    )
}
export default About;