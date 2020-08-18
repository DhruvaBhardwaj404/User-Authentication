import React from 'react';
import {LinkContainer} from 'react-router-bootstrap'

function NavOption() {
    return (
        
        <nav className='nav bg-light border border-color-dark'>
            <br />
            <ul className='navbar-nav navbar-expand-md '>
                <li className='nav-item' >
                 <LinkContainer to='/login'>
                     <button className='btn btn-primary'>Login</button>
                     </LinkContainer>    
                     
                </li>
                <li className='nav-item'>
                    <LinkContainer to='/content'>
                        <button className='btn btn-primary'>Content</button>
                    </LinkContainer>
                </li>
            </ul>
        </nav>
    )
}

export default NavOption;
