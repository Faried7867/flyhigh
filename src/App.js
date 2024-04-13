import './App.css';

import { IoIosSearch } from "react-icons/io";
import { GoHorizontalRule } from "react-icons/go";
import { BsArrowRightCircle } from "react-icons/bs";
import { CiCircleChevLeft } from "react-icons/ci";
import { BsArrowLeftCircle } from "react-icons/bs";

import { FaChevronRight } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { LiaDotCircle } from "react-icons/lia";
import { SlCalender } from "react-icons/sl";
import { RxDividerVertical } from "react-icons/rx";
function App() {


  return (
    <div className='grandparentpage'>
      <div className='parentpage'>
    <h1>FlyHigh  </h1>

    <ul className='unlist' >
      <li className="list" > Destination  </li>
      <li className="list" > . Bookings </li>
      <li className="list" > . Activities </li>
      <li className='search'> <IoIosSearch /></li>

    </ul>

  <div  class="hamburger">
  <div class="bar"></div>
  <div class="bar"></div>
  <div class="bar"></div>
</div>

    <p className="signup"> Sign up</p>
     <p className="login">Log in</p>
     
<div className="firstimg">
 <p className='p1'> <span className='hyphen'><GoHorizontalRule /></span> Blue Mountain Country Club and Resort</p>
 <p className='p2'>Treebo Tryst</p>
 <p className='p3'>-02'C Very Cold</p>
 <p className='p4' > <BsArrowLeftCircle /> <BsArrowRightCircle /></p>
</div>



<div className='inputs'>
  <p className='pf1'>Location <br /><span>Enter Your Destination...  <CiLocationOn /></span> </p>

  <span className='span1'><RxDividerVertical /></span>

  <p className='pf2'>Activity <br /> <span>Bungee Jump  <LiaDotCircle /></span> </p>
  <span className='span2'><RxDividerVertical /></span>

  <p className='pf3'>Date <br /> <span>
    Set date    <SlCalender /></span></p>

<span className='saerchicon' >  <IoIosSearch />
</span>

</div>
<p className='ps1'>Trending 2020</p>
<p className='ps2'>  Sost Brilliant reasons Entrada should be your one-stop-shop!</p>

{/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus perspiciatis laboriosam vel iusto voluptate quisquam ex delectus atque nisi ab! Reiciendis facere voluptatibus dicta aut maiores? Quis tempore totam commodi!</p> */}



<span className='ps3'><CiCircleChevLeft /> </span>
<span className='ps4'><FaChevronRight /></span>


<div className='grpimg'>
<div className='subimg-1'> <span>Mountain Hiking Tour</span></div>
<div className='subimg-2'><span>Train Tour Skyline</span></div>
<div className='subimg-3'><span>Forest Wild Life</span></div>
<div className='subimg-4'><span>Old Heritage</span></div>
</div>



      </div>
    
    </div>
  );
}

export default App;
