import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import Logo from "@/public/Icon.png"
import HomeIcon from "@/public/Home-Icon.svg"
import ApartmentIcon from "@/public/Apartment-Icon.svg"
import OwnershipIcon from "@/public/Ownership-Icon.svg"
import AboutIcon from "@/public/About-Icon.svg"
import ContactIcon from "@/public/Contact-Icon.svg"
import Image from 'next/image'
import GroupIcon from "@/public/Mask group.svg"
import NotifIcon from "@/public/Group 68.svg"
import UserIcon from "@/public/image 13.svg"
import SettingsIcon from "@/public/Settings.svg"
import LogOutIcon from "@/public/Log Out.svg"
import Link from 'next/link'
import { useSession } from 'next-auth/react';


export default function Sidebar() {
  const session = useSession({
    required: true
  });

  return (
    <div className="drawer max-w-full  flex justify-center h-full">
      <div className='max-w-2xl bg-white xl:max-w-5xl lg:max-w-4xl lg:px-5 md:max-w-[50rem] md:px-5 sm:max-w-[27rem] pb-3 rounded-b-3xl 2xl:px-5 sm:rounded-none xl:px-5'>
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content mt-5 flex justify-center w-full  gap-3 sm:gap-2 sm:px-10 ">
      {/* Page content here */}
      <label htmlFor="my-drawer"> <GiHamburgerMenu className='h-6 w-6 cursor-pointer mr-3 mt-2 sm:ml-4'/> </label>
      <div className='relative w-96 '>
      <input type="search" id="search-dropdown" className="block p-2.5 w-full z-100 text-sm text-gray-900 bg-gray-50 rounded-full border-s-[#aeaeae] border-s-2 border border-[#aeaeae] focus:ring-[#aeaeae] focus:border-[#aeaeae]" placeholder="Search..." required />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-[2.6rem] text-[#aeaeae] bg-white rounded-e-full border border-[#aeaeae] hover:bg-slate-200 focus:ring-1 focus:outline-none focus:ring-[#aeaeae]">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span> 
            </button>
            </div>
            <Link href={"/"}> <Image src={NotifIcon} width={35} height={20} alt='Grouplogo' className='sm:w-[55px] sm:mt-1.5'/> </Link>
            <Link href={"/"}> <Image src={GroupIcon} width={40} height={20} alt='Grouplogo' className='sm:w-[60px] sm:mt-1'/> </Link>
            <Link href={"/"}> <Image src={UserIcon} width={40} height={20} alt='Grouplogo' className='sm:w-[60px] sm:mt-1'/> </Link>
    </div>
    <div className="drawer-side h-full">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
      <div className='h-full justify-between'>
      <ul className="menu bg-[#489fde] h-full w-[20rem] sm:w-[13rem] p-4 text-white   flex sm:justify-around 2xl:justify-between xl:justify-between lg:justify-between md:justify-between">
        <div className='mb-16'>
        <div className=' flex p-4 pt-0 mt-0 sm:mb-10 mb-20 2xl:pb-10'>
        <Image src={Logo} width={50} height={50} alt='logo of spotfinder'></Image>
        <p className='mt-3 ml-3 text-2xl sm:text-[.8rem] sm:ml-1 font-bold '>SPOTFINDER</p>
        </div>
        {/* Sidebar content here */}
        <li><a className='text-[1.3rem] sm:text-[.9rem] font-semibold'> <Image src={HomeIcon} width={25} height={25} alt='HomeIcon' /> Home</a></li>
        <li><a className='text-[1.3rem] sm:text-[.9rem] font-semibold mt-8'><Image src={ApartmentIcon} width={25} height={25} alt='HomeIcon' />Apartments</a></li>
        <li><a className='text-[1.3rem] sm:text-[.9rem] font-semibold mt-8'><Image src={OwnershipIcon} width={25} height={25} alt='HomeIcon' />Ownership</a></li>
        <li><a className='text-[1.3rem] sm:text-[.9rem] font-semibold mt-8'><Image src={AboutIcon} width={25} height={25} alt='HomeIcon' />About Us</a></li>
        <li><a className='text-[1.3rem] sm:text-[.9rem] font-semibold mt-8'><Image src={ContactIcon} width={25} height={25} alt='HomeIcon' />Contact Us</a></li>
        </div>
        <div className='pt-0 pb-0 mb-0 2xl:mb-10 xl:mb-7 lg:mb-7 md:mb-7 sm:mb-0 sm:'>
        <div className="w-full h-px mx-auto py-0.5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <li><a className='text-[1.3rem] sm:text-[.9rem] font-semibold mt-2'><Image src={SettingsIcon} width={25} height={25} alt='HomeIcon' />Settings</a></li>
        <li><a className='text-[1.3rem] sm:text-[.9rem] font-semibold mt-3'><Image src={LogOutIcon} width={25} height={25} alt='HomeIcon' />Log Out</a></li>
        </div>
      </ul>
        </div>
      </div>
      <div>{session?.data?.user?.email }</div>
    </div>
  </div>
  )
}
