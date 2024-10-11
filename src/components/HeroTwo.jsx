import React from 'react';
import { ContactForm } from "./ContactForm";

const HeroTwo = ({primaryText, secondaryText}) => {
    return (
        <div className="bg-base-200 min-h-screen">
            <div className="max-w-7xl lg:flex lg:flex-row mx-auto">
                <div className="lg:w-1/2 place-content-center lg:p-12">
                    <div className="p-6">
                        <h1 class="text-5xl md:text-6xl font-bold tracking-tight secondary sm:text-4xl lg:text-6xl">
                            <span class="block">
                            Hi!<br />I'm Shae Smith.<br  />I will be an<br />
                            <span class="text-accent">
                            embedded software engineer<br />
                            </span>
                            on your team.
                            </span>
                        </h1>
                        <p className="text-md font-bold py-4">Expert React, Node, and PHP development and support</p>
                    </div>
                    <ContactForm />
                </div>
                <div className="lg:w-1/2 lg:place-content-center">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/shae_concierge_2.png`}
                        alt="Hand ringing concierge bell"
                        className=""
                    />
                </div>
            </div>
        </div>
    );
}

export default HeroTwo;
