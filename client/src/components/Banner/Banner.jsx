import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import bannerImage from '../../assets/images/banner-ecommerce.jpeg';

function Banner() {
  return (
    <div
      className='flex min-h-[750px] w-full items-center justify-center bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className='container mx-auto flex flex-col items-center justify-center gap-5'>
        <h1 className='text-[42px] font-normal leading-[52px] text-primaryColor max-sm:text-[32px]'>Fasalo Shop</h1>
        <div className='mx-5 mb-4 text-center leading-[24px] text-primaryColor'>
          Hãy biến những ngày kỷ niệm của bạn trở nên đặc biệt hơn với vẻ đẹp tinh tế.
        </div>
        <div className='w-[170px]'>
          <Link to={'/'}>
            <Button text={'Mua ngay'} isPrimary />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;