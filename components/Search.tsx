import React from "react";
import Icons from "./icons";
import styles from '../styles/search.module.css'
<link rel="stylesheet" href="search.css" />


//Definin an interface for the search-bar structure
interface SearchProps{
    setIsOpen: (value:boolean)=> void
 }

const Search = ({setIsOpen}:SearchProps) => {

    return (
        <section id="search-bar">
            <div className="container mt-4">
                <div className="col-8 col-lg-6 col-xl-5">
                    <div className="modal-body">
                        <div className="row">
                            <div className="search col-8" id="search">
                                <input 
                                type="text"
                                className={`${styles.placeholder} form-control border-top-0 border-start-0 border-end-0 border-bottom-4`}
                                id="modal-search"
                                placeholder="Quick search; type, location, name..."
                                />
                            </div>
                            <div className="col-2"><Icons setIsOpen={setIsOpen} /></div>
                        </div>
                    </div>
                </div>
            </div>

        </section> 
    )
}
export default Search;