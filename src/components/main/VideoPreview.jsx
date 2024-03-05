import React from 'react';

function VideoPreview() {
    return (
        <div 
        className="w-full mt-[-5rem]"
        style={{ width: '100%', height: '100vh', maxWidth: '100%', overflow: 'hidden' }}>
            <video
                autoPlay
                muted
                loop
                id="myVideo"
                style={{
                    width: '100%',
                    height: '100%', // Set the height to 100% to fill the container
                    objectFit: 'cover', // Crop the video to cover the container
                }}
            >
                <source src=
                // "https://youtu.be/yr2gCqTM4vs"
                "https://videos-cloudfront.jwpsrv.com/65e73a70_d6f76cddd95921a64d05c1584a4be323dd3bfaf0/content/conversions/X1fXSmBz/videos/gfeVj2bG-33591162.mp4" 
                type="video/mp4" 
                />
            </video>
        </div>
    );
}

export default VideoPreview;
