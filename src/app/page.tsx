export default function Home() {
  return (
    <div>
      <header>
        <nav className="flex w-full bg-black h-32 items-center">
          <div className="bg-purple-700 text-4xl text-white h-20 w-96 m-4 p-4">Class 5 Home Work</div>
          <div className="flex w-3/5 justify-end items-center">
          <div className="bg-red-700 h-10 w-44 m-4 p-4"></div>
          <div className="bg-yellow-400 h-10 w-44 m-4 p-4"></div>
          <div className="bg-orange-600 h-10 w-44 m-4 p-4"></div>
          </div>       
        </nav>
      </header>

      <div className="flex flex-wrap justify-center mt-8 space-x-4">   
          {/* Row 1 - Three Cards */}
            <div className="bg-green-400 w-1/4 h-80 mb-4"></div>
            <div className="bg-blue-400 w-1/4 h-80 mb-4"></div>
            <div className="bg-purple-400 w-1/4 h-80 mb-4"></div>

          {/* Row 2 - Two Cards */}
            <div className="bg-pink-400 w-1/4 h-80"></div>
            <div className="bg-yellow-400 w-1/4 h-80"></div>
      </div>

       <div>
        <footer className="flex flex-wrap justify-center h-32 mt-8 space-x-4 bg-slate-600">
        <div className="flex w-3/5 justify-center items-center">
        <div className="bg-red-900 font-extrabold text-3xl">@ made by Sarwat Majeed</div>
          <div className="bg-orange-500 h-10 w-44 m-6 p-4"></div>
          <div className="bg-pink-600 h-10 w-44 m-6 p-4"></div>
          <div className="bg-green-700 h-10 w-44 m-6 p-4"></div>
        </div> 
        </footer>
       </div>
      
    </div>
   
  );
}

