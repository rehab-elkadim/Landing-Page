import React from 'react';

const Clients = () =>{
    return (
        <div className='flex flex-col items-center   justify-center px-[100.23px] gap-[11.14px] mt-[20px]'>
            <div className=' flex flex-col items-center gap-[5.57px]'>
                <h1 className='text-[25.06px] font-bold text-[#4D4D4D] justify-center leading-[30.63px]'>Clients</h1>
                <p className='text-[#717171] text-[11.14px] leading-[16.71px]'>We have been working with some Fortune 500+ clients</p>
            </div>
            <div className='flex justify-between items-center h-[68.21px] w-[801.87px] gap-[11.14px] py-[60px]'>
                <img src="../public/clients-logo/Logo.png" alt=""  />
                <img src="../public/clients-logo/logo-2.png" alt="" />
                <img src="../public/clients-logo/logo-3.png" alt="" />
                <img src="../public/clients-logo/logo-4.png" alt="" />
                <img src="../public/clients-logo/logo-5.png" alt="" />
            </div>
        </div>
    );
};
export default Clients;