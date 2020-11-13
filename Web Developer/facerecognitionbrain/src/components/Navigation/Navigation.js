import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
    return(
        <nav style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className = 'ma4'>
                <Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 150, width: 150 }} >
                    <div className="Tilt-inner pa4"> <img alt='logo' src={logo}></img> </div>
                </Tilt>
            </div>
            { isSignedIn 
                ? <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign Out</p> 
                : <div />
            }
        </nav>
    );
}

export default Navigation