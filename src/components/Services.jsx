import React from 'react';
import { services } from '../constants';
import styles from '../style';

const Services = () => {
  return (
    <section className={`${styles.flexCenter} flex-row sm:mb-20 mb-6`}>
      {services.map((service) => (
        <div key={service.id} className={`flex justify-start items-center gap-3 flex-row ml-2`}>
          <img src={service.icon} className='h-[30px]' alt='service'/>
          <p className='xs:text-[20px] text-[10px] font-muli text-gradient'>{service.content}</p>
        </div>
      ))}
    </section>
  )
}

export default Services