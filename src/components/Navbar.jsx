const Navbar = () => {
  return (
    <div className="border border-myRed ">
      <div className="flex justify-between items-center lg:px-5">
        <div>
          <p className="text-4xl font-lora italic font-extrabold ml-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Rajib Das
          </p>
        </div>

        <nav className="hidden lg:flex gap-5">
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
