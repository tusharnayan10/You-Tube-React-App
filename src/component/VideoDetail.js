import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return (
            <div className="ui segment">
                <div className="ui active dimmer">
                    <div className="ui loader"></div>
                </div>
            </div>
        );
    }
    // console.log(video)
    const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className="ui embed">
                <iframe width="560" height="315" src={videoSRC} title="YouTube video player" />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>


    );
}

export default VideoDetail;