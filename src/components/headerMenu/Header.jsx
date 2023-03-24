import React, {useState} from 'react'
import Logo from '../assets/logo.png';
import {BsSearch, BsHeart} from 'react-icons/bs'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {MdNotificationsNone} from 'react-icons/md'
import UserImage from '../assets/client.jpeg'
import DropdownItems from './DropdownItems';
import InfoCards from './InfoCards';
import MyLearning from '../MyLearningComponent/MyLearning';
import Wishlist from '../WishList/Wishlist';
import Button from '../ButtonComponent/Button';
import CartCourse from '../Cart/CartCourse';
import Note from '../Note/Note';
import UserProfile from '../userprofile/UserProfile';
import { useNavigate } from 'react-router-dom'


function Header() {
    const [displayTech, setDisplayTech] = useState(false)
    const [displayBiz, setDisplayBiz] = useState(false)
    const [open, setOpen] = useState(false)
    const [displayMyLearning, setDisplayMyLearning] = useState(false)
    const [displayWishlist, setDisplayWishlist] =useState(false)
    const [displayCart, setDisplayCart] = useState(false)
    const [displayNote, setDisplayNote] = useState(false)
    const [displayUser, setDisplayUser] = useState(false)

    
    const MyCart = useNavigate();
    const WishList = useNavigate();
    const Teaching = useNavigate();
    const ELearnBusiness = useNavigate();
    const Home =useNavigate();
  return (
    <div className='flex justify-between items-center px-4 w-full custom-design'>
        <div className='w-[200px] h-[75px] m-0 p-0 ml-[-40px]'>
            <img src={Logo} alt="Logo" className='w-full h-full cursor-pointer'onClick={()=>Home('/')}/>
        </div>
        <div className='relative ml-[-40px]'>
            <p className='text-[14px] cursor-pointer' onClick={() =>setOpen(!open)}>Categories</p>
        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <ul>
            <DropdownItems text = {"Development"}/>
            <DropdownItems text = {"Business"}/>
            <DropdownItems text = {"Finance and Accounting"}/>
            <DropdownItems text = {"IT & Software"}/>
            <DropdownItems text = {"Office Productivity"}/>
            <DropdownItems text = {"Personal Development"}/>
            <DropdownItems text = {"Design"}/>
            <DropdownItems text = {"Marketing"}/>
            <DropdownItems text = {"Lifestyle"}/>
            <DropdownItems text = {"Photography & Video"}/>
            <DropdownItems text = {"Health & Fitness"}/>
            <DropdownItems text = {"Music"}/>
            <DropdownItems text = {"Teaching & Academic"}/>
          </ul>
        </div>
        </div>
            <div className='flex items-center relative'>
            <BsSearch className='absolute left-5 text-black/30' />
            <input type="text" placeholder='Search for anything' className='border border-black w-[550px] py-3 outline-none px-12 rounded-full' /> 
            </div>
            <div className='relative'>
            <p className='text-[14px] cursor-pointer' onClick={() =>setDisplayBiz(!displayBiz)}>e-Learn for Business</p>
            <div className={`InfoCards ${displayBiz ? 'active' : 'inactive'}`}>
                <InfoCards infos ='Get your team access to over 19,000 top e-Learn courses, anytime, anywhere.' btn ='Try e-Learn Business' linkto ={() =>ELearnBusiness('ELearnBusiness')}/>
            </div>
            </div>
            <div className='relative'>
            <p className='text-[14px] cursor-pointer' onClick={() => setDisplayTech(!displayTech)}>Teach on e-Learn</p>
            <div className={`techCards ${displayTech ? 'active' : 'inactive'}`}>
                <InfoCards infos = 'Turn what you know into an opportunity and reach millions around the world.' btn ='Learn More' linkto={()=>Teaching('Teaching')} />
            </div>
            </div>
            <div className='relative'>
            <p className='text-[14px] cursor-pointer' onClick={() =>setDisplayMyLearning(!displayMyLearning)} >My Learning</p>
            <div className={`LearningDropdown ${displayMyLearning ? 'active' : 'inactive'}`}>
              <MyLearning />
            </div>
            </div>
            <div className='relative'>
            <BsHeart size={20} className='text-black cursor-pointer' onClick={() =>setDisplayWishlist(!displayWishlist)}/>
            <div className={`Wishlist ${displayWishlist ? 'active' : 'inactive'}`}>
              <Wishlist />
              <div onClick={() =>WishList('WishList')}>
              <Button btn='Go to my wishlist' />
              </div>
            </div>
            </div>
            <div className='relative'>
            <HiOutlineShoppingCart size={20} className='text-black cursor-pointer' onClick={() => setDisplayCart(!displayCart)}/>
              <div className={`Cart ${displayCart ? 'active' : 'inactive'}`}>
              <CartCourse />
              <div>
                <h4 className='text-left pl-[12px] text-[17px] font-bold py-3'>Total : $350.99</h4>
                <div onClick={()=>MyCart('MyCart')}>
                <Button btn ='Go to my cart'/>
                </div>
              </div>
              </div>
            </div>
            <div className='relative'>
            <MdNotificationsNone size={20} className='text-black cursor-pointer'onClick={() => setDisplayNote (!displayNote)}/>
            <div className={`Note ${displayNote ? 'active' : 'inactive'} unselectable`}>
              <Note />
            </div>
            </div>
            <div className='relative'>
            <div className='w-[30px] h-[30px] rounded-full '>
                <img src={UserImage} alt="User-Profile" className='w-full h-full rounded-full cursor-pointer' onClick={() => setDisplayUser(!displayUser)} />
                <div className={`userProfile ${displayUser ? 'active' : 'inactive'}`}><UserProfile /></div>
                
            </div>
            
            </div>
    </div>
  )
}

export default Header