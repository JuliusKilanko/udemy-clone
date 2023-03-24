import './App.css';
import Home from '../src/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserEdit from './components/UserEdit';
import Help from './components/pages/Help';
import AccoutSettings from './components/pages/AccoutSettings';
import Messages from './components/Messages';
import Notifications from './components/pages/Notifications';
import Teaching from './components/pages/Teaching';
import WishList from './components/pages/WishList';
import MyCart from './components/pages/MyCart';
import MyLearning from './components/pages/MyLearning';
import ITCourses from './components/pages/ITCourses';
import ELearnBusiness from './components/pages/ELearnBusiness';

function App() {

  return (
    <div className="App unselectable">
     <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home />} />
        <Route path='User-Edit' element ={<UserEdit />} />
        <Route path='help' element ={<Help />} />
        <Route path= 'edit-account' element ={<AccoutSettings/>} />
        <Route path = 'Messages' element ={<Messages />}/>
        <Route path='Notifications' element ={<Notifications />} />
        <Route path='Teaching' element ={<Teaching />} />
        <Route path='WishList' element ={<WishList />} />
        <Route path='MyCart' element={<MyCart />} />
        <Route path='MyLearning' element={<MyLearning />} />
        <Route path='ITCourses' element ={<ITCourses />} />
        <Route path='ELearnBusiness' element ={<ELearnBusiness />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
