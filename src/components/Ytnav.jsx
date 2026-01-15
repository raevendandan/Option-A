function Icon({ path }) {
  return (
    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  );
}

export function Ytnav() {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-black flex items-center justify-between px-6 border-b border-neutral-800 z-100">
 
      <div className="flex items-center">
        <Icon path="M3 6h18M3 12h18M3 18h18" />

       

       <img
          src="/youtlogo.png"
          alt="My Logo"
          className="h-6 w-auto cursor-pointer pl-6"
        />
      </div>

      
      <div className="flex flex-1 max-w-xl mx-6">
        <input
          className="flex-1 bg-neutral-900 border border-neutral-700 rounded-l-full px-3 text-sm py-2 outline-none placeholder:opacity-50"
          placeholder="Search"
        />
       <button className="bg-neutral-800 px-2 rounded-r-full flex items-center justify-center hover:bg-neutral-700 transition">
  <img
    src="/search.png"
    alt="Search"
    className="w-6 :h-6" 
  />
</button>

  <button className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition ml-2 px-3">
    <img
      src="/micro.png"
      alt="Voice Search"
      className="w-6 h-6  "
    />
  </button>

      </div>

      


      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-5  py-2  bg-neutral-800 rounded-full hover:bg-neutral-700 transition font-bold"
>
  <span className="text-sm">Create</span>
</button>


  <button className="relative p-2 rounded-full bg-neutral-800 hover:bg-neutral 700 transition">
    <img
      src="/notification.png"
      alt="Notifications"
      className="w-5 h-5"
    />
  </button>

       <button className="w-10 h-10 rounded-full overflow-hidden border border-neutral-700 hover:border-neutral-500 transition">
  <img
    src="/rae.jpg"
    alt="Profile"
    className="w-full h-full object-cover"
  />
</button>

      </div>
    </header>
  );
}
