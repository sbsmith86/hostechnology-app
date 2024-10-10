

// import headerImage from "../images/concierge-bell-header-one.jpg";

import React from 'react';
import { ContactForm } from "./ContactForm";

const HeroTwo = ({primaryText, secondaryText}) => {
    return (
        <div className="bg-base-200 min-h-screen">
            <div className="max-w-full flex-col">
                <div className="md:w-1/2 place-content-center">
                    <h1 class="text-5xl md:text-3xl font-bold tracking-tight secondary sm:text-4xl md:text-5xl p-6 md:p-12">
                        <span class="block">
                        Hi!<br />I'm Shae Smith.<br  />I will be an<br />
                        <span class="text-accent">
                        embedded software engineer<br />
                        </span>
                        on your team.
                        </span>
                    </h1>
                    <ContactForm />
                </div>
                <div className="md:w-1/2 flex md:justify-center">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/shae_concierge_1.png`}
                        alt="Hand ringing concierge bell"
                        className="md:w-3/4"
                    />
                </div>
            </div>
        </div>
        );

    //     <div className="w-1/2 bg-error">
    //     <h1 className="text-5xl font-bold font-montserrat">Hi! I'm Shae Smith and I will be an embedded software engineer for your team.</h1>
    //     {/* <h3 className="text-2xl font-bold py-4">Expert React, Node, and PHP development and support</h3> */}
    //     <p className="py-4">
    //     Expert React, Node, and PHP development and support
    //     </p>
    //     <ContactForm />
    // </div>
    //     return (
//         <div className="hero bg-base-200 min-h-screen">
//             <div className="hero-content flex-col md:flex-row-reverse">
                // <img
                //     src={`${process.env.PUBLIC_URL}/images/hand-on-bell.jpg`}
                //     alt="Hand ringing concierge bell"
                //     className="max-w-md rounded-lg"
                // />
//                 <div className="">
// slkd
//                 </div>
//             </div>
//         </div>
//     );
}

export default HeroTwo;


{/* <div className="mb-5 flex justify-center">
<p className="max-w-md text-4xl font-montserrat">
    Hi! I'm Shae Smith and I will be an embedded software engineer for your team.
    <br />
    <span className="text-sm font-bold text-secondary">Expert React, Node, and PHP development and support</span>`
</p>
</div>
<ContactForm /> */}