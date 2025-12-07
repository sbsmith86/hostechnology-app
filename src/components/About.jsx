import React from 'react';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="bg-gray-200 aspect-square border-4 border-gray-900">
                {/* Replace with actual photo */}
                <img 
                  src="/images/Staff_Shae.jpg" 
                  alt="Shae" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 md:order-2 space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-2xl text-gray-900">I'm Shae.</strong> I've been a software engineer 
                for 15 years across industries from games to hospitality to nonprofit spaces. 
                I'm part of the LGBTQ community. I know what it's like to do mission-driven work 
                with zero resources.
              </p>
              
              <p>
                Right now I'm a Creative Services Engineer at Epic Games, where I build automation 
                for creative teams. I learned something critical there: real solutions come from 
                sitting with people doing the work. Not being handed specs. Not building what I think 
                they need. Actually being there.
              </p>
              
              <p className="text-xl font-bold text-gray-900">
                This is my mission: bringing the tools that corporations use to scale their work 
                to the people who are actually trying to make an impact.
              </p>
              
              <p>
                I'm not interested in building products that sit on shelves. I'm interested in 
                sitting with you and making your work sustainable. AI doesn't have to be the doomsday 
                story—it can make one person feel like five. For under-resourced teams, that's transformative.
              </p>
              
              <p className="font-bold text-gray-900">
                But someone has to bring it to them. I'm done waiting for you to come to me. 
                Time to go to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
