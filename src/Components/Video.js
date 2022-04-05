import React from "react";
import "./Video.scss";
const Video = () => {
  return (
    <section>
      <h2 className=" text-4xl h2">ვიდეო მასალა</h2>


      <div className="video-div">
        <div className="videoframe">

        <h3 className="text-2xl"> კანალიზაციის მილების გაწმენდა მაღალი ჭავლის სპეც-დანადგარით 40-200 მმ დიამეტრამდე </h3>
        <iframe
          className="video"

          src="https://www.youtube.com/embed/XiEgDsB5C80"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        ></iframe>
      </div>
    </div>


    </section>

/* <section className='how-it-works-section'>
    <h2 className=" text-4xl h2">ვიდეო მასალა</h2>
 
    
    <div className="relative bg-gray-800" style={{marginTop:'50px'}}>
      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
      <iframe
          className="w-full h-full object-cover"

          src="https://www.youtube.com/embed/XiEgDsB5C80"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">ჰიდროდინამიკური  საწმენდი მანქანა</p>
          <p className="mt-3 text-lg text-gray-300">
          კანალიზაციის ქსელის შეკეთება-გაწმენდა მსუბუქი, კომპაქტური და მოხერხებული მანქანით: იდეალურია კანალიზაციის მილებსა და სველ ცერტილებში საცობების გასაწმენდად  
          </p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href="tel:+995591276176"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
              >
                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
</svg>    დარეკეთ ნომერზე
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section> */




  );
};

export default Video;
