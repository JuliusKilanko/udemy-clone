import React from 'react'
import Profile from '../assets/client.jpeg'
import {MdNotificationsNone} from 'react-icons/md'
import {HiOutlineEnvelope} from 'react-icons/hi2'
import {FiSettings} from 'react-icons/fi'
import {FaUserEdit} from 'react-icons/fa'
import {AiOutlineLogout} from 'react-icons/ai'
import {BiHelpCircle} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'


function UserProfile() {
    const eDitUser = useNavigate();
    const help = useNavigate();
    const accountsettings =useNavigate();
    const messages = useNavigate();
    const Notifications = useNavigate();
    const Teaching = useNavigate();
    const WishList = useNavigate();
    const MyCart = useNavigate();
    const MyLearning = useNavigate();
  return (
    <div>
        <div className=''>
            <div className='flex items-center border-b-2 py-3'>
                <img src={Profile} alt="Profile-Image" className='w-[60px] h-[60px] rounded-full' />
                <div className='text-left px-4'>
                    <h3 className='font-bold'>Kilanko Julius</h3>
                    <p className='text-[10px]'>juliuskilanko25@gmail.com</p>
                </div>
            </div>
            <ul className='text-left flex flex-col gap-3 text-[14px] border-b-2 py-6'>
                <li className='cursor-pointer hover:text-blue-500' onClick={() =>MyLearning('MyLearning')}><p>My Learning</p></li>
                <li className='cursor-pointer hover:text-blue-500'onClick={() => MyCart('MyCart')}><p>My Cart</p></li>
                <li className='cursor-pointer hover:text-blue-500' onClick={() => WishList('WishList')}><p>My WishList</p></li>
                <li className='cursor-pointer hover:text-blue-500' onClick={()=>Teaching('Teaching')}><p>Teach on e-Learn</p></li>
            </ul>
            <ul className='text-left flex flex-col gap-4 text-[14px] border-b-2 py-4'>
                <li className='cursor-pointer hover:text-blue-500 flex justify-between items-center' onClick={()=>Notifications('Notifications')}><p>Notifications</p><MdNotificationsNone   size={20} /></li>
                <li className='cursor-pointer hover:text-blue-500 flex justify-between items-center' onClick={()=>messages('Messages')}><p>Messages</p><HiOutlineEnvelope size={20}/></li>
            </ul>
            <ul className='text-left flex flex-col gap-4 text-[14px] border-b-2 py-4'>
                <li className='cursor-pointer hover:text-blue-500 flex justify-between items-center' onClick={() => accountsettings('edit-account')}><p>Account settings</p><FiSettings  size={20}/></li>
                <li className='cursor-pointer hover:text-blue-500 flex justify-between items-center' onClick={()=>eDitUser('User-Edit')}><p>Edit Profile</p><FaUserEdit size={20}/></li>
            </ul>
            <ul className='text-left flex flex-col gap-4 text-[14px] py-3'>
                <li className='cursor-pointer hover:text-blue-500 flex justify-between items-center' onClick={()=>help('help')}><p>Help</p><BiHelpCircle  size={20}/></li>
                <li className='cursor-pointer hover:text-blue-500 flex justify-between items-center'><p>Logout</p><AiOutlineLogout size={20}/></li>
            </ul>
        </div>
    </div>
  )
}

export default UserProfile