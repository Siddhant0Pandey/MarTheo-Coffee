function NavSection() {
  return (
    <nav className="flex justify-between h-[3rem] items-center px-2 ">
      <div className="nav-bar flex items-center gap-8">
        <h1 className="font-bold">MartheoCoffee</h1>
        <h4 className="font-thin">
          <a
            href="#"
            className="no-underline text-secondary hover:text-primary"
          >
            Personal
          </a>
        </h4>
        <h4 className="font-thin">
          <a
            href="#"
            className="no-underline text-secondary hover:text-primary"
          >
            Business
          </a>
        </h4>
      </div>
      <div className="nav-features flex gap-4 items-center">
        <i className="fa-solid fa-magnifying-glass p-1 hover:p-2"></i>
        <div className="branch-id flex flex-col items-center p-2">
          <label htmlFor="branch" className="text-sm">
            My Branch
          </label>
          <select
            name="branch"
            id="branch"
            className="text-sm text-primary border-none"
          >
            <option value="Kathmandu">Kathmandu</option>
            <option value="Butwal">Butwal</option>
            <option value="Pokhara">Pokhara</option>
          </select>
        </div>
        <button className="online-btn p-2 border border-primary rounded-1 bg-white text-primary  hover:bg-primary hover:text-white hover:rounded-sm hover:border-white">
          Online Banking
        </button>
        <button className="menu-btn p-2 rounded-sm border border-primary text-white bg-primary hover:bg-white hover:text-primary hover:rounded-sm hover:border-primary">
          <i className="fa-solid fa-bars mr-1"></i>Menu
        </button>
      </div>
    </nav>
  );
}

export default NavSection;
