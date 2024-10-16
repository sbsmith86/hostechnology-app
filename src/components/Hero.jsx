import React from 'react';
// import headerImage from "../images/concierge-bell-header-one.jpg";
import headerImageTwo from "../images/concierge-bell-header-no-bkgrd.png";
import { ContactForm } from "./ContactForm";

const Hero = ({primaryText, secondaryText}) => {
    return (
        <div
        className="hero min-h-screen"
        style={{
            backgroundImage: `url(${headerImageTwo})`,
        }}>
        <div className="hero-overlay bg-transparent"></div>
            <div className="hero-content text-neutral-content text-center flex justify-start w-full py-16">
                <div>
                    <div className="mb-5 flex justify-center">
                        <p className="max-w-md text-2xl font-montserrat">
                            Hi! I'm Shae Smith and I will be an embedded software engineer for your team.
                            <br />
                            <span className="text-sm font-bold text-secondary">Expert React, Node, and PHP development and support</span>
                        </p>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Hero;