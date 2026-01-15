import { useRef } from "react";

export function Recommend() {
  const scrollRef = useRef(null);

  const filters = [
    "All",
    "From your search",
    "From 4K Video ULTRA HD",
    "Nature",
    "Wildlife",
    "HDR",
  ];  

  const videos = [
    {
      title: "Who Knows",
      channel: "Daniel Caesar",
      views: "16M views • 3 months ago",
      img: "/who.jpg",
    },

    
    {
      title: "Burnout",
      channel: "Sugarfree",
      views: "500k views • 3 months ago",
      img: "/burn.jpg",
    },

    {
      title: "Back to friends",
      channel: "sombr",
      views: "13M views • 3 months ago",
      img: "/back.jpg",
    },
     {
      title: "Kalapastangan",
      channel: "fitterkarma",
      views: "1.5M views • 5 days ago",
      img: "/fitter1.jpg",
    },

    {
      title: "Teka lang",
      channel: "EmmanJimenezTV",
      views: "60M views • 6 years ago",
      img: "/teka.jpg",
    },


    {
      title: "Back to friends",
      channel: "sombr",
      views: "13M views • 3 months ago",
      img: "/back.jpg",
    },
    {
      title: "Pwede ba",
      channel: "Lola Amour",
      views: "1.5M views • 5 days ago",
      img: "/pwede ba.jpg",
    },

    {
      title: "Teka lang",
      channel: "EmmanJimenezTV",
      views: "60M views • 6 years ago",
      img: "/teka.jpg",
    },
   
    {
      title: "Take All the Love",
      channel: "Arthur Nery",
      views: "1.5M views • 3 moths ago",
      img: "/take.jpg",
    },
 
  ];

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="space-y-4">
 
      <div className="relative">
       
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto whitespace-nowrap pb-1 no-scrollbar pr-10"
        >
          {filters.map((filter, i) => (
            <button
              key={i}
              className={`px-5 py-1.5 rounded-full text-sm transition
                ${
                  filter === "All"
                    ? "bg-white text-black"
                    : "bg-neutral-800 hover:bg-neutral-700"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

   
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-1.5 rounded-full
                     bg-black hover:bg-neutral-800 transition"
          aria-label="Scroll filters"
        >
          ❯
        </button>
      </div>


      {videos.map((video, i) => (
        <div key={i} className="flex gap-3">
          <img
            src={video.img}
            alt={video.title}
            className="w-50 h-25 object-cover rounded-lg"
          />

          <div>
            <p className="text-sm font-medium leading-tight">
              {video.title}
            </p>
            <p className="text-[11px] text-neutral-400 mt-1">
              {video.channel}
            </p>
            <p className="text-[10px] text-neutral-400">
              {video.views}
            </p>
          </div>
          
        </div>
      ))}
    </div>
  );
}
