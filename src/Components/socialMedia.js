

import React from 'react'
import './socialMedia.css'
class SocialMedia extends React.Component {
    render() {
        return (
            <div className="App">
                <h1 style={{color:"#705d27"}}>Social Media Cards With Hover Effect</h1>
                <div className="container">
                    <div className="card">
                        <div className="icon">
                            <i className="fa fa-facebook-f"></i>
                        </div>
                         <div className="icon2">
                            <i className="fa fa-facebook-f"></i>
                        </div>
                       <a href="https://www.facebook.com/profile.php?id=100009418780724"><div className="image"></div></a>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <i className="fa fa-instagram"></i>
                        </div>
                         <div className="icon2">
                            <i className="fa fa-instagram"></i>
                        </div>
                        <a href="https://www.instagram.com/i_m_pks/"><div className="image"></div></a>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default SocialMedia;
