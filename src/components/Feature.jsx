import React from 'react'
import Carousel from 'react-grid-carousel';
const Feature = () => {
  return (
    <div className='bg-grey '>
        <h3 className='flex flex-center items-center ml-80 text-[30px]'>FEATURED IN</h3>
        <Carousel cols={3} rows={1} gap={10} autoplay={5500} loop hideArrow>
            <Carousel.Item>
                <img src='https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/the_indian_express-d3809f6b1ea2a6dad58cb88c7cfb12d2d02f4c5b9d824189e9f22f8fa50c9043.webp' alt='image1' className='w-[200px] h-[80px]'/>
            </Carousel.Item>
            <Carousel.Item>
                <img src='https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/news3-43c70ca352d9068552cf89c3beab348aeb0f3809f9e03f875d04d2d53adce4c3.webp' alt='image2' className='w-[200px] h-[80px]'/>
            </Carousel.Item>
            <Carousel.Item>
                <img src='https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/news1-b24dc0cbf20ca76e5d6aa720d75a1e7ce3cb94a22d7c8e8875726079aaf0063d.webp' alt='image3' className='w-[200px] h-[80px]' />
            </Carousel.Item>
            <Carousel.Item>
                <img src='https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/news2-ad81afc2ecab67b4381261a5c4e198005671a60b0ea2e80f8b0c9d30faecfe02.webp' alt='image4' className='w-[200px] h-[80px]'/>
            </Carousel.Item>
            <Carousel.Item>
                <img src='https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/money_control-1e922947692f4b9e7026792b752b3e522d25b58371f7694a1329eec4d27704d0.webp' alt='image5' className='w-[200px] h-[80px]'/>
            </Carousel.Item>
            <Carousel.Item>
                <img src='https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/the_better_india-ab4c8f51ccf180800146372fe17e31ae68c094b1c3aa2e2c3136365ba979112b.webp' alt='image6' className='w-[200px] h-[80px]'/>
            </Carousel.Item>
            <Carousel.Item>
                <img src='https://d36g7qg6pk2cm7.cloudfront.net/assets/landing_page/inc_42-a5aed5b3ce4b4ff623fbf341293fb0be45d9ad9c53c2454dce2ee1a1ce06e8b6.webp' alt='image7' className='w-[200px] h-[80px]'/>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Feature