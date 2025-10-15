import React from 'react';

const Community = () => {
  return (
    <>
    <div className='flex flex-col gap-[11.14px] h-[291.80px]'>
      
      {/* Header Section */}
      <div className='flex flex-col justify-center items-center gap-[5.57px] h-[84px]'>
        <h1 className='text-[25.06px] w-[377.26px] font-semibold text-[#4D4D4D] text-center'>
          Manage your entire community in a single system
        </h1>
        <p className='text-[#717171] text-[11.14px] font-normal text-center'>
          Who is Nextcent suitable for?
        </p>
      </div>

      {/* Cards Section */}
      <div className='flex flex-row justify-between items-center h-[196px] px-[100.23px] gap-[5.57px]'>

        {/* Card 1 */}
        <div className='flex flex-col justify-center items-center py-[22.27px] px-[16.71px] w-[208.12px] text-center'>
          <div className='relative w-[208.12px] h-[40px] flex justify-center'>
            <img
              src="../public/communities/Rectangle1.png"
              className="absolute top-0 "
            />
            <img
              src="../public/communities/icon.png"
              className="absolute top-[-8px] left-[76px] "
            />
          </div>
          <h1 className='text-[19.49px] font-bold text-[#4D4D4D] leading-[25.06px] mt-[8px]'>
            Membership Organizations
          </h1>
          <p className='text-[#717171] font-normal text-[9.74px] leading-[13.92px]'>
            Our membership management software provides full automation of membership renewals and payments
          </p>
        </div>

        {/* Card 2 */}
        <div className='flex flex-col justify-center items-center py-[22.27px] px-[16.71px] w-[208.12px] text-center'>
          <div className='relative w-[208.12px] h-[40px] flex justify-center'>
            <img
              src="../public/communities/Rectangle1.png"
              className="absolute top-0"
            />
            <img
              src="../public/communities/2 (2).png"
              className="absolute top-[-8px] left-[76px]"
            />
          </div>
          <h1 className='text-[19.49px] font-bold text-[#4D4D4D] leading-[25.06px] mt-[8px]'>
            National Associations
          </h1>
          <p className='text-[#717171] font-normal text-[9.74px] leading-[13.92px]'>
            Our membership management software provides full automation of membership renewals and payments
          </p>
        </div>

        {/* Card 3 */}
        <div className='flex flex-col justify-center items-center py-[22.27px] px-[16.71px] w-[208.12px] text-center'>
          <div className='relative w-[208.12px] h-[40px] flex justify-center'>
            <img
              src="../public/communities/Rectangle1.png"
              className="absolute top-[0px]  "
            />
            <img
              src="../public/communities/2 (1).png"
              className="absolute top-[-8px] left-[76px]"
            />
          </div>
          <h1 className='text-[19.49px] font-bold text-[#4D4D4D] leading-[25.06px] mt-[8px] px-[20px]'>
            Clubs And Groups
          </h1 >
          <p className='text-[#717171] font-normal text-[9.74px] leading-[13.92px] '>
            Our membership management software provides full automation of membership renewals and payments
          </p>
        </div>

      </div>
    </div>

 <div className='flex flex-row justify-center items-center gap-[40px] px-[100.23px] py-[40px]'>
  <img
    src="../public/communities/2nd.png"
    alt=""
    className="object-contain"
  />
  <div className=' flex flex-col justify-center items-start gap-[20px] '>
    <h1 className='font-semibold text-[25.06px] text-[#4D4D4D] px-[100px]'>
      The unseen of spending three years at Pixelgrade
    </h1>
    <p className='text-[#717171] font-normal text-[9.74px] leading-[13.92px] px-[100px]'>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. At perferendis ipsa laborum in aspernatur, omnis quidem ad sequi laudantium optio molestias officia obcaecati provident sunt esse laboriosam quo unde quaerat.
    </p>
    <button className='bg-[#4CAF4F] text-white py-2 px-5 mx-[100px]'>
      Learn More
    </button>
  </div>
</div>

    </>
  );
};

export default Community;
