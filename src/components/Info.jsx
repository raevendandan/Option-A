export function Info() {
  return (
    <div className="mt-1">
      <h2 className=" font-bold pl-12 text-[25px]">
        innocence - daniel caesar
      </h2> 

      <div className="flex items-center justify-between mt-3">
        
        <div className="flex items-center gap-3 pl-12 text-[16px]">
           <button className="w-10 h-10 rounded-full overflow-hidden border border-neutral-700 hover:border-neutral-500 transition">
  <img
    src="/bill.jpg"
    alt="Profile"
    className="w-full h-full object-cover"
  />
</button>
          <div>
            <p className="text[14px] font-medium">bill</p>
            <p className="text-[12px] text-neutral-400">3.24k subscribers</p>
          </div>
          <button className="ml-4 bg-white text-black px-6 py-2 rounded-full text-[12px] font-bold">
            Subscribe
          </button>
        </div>


<div className="flex items-center gap-2">
  

<div className="flex overflow-hidden rounded-full bg-neutral-800">


  <button className="flex items-center gap-2 px-4 py-2 hover:bg-neutral-700 border-r border-neutral-700">
    <img
      src="/likebutton.png"
      alt="Like"
      className="w-5 h-5"
    />
    <span className="text-[14px] font-medium">120K</span>
  </button>

  <button className="px-4 py-2 hover:bg-neutral-700">
    <img
      src="/dislikebutton.png"
      alt="Dislike"
      className="w-5 h-5"
    />
  </button>

</div>



<button className="flex items-center gap-2 bg-neutral-800 px-4 py-2 rounded-full hover:bg-neutral-700">
    
  <span className="text-[14px] font-medium">Share</span>
</button>

<button className="flex items-center gap-2 bg-neutral-800 px-4 py-2 rounded-full hover:bg-neutral-700">

  <span className="text-[14px] font-medium">Download</span>
</button>




<button className="flex items-center gap-2 bg-neutral-800 px-4 py-2 rounded-full hover:bg-neutral-700">
  <img
    src="/more.png"  
    alt="More"
    className="w-6 h-6"s
  />
</button>
</div>


      </div>

<div className="mt-4 ml-12 bg-neutral-800 rounded-xl p-4 text-[14px]">


  <p className="font-medium">
    6M views <span className="text-neutral-400"> 1 year ago</span>
  </p>


  <p className="mt-1 text-neutral-300 font-light pb-4">
    he mentioned in an interview that this was cut off the album NEVER ENOUGH. this is the song in full, there was a portion released a while ago titled "sometimes im sad but thats alright"
  <span className="text-neutral-400 cursor-pointer hover:text-neutral-200">
      …more
    </span>

  </p>


</div>

    </div>
  );
}


