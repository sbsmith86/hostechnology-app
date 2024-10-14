import React from 'react';
import Card from "./Card";


const Tiers = ({tiers}) => {
    return (
        <div className="mx-auto px-8 lg:w-5/6 lg:flex lg:flex-col space-y-8">
            {tiers && tiers.map((tier, index) => {
                return (
                    <>
                        <Card key={index} content={tier} />
                        <div className="divider divider-neutral"></div>
                    </>
                )
            })}
      </div>
    );
}

export default Tiers;
