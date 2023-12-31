import logo from "../assets/rajib_das.png";
const Navbar = () => {
  return (
    <div className="border border-myRed ">
      <div className="flex justify-between items-center lg:px-5">
        <div className="font-lora">
          <img width={150} src={logo} alt="" />
        </div>

        <nav className="flex gap-5">
          <a
            href=""
            className="text-xl font-semibold hover:text-myRed transition-transform duration-200"
          >
            Home
          </a>
          <a
            href=""
            className="text-xl font-semibold hover:text-myRed transition-transform duration-200"
          >
            About
          </a>
          <a
            href=""
            className="text-xl font-semibold hover:text-myRed transition-transform duration-200"
          >
            Eductation
          </a>
          <a
            href=""
            className="text-xl font-semibold hover:text-myRed transition-transform duration-200"
          >
            Skills
          </a>
          <a
            href=""
            className="text-xl font-semibold hover:text-myRed transition-transform duration-200"
          >
            Services
          </a>
          <a
            href=""
            className="text-xl font-semibold hover:text-myRed transition-transform duration-200"
          >
            Portfolio
          </a>
          <a
            href=""
            className="text-xl font-semibold hover:text-myRed transition-transform duration-200"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
