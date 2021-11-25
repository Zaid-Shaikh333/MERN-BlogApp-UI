import React from 'react';
import foobar from '../../images/foobar.png';
import './profile.css';

export const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-card">
                <div className="text-center">
                    <img src={foobar} alt="test" />
                </div>
                <h4 className="text-center my-1">Foo Bar</h4>
                <h6 className="text-center mt-3 mb-4">Secret Google Hire</h6>
                <p classname="text-wrap">Hello all Foo Bar here. You use me Quite often in Programming.
                Feel Free to Connect with me.</p>
                <div className="social-icons">
                    <div className="linkedin">
                        <i class="fab fa-linkedin"></i>
                    </div>
                    <div className="twitter">
                        <i class="fab fa-twitter"></i>
                    </div>
                    <div className="facebook">
                        <i class="fab fa-facebook"></i>
                    </div>
                    <div className="whatsapp">
                        <i class="fab fa-whatsapp"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}