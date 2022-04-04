import React from "react";
import "./Video.scss";
const Video = () => {
  return (
    <section>
      <h2 className=" text-4xl h2">ვიდეო მასალა</h2>
      <div className="video-div">
        <iframe
          className="video"

          src="https://www.youtube.com/embed/XiEgDsB5C80"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default Video;
