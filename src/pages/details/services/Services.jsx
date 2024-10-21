import React from 'react';
import Service from '../../../components/Service';

const servicesData = [
    {
        title: 'Physical Transformation',
        description: 'The goal must represent a personal challenge, whatever yours is "weight loss, muscle mass, firming up or a satisfactory shape" it is nutrition where it starts, then physical effort remains the next step to be taken into consideration if necessary.',
        duration: '90 minutes',
        location: 'Location proposed by the client',
    },
    {
        title: 'Strength Training',
        description: 'Develop physical strength and power through resistance training. Perfect for athletes and fitness enthusiasts looking to increase strength and performance.',
        duration: '60 minutes',
        location: 'XYZ Gym',
    },
    {
        title: 'Cardio Fitness',
        description: 'Improve cardiovascular health with a personalized cardio workout that burns fat and increases endurance.',
        duration: '45 minutes',
        location: 'Outdoor or gym',
    },
];

const Services = () => {
    return (
        <section className='w-full min-h-max rounded-[10px] py-5 px-5 sm:py-10 sm:px-20 bg-bgGray font-inter'>
            <div className="w-full flex flex-col gap-8">
                <h1 className='text-[1.6rem] sm:text-[1.8rem] xl:text-[2.2rem] 2xl:text-[2.5rem] font-[700]'>Services & Prices</h1>
                {servicesData.map((service, index) => (
                    <Service key={index} service={service} />
                ))}
            </div>
        </section>
    );
};

export default Services;
