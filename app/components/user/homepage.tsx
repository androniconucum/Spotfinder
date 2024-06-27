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
import Link from 'next/link'


export default function Sidebar() {
  return (
    <div className="drawer max-w-full  flex justify-center ">
      <div className='max-w-2xl bg-white xl:max-w-5xl lg:max-w-4xl md:max-w-[50rem] sm:max-w-[26rem] pb-4 rounded-b-3xl 2xl:px-5 sm:rounded-none'>
    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content mt-5 flex justify-center w-full sm:pr-6 gap-5 sm:gap-2 sm:px-5">
      {/* Page content here */}
      <label htmlFor="my-drawer"> <GiHamburgerMenu className='h-6 w-6 cursor-pointer mr-3 mt-2 sm:ml-2'/> </label>
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
    <div className="drawer-side">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu bg-[#489fde] min-h-full w-[20rem] sm:w-[13rem] p-4 text-white gap-7 sm:gap-6">
        <div className='mb-28 flex p-4 pt-0 sm:mb-10'>
        <Image src={Logo} width={50} height={50} alt='logo of spotfinder'></Image>
        <p className='mt-3 ml-3 text-2xl sm:text-[.8rem] sm:ml-1 font-bold'>SPOTFINDER</p>
        </div>
        {/* Sidebar content here */}
        <li><a className='text-[1.3rem] sm:text-[.9rem] font-semibold'> <Image src={HomeIcon} width={25} height={25} alt='HomeIcon' /> Home</a></li>
        <li><a className='text-[1.3rem] sm:text-[.9rem] font-semibold'><Image src={ApartmentIcon} width={25} height={25} alt='HomeIcon' />Apartments</a></li>
        <li><a className='text-[1.3rem] sm:text-[.9rem] font-semibold'><Image src={OwnershipIcon} width={25} height={25} alt='HomeIcon' />Ownership</a></li>
        <li><a className='text-[1.3rem] sm:text-[.9rem] font-semibold'><Image src={AboutIcon} width={25} height={25} alt='HomeIcon' />About Us</a></li>
        <li><a className='text-[1.3rem] sm:text-[.9rem] font-semibold'><Image src={ContactIcon} width={25} height={25} alt='HomeIcon' />Contact Us</a></li>
      </ul>
      </div>
    </div>
  </div>
  )
}
