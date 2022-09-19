import React,{useState} from "react";
import {Info} from "./Data"
import {Data} from "./Data"
import styles from '../styles/requestCard.module.css'
//Definin an interface for the card structure

// interface Info {
//     name: string;
//     time: string;
//     request: string;
//     location: string;

// }

const Card = ({name, time, request, location}: Info) => {

    const [active, setActive] = useState(2)

    return (
        <section id="information" >
            {/* <div className="container mt-4">
                <div className="col-8 col-lg-6 col-xl-5">
                    <div className="card border-muted border-1">
                        <div className="row pt-2">
                            <h4 className="col-9 card-title fw-bold">{name}</h4>
                            <p className=" col-3 text-muted"><small><em>{time}</em></small></p>
                        </div>
                        <p className="card-p text-dark">{request}</p>
                        <p className="card-p dark">{location}</p>

                    </div>
                </div>
            </div> */}

            <div className={` container mt-4 `}  >
                <div className="col-8 col-lg-6 col-xl-4 ">
                    <div className="card border-muted border-1">
                    {Data.map((data,index) => (
                        <>
                           <div onClick={()=>setActive(index)} className={`${styles.card} ${active == index && styles.active} container card border-muted border-1 col-8 col-lg-6 col-xl-11 mt-2 `}>
                                <div className="row pt-2">
                                    <h4 className="col-9 card-title fw-bold">{data.name}</h4>
                                    <p className=" col-3 text-muted"><small><em>{data.time}</em></small></p>
                                </div>
                                <p className="card-p text-dark">{data.request}</p>
                                <p className="card-p dark">{data.location}</p>

                           </div>
                        </>

                    ))}
                    </div>
                </div>
            </div>

        </section> 
    )
}
export default Card;
