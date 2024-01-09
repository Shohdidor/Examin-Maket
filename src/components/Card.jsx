import React from 'react'
import Button from '@mui/material/Button';
import ArrowRigth from '@mui/icons-material/ArrowCircleRight';


function Card( { img , h1 , p } ) {
  return (
    <div className='flex justify-between ml-[100px] mt-[15px] mb-[15px]'>
        <div className='w-[80%] sm:w-[50%]'>
        <img src={img} alt="error" />
        </div>
        <div className='font-medium pt-[15px] ml-[-70px] mt-[20px] sm:mt-[20px]'>
            <h1 className='text-[20px] sm:text-[30px] mb-[10px] font-black text-[#61BDD1] dark:text-[#7ECAA6] text-left ml-[10px] sm:ml-[-5px]'>
                {h1}
            </h1>
            <p className='w-[90%] text-[#7ECAA6] dark:text-[#61BDD1] sm:text-left'>
                {p}
            </p>
        </div>
        
    </div>
  )
}

export default Card


function Card2( { h1 , h2 , h3 , li1 , li2 , li3 , p  , btn , img } ) {
  return (
    <div className='sm:flex'>
        <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="700"
     data-aos-offset="10" className='pl-[50px] sm:pl-[150px] pt-[50px'>
            <h1 className='text-[35px] font-black sm:text-[60px] dark:text-orange-500'>
                {h1}
            </h1>
            <h3 className='text-[15px] font-bold mb-[20px] sm:text-[25px] dark:text-teal-600'>
                {h3}
            </h3>
            <ul className='sm:text-[20px] dark:text-sky-500'>
                <li>
                    <ArrowRigth />
                    {li1}
                </li>
                <li>
                    <ArrowRigth />
                    {li2}
                </li>
                <li>
                    <ArrowRigth />
                    {li3}
                </li>
            </ul>

            <p className='mt-[20px] text-[10px] text-gray-500 mb-[20px] sm:w-[50%] sm:text-[15px] dark:text-lime-500'>
                {p}
            </p>

            <h1 className='text-[30px] w-[90%] font-bold mb-[10px] sm:w-[50%] dark:text-blue-600'>
                {h2}
            </h1>
            <div className='pl-[90px] mb-[15px] sm:pl-0'>
            <Button variant="contained" sx={{borderRadius:"50px"}} className='dark:bg-[red]'>{btn}</Button>
            </div>

        </div>
        <div>
            <img src={img} alt="error" className=' sm:ml-[-40%] sm:mt-[80px]' />
        </div>
    </div>
  )
}

export {Card2}


function Card3( { span , h1 , p , h2 , li1, li2 , li3 , li4 , li5 , li6 , li7 , li8 , li9 , li10 , h3 , img } ) {
  return (
    <div data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-delay="300"
    data-aos-offset="0" className='bg-[#F5EEEE] rounded-[50px] sm:flex'>
        <div className='pt-[25px] '>
            <span className='bg-white p-[10px] rounded-bl-[0px] rounded-[50px] pl-[40px] pr-[50px] text-sky-500 ml-[-70px] sm:ml-[-740px]'>
                {span}
            </span>
            <h1 className='text-[35px] font-black ml-[-50px] mt-[10px] sm:ml-[-710px]'>
                {h1}
            </h1>
            <p className='text-[14px] text-gray-600 w-[70%] ml-[65px] text-left sm:w-[30%] sm:ml-[155px]'>
                {p}
            </p>
            <h1 className='text-[20px] font-bold ml-[-90px] mt-[10px] mb-[10px] sm:ml-[-750px]'>
                {h2}
            </h1>
            <ul className='flex flex-wrap gap-[5px] pl-[10px] sm:w-[40%] sm:ml-[150px] sm:pl-0'>
                <li className='bg-white p-[5px] pl-[20px] pr-[20px] rounded-[50px] font-semibold mb-[5px]'>
                    {li1}
                </li>
                <li className='bg-white p-[5px] pl-[20px] pr-[20px] rounded-[50px] font-semibold mb-[5px]'>
                    {li2}
                </li>
                <li className='bg-white p-[5px] pl-[20px] pr-[20px] rounded-[50px] font-semibold mb-[5px]'>
                    {li3}
                </li>
                <li className='bg-white p-[5px] pl-[20px] pr-[20px] rounded-[50px] font-semibold mb-[5px]'>
                    {li4}
                </li>
                <li className='bg-white p-[5px] pl-[20px] pr-[20px] rounded-[50px] font-semibold mb-[5px]'>
                    {li5}
                </li>
                <li className='bg-white p-[5px] pl-[20px] pr-[20px] rounded-[50px] font-semibold mb-[5px]'>
                    {li6}
                </li>
                <li className='bg-white p-[5px] pl-[20px] pr-[20px] rounded-[50px] font-semibold mb-[5px]'>
                    {li7}
                </li>
                <li className='bg-white p-[5px] pl-[20px] pr-[20px] rounded-[50px] font-semibold mb-[5px]'>
                    {li8}
                </li>
                <li className='bg-white p-[5px] pl-[20px] pr-[20px] rounded-[50px] font-semibold mb-[5px]'>
                    {li9}
                </li>
                <li className='bg-white p-[5px] pl-[20px] pr-[20px] rounded-[50px] font-semibold mb-[5px]'>
                    {li10}
                </li>
            </ul>
            <div className='flex justify-center pb-[15px] mt-[10px]'>
                <h3 className='font-black'>
                    {h3}
                    <ArrowRigth className='ml-[100px]' />
                </h3>
            </div>
        </div>
        <div className='hidden sm:flex sm:w-[20%] sm:ml-[-380px]'>
            <img src={img} alt="error" />
        </div>

    </div>
  )
}

export {Card3}