import React from 'react';

const Card = ({content}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={`${process.env.PUBLIC_URL}/images/${content.image}`} alt={content.altText} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{content.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default Card;
