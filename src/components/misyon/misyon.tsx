import React from 'react'
import { Button } from '../ui/button'
import { FcApproval } from "react-icons/fc";

const misyon = () => {
    return (
        <div className='bg-black w-[80%] max-xl:w-[60%] max-md:w-[80%] mt-28 mb-44 m-auto  text-white'>
            <div className='flex max-xl:flex-col items-center justify-center'>
                <div className='flex flex-col  gap-10 max-md:gap-9'>
                    <p className='font-work font-bold max-md:text-2xl text-4xl'>Buraya Başlık Girilecek </p>
                    <div className=' flex  flex-col gap-6'>
                        <div className='flex items-center  gap-5'>
                            <FcApproval size={20} />
                            <p className='w-[50%] max-xl:w-[90%] text-xl max-md:text-base max-md:w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aperiam est omnis quis ad corrupti</p></div>
                           
                            
                            <div className='flex items-center  gap-5'>
                            <FcApproval size={20} />
                            <p className='w-[50%] max-xl:w-[90%] text-xl max-md:text-base max-md:w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aperiam est omnis quis ad corrupti</p></div>

                            <div className='flex items-center  gap-5'>
                            <FcApproval size={20} />
                            <p className='w-[50%] max-xl:w-[90%] text-xl max-md:text-base max-md:w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem aperiam est omnis quis ad corrupti</p></div>
                    </div>
                    <Button className='w-24 bg-[#006341]'>Contact</Button>
                </div>
                <div>
                    <img className='w-[450px] max-md:w-full max-md:mt-12 max-lg:mt-12 max-xl:mt-12' src="gifim.gif" alt="" />
                </div>
            </div>
        </div>
    )
}

export default misyon