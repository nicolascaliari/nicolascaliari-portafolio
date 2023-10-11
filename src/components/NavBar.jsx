const NavBar = () => {
  return (
    <div className="h-[4.5rem] w-full flex justify-center items-center m-auto rounded-none sm:mt-5 border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75">
      <nav className="flex top-[0.15rem] h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 ">
        <ul className="flex w-[20rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-900 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          <li className="w-1/4 md:w-auto h-3/4 flex items-center justify-center relative">
            <a className="text-white font-[600] text-sm sm:text-lg" href="#inicio">Inicio</a>
          </li>
          <li className="w-1/4 md:w-auto h-3/4 flex items-center justify-center relative">
            <a className="text-white font-[600] text-sm sm:text-lg" href="#proyectos">Proyectos</a>
          </li>
          <li className="w-1/4 md:w-auto h-3/4 flex items-center justify-center relative">
            <a className="text-white font-[600] text-sm sm:text-lg" href="#habilidades">Habilidades</a>
          </li>
          <li className="w-1/4 md:w-auto h-3/4 flex items-center justify-center relative">
            <a className="text-white font-[600] text-sm sm:text-lg" href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}


export default NavBar;