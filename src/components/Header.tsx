
const Header = () => {
  return (
    <>
    <nav className='flex flex-row justify-between items-center px-[100px] py-4'>
<img src="../public/logo.png" alt="Logo" className=" w-[107px] h-4 " />
      <ul className='flex gap-6 justify-end flex-1 '>
        <li>Home</li>
        <li>Features</li>
        <li>Community</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
<button className="flex items-center gap-2 bg-[#4CAF4F] text-white ml-6 py-2 px-5">
  Register Now
  <img src="../public/right.png" alt="right arrow" className="w-2.85 h-2.85" />
</button>

    </nav>
    </>
  );
};

export default Header;
