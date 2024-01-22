function NavSection() {
  return (
    <nav>
      <div className="nav-bar">
        <h1>Fortifi Bank</h1>
        <h4>
          <a href="#">Personal</a>
        </h4>
        <h4>
          <a href="#">Business</a>
        </h4>
      </div>
      <div className="nav-features">
        <i className="fa-solid fa-magnifying-glass"></i>
        <div className="branch-id">
          <label htmlFor="branch">My Branch</label>
          <select name="branch" id="branch">
            <option value="Kathmandu">Kathmandu</option>
            <option value="Butwal">Butwal</option>
            <option value="Pokhara">Pokhara</option>
          </select>
        </div>
        <button className="online-btn">Online Banking</button>
        <button className="menu-btn">
          <i className="fa-solid fa-bars"></i>Menu
        </button>
      </div>
    </nav>
  );
}

export default NavSection;
