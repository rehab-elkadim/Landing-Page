
const Footer = () => {
    return (
        <div className='bg-[#263238] text-white py-[62px] px-[165px] sm:px-8 md:px-16'>
            <div className='flex flex-col gap-[55px] md:flex-row md:justify-between'>

                <div className='flex flex-col gap-[38px] w-full md:w-[250px]'>
                    
                    <div className='flex items-center gap-[10px]'>
                        <svg className='h-[32px] w-[32px] text-[#4CAF4F]' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 0L0 8L0 24L16 32L32 24L32 8L16 0ZM16 3.69L28.16 9.84L16 16.03L3.84 9.84L16 3.69ZM2.61 11.23L14.77 17.42L14.77 28.31L2.61 22.12L2.61 11.23ZM17.23 28.31L17.23 17.42L29.39 11.23L29.39 22.12L17.23 28.31Z" fill="currentColor"/>
                        </svg>
                        <span className='text-white text-[28.16px] font-bold'>Nextcent</span>
                    </div>

                    {/* Copyright Text */}
                    <div className='text-[#F5F7FA] text-[14px] font-normal leading-5'>
                        <p>Copyright &copy; 2020 Landify UI Kit.</p>
                        <p>All rights reserved</p>
                    </div>

                    {/* Social Icons (Inlined) */}
                    <div className='flex gap-[16px]'>
                        
                        <a href="#" className="w-[32px] h-[32px] rounded-full bg-[#39444B] flex items-center justify-center transition-colors duration-300 hover:bg-[#4CAF4F]">
                            <svg className="w-[16px] h-[16px] fill-[#F5F7FA]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" opacity="0"/><path d="M12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm6.42,3.32a.4.4,0,0,1,.4.4V7.5a.4.4,0,0,1-.4.4H16.89a.4.4,0,0,1-.4-.4V5.72a.4.4,0,0,1,.4-.4ZM12,6.86a5.14,5.14,0,1,0,5.14,5.14A5.139,5.139,0,0,0,12,6.86ZM12,15.86a3.86,3.86,0,1,1,3.86-3.86A3.864,3.864,0,0,1,12,15.86Z"/></svg>
                        </a>
                        
                        <a href="#" className="w-[32px] h-[32px] rounded-full bg-[#39444B] flex items-center justify-center transition-colors duration-300 hover:bg-[#4CAF4F]">
                            <div className="w-[16px] h-[16px] rounded-full border-2 border-[#F5F7FA]"></div>
                        </a>
                        
                        <a href="#" className="w-[32px] h-[32px] rounded-full bg-[#39444B] flex items-center justify-center transition-colors duration-300 hover:bg-[#4CAF4F]">
                            <svg className="w-[16px] h-[16px] fill-[#F5F7FA]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" opacity="0"/><path d="M22,5.82a8.77,8.77,0,0,1-2.31.63A4.39,4.39,0,0,0,21.57,4a8.73,8.73,0,0,1-2.57,1,4.36,4.36,0,0,0-7.44,3.92,12.33,12.33,0,0,1-9-4.57,4.36,4.36,0,0,0,1.35,5.83,4.3,4.3,0,0,1-2-.55c0,0-.02,0-.02,0a4.37,4.37,0,0,0,3.5,4.3,4.42,4.42,0,0,1-1.95.07,4.36,4.36,0,0,0,4.08,3.03A8.7,8.7,0,0,1,3,19.4a12.32,12.32,0,0,0,16.59-8.49c0-.13,0-.26,0-.39A8.73,8.73,0,0,0,22,5.82Z"/></svg>
                        </a>
                        
                        <a href="#" className="w-[32px] h-[32px] rounded-full bg-[#39444B] flex items-center justify-center transition-colors duration-300 hover:bg-[#4CAF4F]">
                            <svg className="w-[16px] h-[16px] fill-[#F5F7FA]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" opacity="0"/><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4.87,11.23a.7.7,0,0,1-.53.53c-1.2.32-6.29.32-6.29.32s-5.09,0-6.29-.32a.7.7,0,0,1-.53-.53.7.7,0,0,1-.13-.49V10.7a.7.7,0,0,1,.13-.49.7.7,0,0,1,.53-.53c1.2-.32,6.29-.32,6.29-.32s5.09,0,6.29.32a.7.7,0,0,1,.53.53.7.7,0,0,1,.13.49v2.04A.7.7,0,0,1,16.87,13.23ZM10.59,10.28,14,12l-3.41,1.72Z"/></svg>
                        </a>
                    </div>

                </div>

                {/* Column 2: Company Links */}
                <div className='flex flex-col gap-[24px] w-full mt-8 md:mt-0 md:w-[150px]'>
                    <h5 className='text-white text-[20px] font-semibold leading-[28px]'>Company</h5>
                    <ul className='flex flex-col gap-[12px]'>
                        <li>
                            <a href="#" className='text-sm text-[#F5F7FA] font-normal transition-colors duration-200 hover:text-[#4CAF4F]'>About us</a>
                        </li>
                        <li>
                            <a href="#" className='text-sm text-[#F5F7FA] font-normal transition-colors duration-200 hover:text-[#4CAF4F]'>Blog</a>
                        </li>
                        <li>
                            <a href="#" className='text-sm text-[#F5F7FA] font-normal transition-colors duration-200 hover:text-[#4CAF4F]'>Contact us</a>
                        </li>
                        <li>
                            <a href="#" className='text-sm text-[#F5F7FA] font-normal transition-colors duration-200 hover:text-[#4CAF4F]'>Pricing</a>
                        </li>
                        <li>
                            <a href="#" className='text-sm text-[#F5F7FA] font-normal transition-colors duration-200 hover:text-[#4CAF4F]'>Testimonials</a>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Support Links */}
                <div className='flex flex-col gap-[24px] w-full mt-8 md:mt-0 md:w-[150px]'>
                    <h5 className='text-white text-[20px] font-semibold leading-[28px]'>Support</h5>
                    <ul className='flex flex-col gap-[12px]'>
                        <li>
                            <a href="#" className='text-sm text-[#F5F7FA] font-normal transition-colors duration-200 hover:text-[#4CAF4F]'>Help center</a>
                        </li>
                        <li>
                            <a href="#" className='text-sm text-[#F5F7FA] font-normal transition-colors duration-200 hover:text-[#4CAF4F]'>Terms of service</a>
                        </li>
                        <li>
                            <a href="#" className='text-sm text-[#F5F7FA] font-normal transition-colors duration-200 hover:text-[#4CAF4F]'>Legal</a>
                        </li>
                        <li>
                            <a href="#" className='text-sm text-[#F5F7FA] font-normal transition-colors duration-200 hover:text-[#4CAF4F]'>Privacy policy</a>
                        </li>
                        <li>
                            <a href="#" className='text-sm text-[#F5F7FA] font-normal transition-colors duration-200 hover:text-[#4CAF4F]'>Status</a>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Stay up to date (Email Subscribe) */}
                <div className='flex flex-col gap-[24px] w-full mt-8 md:mt-0 md:w-[255px]'>
                    <h5 className='text-white text-[20px] font-semibold leading-[28px]'>Stay up to date</h5>
                    
                    {/* Email Input Field */}
                    <div className='relative w-full'>
                        <input
                            type="email"
                            placeholder="Your email address"
                            className='bg-[#515B60] text-white placeholder-[#B4B9BC] rounded-[8px] py-[11px] pl-[12px] pr-[40px] w-full text-[14px] font-normal focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]'
                        />
                        <button 
                            className='absolute inset-y-0 right-0 flex items-center pr-[12px] transition-transform duration-300 hover:scale-110'
                            aria-label='Submit Email'
                        >
                            <svg className="w-[17px] h-[17px] fill-[#F5F7FA]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" opacity="0"/><path d="M2.05,21.5,22,12.5,2.05,3.5,2,10.28l14,2.22L2,13.72Z"/></svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;
