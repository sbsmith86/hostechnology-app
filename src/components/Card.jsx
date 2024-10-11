import React, { useState } from 'react';

const Card = ({ content }) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        const contactFormElement = document.getElementById('contact-form');
        if (contactFormElement) {
          contactFormElement.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.error('Element with ID "contact-form" not found');
        }
      };

    return (
        <div className="bg-white flex flex-col md:flex-row md:h-auto">
            <div className="w-full md:w-1/3 bg-accent flex-shrink-0">
                <figure className="h-full">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/${content.image}`}
                        alt={content.altText}
                        className="object-cover h-full w-full"
                    />
                </figure>
            </div>
            <div className="card-body flex-grow">
                <h2 className="card-title">{content.title}</h2>
                <p>{content.subtitle}</p>
                <p className="font-bold">{content.price}</p>
                <p className="overflow-wrap break-word">{content.description}</p>
                <details className="mt-2 caret-accent">
                    <summary
                        className="m-1 border-none shadow-none cursor-pointer"
                        open={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Details
                    </summary>
                    <ul className="menu w-full p-2">
                        {content.included.map((item, index) => (
                            <li key={index} className="py-2">
                                - {item.item}
                            </li>
                        ))}
                    </ul>
                </details>
                <div className="card-actions justify-end">
                    <button className="btn btn-accent" onClick={handleButtonClick}>Let's connect!</button>
                </div>
            </div>
        </div>
    );
};

export default Card;