import React,{useState} from "react";
import Modal from './Modal'
interface IconProps{
    setIsOpen: (value:boolean)=> void
 }
const Icons = ({setIsOpen}:IconProps) => {

   

    return (
        <section id="icons">
            <div className="row">
                <div className=" col-1 icon-1 ms-1 me-2" >
                   

           {/* Drop down div */}
                    <div className="dropdown" >

                         {/* //filter icon */}
                    <svg  width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <path d="M11 5.21053C16.5228 5.21053 21 4.26797 21 3.10526C21 1.94256 16.5228 1 11 1C5.47715 1 1 1.94256 1 3.10526C1 4.26797 5.47715 5.21053 11 5.21053Z" stroke="#63004F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1 3.10526C1 5.45262 5.30111 10.1305 7.50667 12.3737C8.31573 13.1862 8.7699 14.2588 8.77778 15.3758V21L13.2222 18.8947V15.3758C13.2222 14.2589 13.69 13.1916 14.4933 12.3737C16.7 10.1305 21 5.45368 21 3.10526" stroke="#63004F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
  <ul className="dropdown-menu m-2  me-3 border" aria-labelledby="dropdownMenuButton1" >
    <li><a className="dropdown-item " href="#">Filter By Name </a></li>
    <li><a className="dropdown-item" href="#">Filter By Time</a></li>
    <li><a className="dropdown-item" href="#">Filter by Priority</a></li>
  </ul>
</div>


              </div>
                
                <div  className="col-1 icon-2" onClick={() => setIsOpen(true)} >
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 1.125C6.66563 1.125 1.125 6.66563 1.125 13.5C1.125 20.3344 6.66563 25.875 13.5 25.875C20.3344 25.875 25.875 20.3344 25.875 13.5C25.875 6.66563 20.3344 1.125 13.5 1.125ZM14.625 18C14.625 18.2984 14.5065 18.5845 14.2955 18.7955C14.0845 19.0065 13.7984 19.125 13.5 19.125C13.2016 19.125 12.9155 19.0065 12.7045 18.7955C12.4935 18.5845 12.375 18.2984 12.375 18V14.625H9C8.70163 14.625 8.41548 14.5065 8.2045 14.2955C7.99353 14.0845 7.875 13.7984 7.875 13.5C7.875 13.2016 7.99353 12.9155 8.2045 12.7045C8.41548 12.4935 8.70163 12.375 9 12.375H12.375V9C12.375 8.70163 12.4935 8.41548 12.7045 8.20451C12.9155 7.99353 13.2016 7.875 13.5 7.875C13.7984 7.875 14.0845 7.99353 14.2955 8.20451C14.5065 8.41548 14.625 8.70163 14.625 9V12.375H18C18.2984 12.375 18.5845 12.4935 18.7955 12.7045C19.0065 12.9155 19.125 13.2016 19.125 13.5C19.125 13.7984 19.0065 14.0845 18.7955 14.2955C18.5845 14.5065 18.2984 14.625 18 14.625H14.625V18Z" fill="#63004F"/>
                    </svg>
                </div>
            </div>

        </section> 
    )
}
export default Icons;
