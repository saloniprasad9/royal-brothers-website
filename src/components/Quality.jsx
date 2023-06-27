import React from 'react'
import Carousel from 'react-grid-carousel';
import styles from '../style';
const Quality = () => {
  return (
    <div>
        <Carousel cols={1} rows={1} loop autoplay={3000} hideArrow>
            <Carousel.Item className='flex flex-row'>
                <div className='flex flex-col mt-20 ml-20'>
                    <h1 className='text-semibold text-[40px]'>We're socially celebrated</h1>
                    <p className='font-normal text-grey-400'>Our customer centric approach has got us amazing <br/> reviews. Be it any platform , you will see many users <br/> recommending our service</p>
                </div>
                <img src='https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/slide-one-1a7d9a00252d397c615e4d3f9e14c1f8950ad546171c0d778494fb196bd31c5d.webp' alt='social' className='w-[1260px]'/>
            </Carousel.Item>
            <Carousel.Item className='flex flex-row'>
                <div className='flex flex-col mt-20 ml-20'>
                    <h1 className='text-semibold text-[40px]'>Ready to serve you in 40+ cities</h1>
                    <p className='font-normal text-grey-400'>Think of a city and we're mostly there . The next time <br/> you plan on exploring a city , know that your means of <br/> transport is sorted with Royal Brothers. #BhaiHaiNa</p>
                </div>
                <img src='https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/slide-two-152ea05aae51c961ff3777509bd1e8c0f5d66fa663f8dd91625581ef7f70a264.webp' alt='cities' className='w-[1260px]'/>
            </Carousel.Item>
            <Carousel.Item className='flex flex-row'>      
                <div className='flex flex-col mt-20 ml-20' >
                    <h1 className='text-semibold text-[40px]'>Bikes maintained so good, <br/> you will feel it is brand-new</h1>
                    <p className='font-normal text-grey-400'>We obsess on giving you the best possible <br/> experience. This is not only with well serviced bikes <br/> but also with a 24/7 support team available just a call <br/> away.</p>
                </div>
                <img src='https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/slide-three-4fb40ac9520409dd84fd281555d8546af4bac62d70f8ef8879e050c056f717d1.webp' alt='brand-new' className='w-[1260px]'/>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Quality