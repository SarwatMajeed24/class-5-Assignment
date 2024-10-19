
export default function Home() {
  return (
    <div>
      <header>
        <nav className="flex flex-wrap w-full bg-black h-auto sm:h-32 items-center justify-between">
          <div className="bg-purple-700 text-2xl sm:text-4xl text-white h-20 w-full sm:w-96 m-4 p-4 text-center">Class 5 Home Work</div>

          {/* Small divs in Navbar - they are stacked on small screens */}
          <div className="flex w-full sm:w-3/5 sm:justify-end items-center flex-wrap sm:flex-nowrap">
            <div className="bg-red-700 h-10 w-32 sm:w-44 m-2 p-4"></div>
            <div className="bg-yellow-400 h-10 w-32 sm:w-44 m-2 p-4"></div>
            <div className="bg-orange-600 h-10 w-32 sm:w-44 m-2 p-4"></div>
          </div>
        </nav>
      </header>

      <div className="flex flex-wrap justify-center mt-8 gap-4">   
        {/* Row 1 - Three Cards */}
        <div className="bg-green-400 w-full sm:w-1/2 lg:w-1/4 h-80 mb-4"></div>
        <div className="bg-blue-400 w-full sm:w-1/2 lg:w-1/4 h-80 mb-4"></div>
        <div className="bg-purple-400 w-full sm:w-1/2 lg:w-1/4 h-80 mb-4"></div>
        </div>
        {/* Row 2 - Two Cards */}
        <div className="flex flex-wrap justify-center mt-8 gap-4"> 
        <div className="bg-pink-400 w-full sm:w-1/2 lg:w-1/4 h-80"></div>
        <div className="bg-yellow-400 w-full sm:w-1/2 lg:w-1/4 h-80"></div>
      </div>

      <footer className="flex flex-wrap justify-center h-32 mt-8 gap-4 bg-slate-600">
        <div className="flex w-full sm:w-3/5 justify-center items-center flex-wrap">
          <div className="bg-red-900 font-extrabold text-lg sm:text-3xl text-center">@ Made by: Sarwat Majeed</div>
          <div className="bg-orange-500 h-10 w-32 sm:w-44 m-2 p-4"></div>
          <div className="bg-pink-600 h-10 w-32 sm:w-44 m-2 p-4"></div>
          <div className="bg-green-700 h-10 w-32 sm:w-44 m-2 p-4"></div>
        </div>
      </footer>
    </div>
  );
}
