import React from 'react'
import { Button } from '../ui/button'
import { FcApproval } from "react-icons/fc";

const misyon = () => {
    return (
        <div className='bg-black w-[80%] max-xl:w-[60%] max-md:w-[80%] mt-28 mb-44 max-md:mb-8 max-lg:mb-8 m-auto  text-white'>
            <div className='flex max-xl:flex-col items-center justify-center'>
                <div className='flex flex-col  gap-10 max-md:gap-9'>
                    <p className='font-work font-bold max-md:text-2xl text-4xl'>How It Works</p>
                    <p className='w-[50%] max-xl:w-[90%] text-xl max-md:text-base max-md:w-[90%]'>mydetectai is very simple to use, so it is a successful detection platform used by users.</p>
                    <div className=' flex  flex-col gap-6 max-md:gap-5'>
                        <div className='flex items-center  gap-5 max-md:gap-2'>

                            <FcApproval size={20} />
                            <p className='w-[50%] max-xl:w-[90%] text-lg max-md:text-base max-md:w-[90%]'>Sign Up.</p></div>
                           
                            
                            <div className='flex items-center  gap-5 max-md:gap-2'>
                            <FcApproval size={20} />
                            <p className='w-[50%] max-xl:w-[90%] text-lg max-md:text-base max-md:w-[90%]'> Choose the payment plan.</p></div>

                            <div className='flex items-center  gap-5 max-md:gap-2'>
                            <FcApproval size={20} />
                            <p className='w-[50%] max-xl:w-[90%] text-lgmax-md:text-base max-md:w-[90%]'>Upload the file and wait for the result. You can use mydetectai simply with these 3 steps.</p></div>

                            <p className='w-[50%] max-md:w-full text-xs'>equipment : mydetectai currently only provides video detection services. It searches the video you uploaded among all data and tells you whether it was made with AI or not, Videos below 50 percent will be shown as real, videos made with AI above 50 percent will be shown as AI. <br className='max-md:hidden' /> The videos you upload are safe with us.</p>
                    </div>
                    <a href='/account' className='w-36 h-7 text-center rounded-md bg-[#006341]'>check your video</a>
                </div>
                <div>
                    <img className='w-[700px] max-xl:w-[500px] max-md:w-full max-md:mt-12 max-lg:mt-12 max-xl:mt-12' src="gifim.gif" alt="" />
                </div>
            </div>
        </div>
    )
}

export default misyon