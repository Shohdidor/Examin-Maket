import React, { useEffect, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import 'animate.css';
// animate__animated 

import { useState } from 'react'
import './App.css'
import Switcher from './components/Switcher'
import { useTranslation } from 'react-i18next'

import AOS from 'aos';
import 'aos/dist/aos.css';

/// IMG
import Logo from "/img/Logo.png"
import Bg1 from "/img/Bg-1.png"
import Bg2 from "/img/Bg-2.png"
import Bg3 from "/img/Bg-3.png"
import Bg4 from "/img/Bg-4.png"
import Bg5 from "/img/Bg-5.png"
import Bg6 from "/img/Bg-6.png"
import Group from "/img/Group.png"
import TelWat from "/img/Tel Wat.png"
import Group2 from "/img/Group2.png"
import Doc from "/img/Document.png"
import Hand from "/img/Hand.png"
import Robot from "/img/Robot.png"
import Phone from "/img/Phone.png"
import Phone2 from "/img/Phone2.png"
import Insta from "/img/Insta.png"

/// MUI 
import Button from '@mui/material/Button';
import ArrowRigth from '@mui/icons-material/ArrowCircleRight';
import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import Add from '@mui/icons-material/AddCircle';


// Card  
import Card from './components/Card'
import { Card2 } from './components/Card';
import { Card3 } from './components/Card';
import axios from 'axios';

let api = "http://localhost:3000/data"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function App ()  {

  
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [ idx , setIdx ] = useState ( null )
  const handleOpen = (user) => {
    setOpen(true);
    setName ( user.name )
    setPhone ( user.phone )
    setIdx ( user . id )
  }
  const handleClose = () => setOpen(false);


  const [ data , setData ] = useState ( [] )
  async function get () {
    try {
      let { data } = await axios.get ( api )
      setData ( data )
    } catch (error) {
      console.log(error);
    }
  }

  const [ lng , setLng ] = useState ( "en" )
  const { t , i18n } = useTranslation ()
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  async function editUser () {
    const user = data.find ((elem)=>elem.id==idx)
    try {
      let { data } = await axios . put ( `${api}/${idx}`,{
      ...user , 
      name : name ,
      phone : phone ,
      }) 
      get ()
    } catch (error) {
      console.log(error);
    }
    handleClose()
  }

  useEffect (()=> {
    get ()
  }, [] )

  useEffect(() => {
    AOS.init();
  }, [])

  async function deleteUser ( id ) {
    try {
      let { data } = await axios . delete ( `${api}/${id}`)
      get ()
    } catch (error) {
      console.log(error);
    }
  }

  const [ inp , setInp ] = useState ("")
  const [ inp2 , setInp2 ] = useState ("")
  async function addUser () {
    try {
      let { data } = await axios . post ( api , {
        name : inp , 
        phone : inp2 ,
        isCompleted : false 
      })
      get () 
      setInp ("")
      setInp2 ("")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <div className='dark:bg-[#17181D] text-black dark:text-white flex items-center justify-around pt-[10px]'>
      <Switcher />
      <img src={Logo} alt="error" className='w-[18%] sm:w-[5%]'/>

      <select value={lng}
      className='dark:bg-[#17181D] bg-slate-200'
      onChange={(event) => { changeLanguage ( event . target . value )
        setLng (event.target.value)}}>
        <option value="en">Eng</option>
        <option value="ru">Rus</option>
      </select>
        <Button variant="contained">{t("navbar.btn")}</Button>

        <img src={TelWat} alt="error" className='hidden sm:flex' />
        <ul className='sm:flex hidden sm:justify-around sm:w-[25%] sm:font-medium dark:text-[#CF6DDD]'>
          <li>
            {t("navbarli1")}
          </li>
          <li>
            {t("navbarli2")}
          </li>
          <li className='sm:flex sm:justify-between sm:w-[25%]'>
            {t("navbarli3")}
            <ArrowRigth />
          </li>
        </ul>
    </div>
    <ul className='sm:hidden font-thin pl-[40px] flex justify-evenly w-[60%] pt-[5px]'>
      <li className='dark:text-white'>
        {t("navbar.li1")}
      </li>
      <li className='text-gray-400 dark:text-[#CF6DDD]'>
        {t("navbar.li2")}
      </li>
    </ul>
    <div className='sm:flex sm:justify-around sm:mt-[50px]'>
      <div className='sm:mt-[50px]'>
    <h1 className='animate__animated animate__fadeInDown font-bold text-[30px] sm:text-[50px] sm:w-[60%] bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600 to-blue-600  m-auto mt-[25px] pl-[20px]'>
      {t("section1.h1")}
    </h1>
    <p className='text-[14px] sm:text-[20px] sm:pl-[235px] dark:text-[#4061F8] text-gray-700 font-medium pt-[10px] pl-[20px]'>
      {t("section1.p")}
    </p>
      </div>
      <div className='hidden sm:flex sm:pr-[150px]'>
        <img src={Robot} alt="error" />
      </div>
      

    </div>

    <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mt-[20px]"
      >
        <SwiperSlide>
          
    <Card img={Bg1} h1={t("section2.h1")} p={t("section2.p1")} />
        </SwiperSlide>
        <SwiperSlide>
          
    <Card img={Bg2} h1={t("section2.h3")} p={t("section2.p3")} />
        </SwiperSlide>
        <SwiperSlide>
    <Card img={Bg3} h1={t("section2.h3")} p={t("section2.p3")} />
        </SwiperSlide>
        <SwiperSlide>
    <Card img={Bg4} h1={t("section2.h4")} p={t("section2.p4")} />
        </SwiperSlide>
        <SwiperSlide>
    <Card img={Bg5} h1={t("section2.h1")} p={t("section2.p1")} />
        </SwiperSlide>
        <SwiperSlide>
    <Card img={Bg6} h1={t("section2.h4")} p={t("section2.p4")} />
        </SwiperSlide>
      </Swiper>

<div className='bg-[#E9EEF3] rounded-[100px]'>
      <Card2 h1={t("section3.h1")} p={t("section3.p")} li1={t("section3.li1")} li2={t("section3.li2")} li3={t("section3.li3")} h2={t("section3.h2")} h3={t("section3.h3")} btn={t("section.btn")} img={Doc}/>
</div>
      <br />
      <Card2 h1={t("section4.h1")} p={t("section4.p")} li1={t("section4.li1")} li2={t("section4.li2")} li3={t("section4.li3")} h2={t("section4.h2")} h3={t("section4.h3")} btn={t("section.btn")} img={Group}/>
      <br />
      <div className='bg-[#D2F4E4] rounded-[100px]'>
      <Card2 h1={t("section5.h1")} p={t("section5.p")} li1={t("section5.li1")} li2={t("section5.li2")} li3={t("section5.li3")} h2={t("section5.h2")} h3={t("section5.h3")} btn={t("section.btn")} img={Group2}/>
      </div>

      <div className='pl-[25px] sm:mt-[40px] sm:pl-[150px]'>
        <h1 className='text-[30px] font-black mb-[5px] sm:text-[45px] dark:text-sky-600'>
          {t("section6.h1")}
        </h1>
        <h2 className='text-[15px] font-bold mb-[10px] dark:text-teal-600'>
          {t("section6.h2")}
        </h2>
        <p className='text-gray-700 mb-[15px] sm:w-[80%] sm:text-[17px] dark:text-orange-500'>
          {t("section6.p")}
        </p>
        <hr className='border-[black] border-[2px] w-[95%] dark:border-green-500'/>
        <div className='flex justify-between p-[10px] sm:pr-[70px]'>
          <h3 className='sm:text-[25px] dark:text-red-500'>
            {t("section6.h3")}
          </h3>
          <div className='sm:mt-[7px]'>
          <ArrowRigth className='dark:text-yellow-400' />
          </div>
        </div>
        <hr className='border-[black] dark:border-green-500 border-[2px] w-[95%]'/>
      </div>

      <h1 className='text-[20px] font-black flex justify-center dark:text-sky-600 pt-[10px] pb-[10px]'>
        {t("Real")}
      </h1>

      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mt-[20px]"
      >
        <SwiperSlide className='bg-black'>
        <Card3 h1={t("section7.h1")} h2={t("section7.h2")} h3={t("section7.h3")} img={Phone} li1={t("section7.li1")} li2={t("section7.li2")} li3={t("section7.li3")} li4={t("section7.li4")} li5={t("section7.li5")} li6={t("section7.li6")} li7={t("section7.li7")} li8={t("section7.li8")} li9={t("section7.li9")} li10={t("section7.li10")} p={t("section7.p")} span={t("section7.span")} />
        </SwiperSlide>
        <SwiperSlide className='bg-black'>
        <Card3 h1={t("section7.h1")} h2={t("section7.h2")} h3={t("section7.h3")} img={Phone2} li1={t("section7.li1")} li2={t("section7.li2")} li3={t("section7.li3")} li4={t("section7.li4")} li5={t("section7.li5")} li6={t("section7.li6")} li7={t("section7.li7")} li8={t("section7.li8")} li9={t("section7.li9")} li10={t("section7.li10")} p={t("section7.p")} span={t("section7.span")} />
        </SwiperSlide>
        <SwiperSlide className='bg-black'>
        <Card3 h1={t("section7.h1")} h2={t("section7.h2")} h3={t("section7.h3")} img={Phone} li1={t("section7.li1")} li2={t("section7.li2")} li3={t("section7.li3")} li4={t("section7.li4")} li5={t("section7.li5")} li6={t("section7.li6")} li7={t("section7.li7")} li8={t("section7.li8")} li9={t("section7.li9")} li10={t("section7.li10")} p={t("section7.p")} span={t("section7.span")} />
        </SwiperSlide>
        <SwiperSlide className='bg-black'>
        <Card3 h1={t("section7.h1")} h2={t("section7.h2")} h3={t("section7.h3")} img={Phone2} li1={t("section7.li1")} li2={t("section7.li2")} li3={t("section7.li3")} li4={t("section7.li4")} li5={t("section7.li5")} li6={t("section7.li6")} li7={t("section7.li7")} li8={t("section7.li8")} li9={t("section7.li9")} li10={t("section7.li10")} p={t("section7.p")} span={t("section7.span")} />
        </SwiperSlide>
        <SwiperSlide className='bg-black'>
        <Card3 h1={t("section7.h1")} h2={t("section7.h2")} h3={t("section7.h3")} img={Phone} li1={t("section7.li1")} li2={t("section7.li2")} li3={t("section7.li3")} li4={t("section7.li4")} li5={t("section7.li5")} li6={t("section7.li6")} li7={t("section7.li7")} li8={t("section7.li8")} li9={t("section7.li9")} li10={t("section7.li10")} p={t("section7.p")} span={t("section7.span")} />
        </SwiperSlide>
        <SwiperSlide className='bg-black'>
        <Card3 h1={t("section7.h1")} h2={t("section7.h2")} h3={t("section7.h3")} img={Phone2} li1={t("section7.li1")} li2={t("section7.li2")} li3={t("section7.li3")} li4={t("section7.li4")} li5={t("section7.li5")} li6={t("section7.li6")} li7={t("section7.li7")} li8={t("section7.li8")} li9={t("section7.li9")} li10={t("section7.li10")} p={t("section7.p")} span={t("section7.span")} />
        </SwiperSlide>
      </Swiper>
<div className='flex gap-[15px] mt-[50px] justify-center flex-wrap'>
      <TextField id="outlined-basic" value={inp} onChange={(event) => setInp ( event.target.value ) } size='small' label="Name" variant="outlined" />
      <TextField id="outlined-basic" value={inp2} onChange={(event) => setInp2 ( event.target.value ) } size='small' label="Phone" variant="outlined" />
      <Button variant='contained' onClick={addUser} color='inherit'> + Add </Button>
</div>

      {data.map (( elem ) => {
        return (
          <div key={elem.id} className='bg-slate-800 mb-[20px] w-[80%] m-auto mt-[40px] rounded-[50px] sm:w-[25%] sm:p-[10px]'>
            <h1 className='text-white dark:text-orange-500 text-[25px] font-bold pl-[40px]'>
              {elem.name}
            </h1>
            <div className='flex gap-[100px]'>
            <p className='text-white dark:text-slate-400 font-bold text-[15px] pl-[40px]'>
              {elem.phone}
            </p>
            <div className='mt-[-5px] pb-[10px]'>
            <Button variant='outlined' onClick={()=> deleteUser ( elem.id ) } color='error' size='small'> Delete </Button>
            </div>
            </div>
            <div className='pl-[40px] pb-[10px]'>
            <Button variant='outlined' onClick={()=>{
              handleOpen(elem)
            }} color='success' size='small'> Edit </Button>
            </div>
          </div>
        )
      })
      }

      <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" className='bg-[#EAF0F6] rounded-[50px] sm:flex sm:justify-around sm:pt-[15px]'>
        <div className='text-center mb-[10px]'>
          <br />
          <h1 className='text-[30px] font-black'>
            {t("end.h1")}
          </h1>
          <ul className='font-bold'>
            <li>
              {t("end.li1")}
            </li>
            <li>
              {t("end.li2")}
            </li>
          </ul>
          <img src={Insta} alt="error" className='m-auto mt-[10px] mb-[10px]' />
          
          <h2 className='font-semibold mb-[5px]'>
            {t("end.h2")}
          </h2>
          <hr className='border-[black] mb-[10px]' />

          <p className='text-gray-600'>
            {t("end.p")}
          </p>
        </div>
        <div className='text-center sm:bg-white sm:w-[30%] sm:p-[20px] sm:rounded-[40px]'>
          <h1 className='sm:font-black sm:text-[20px]'>
            {t("end2.h1")}
          </h1>
          
          <TextField id="standard-basic" sx={{display:"block"}} label={t("Name")} variant="standard" />
          <TextField id="standard-basic" sx={{display:"block"}} label={t("Telphone")} variant="standard" />
          <TextField id="standard-basic" sx={{display:"block"}} label={t("Coment")} variant="standard" />
          <div className='flex justify-between p-[20px] w-[95%]'>
            <div className='flex gap-[10px] items-center'>
            <Add className='dark:text-red-600' />
            <h1> 
              {t("File")}
            </h1>
            </div>
            <Button variant='contained'> {t("end.btn")}</Button>
          </div>
        </div>
      </div>

    



 <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are You want Change it ?
          </Typography>
          <TextField id="filled-basic" value={name} onChange={(event) => setName ( event . target . value ) } label="Filled" variant="filled" />
          <TextField id="filled-basic" value={phone} onChange={(event) => setPhone ( event . target . value ) } label="Filled" variant="filled" />
          <Button variant='contained' onClick={editUser}> Change it </Button>
        </Box>
      </Modal>
    </>
  )
}

export default App
