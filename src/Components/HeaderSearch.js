import React from 'react';
import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Collapse} from 'react-bootstrap';
import './Header'
 function HeaderSearch() {
    const [open, setOpen] = useState(false);

    return (
        <div className= "searchFlex">
           <Collapse in={open}>
               <div className= "searchFlexMargin" id="example-collapse-text">
                   <input type="text" placeholder="Search"/>
               </div>
           </Collapse>
           <FontAwesomeIcon icon={faSearch} 
            onClick={()=> setOpen(!open)}
            aria-controls= "example-collapse-text"
            aria-expanded={open}
           /> 
        </div>
    )
}

export default HeaderSearch