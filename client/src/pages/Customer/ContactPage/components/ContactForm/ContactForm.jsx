import React from 'react';
import Input from '@components/Input/Input';
import Textarea from '@components/Textarea/Textarea';
import Button from '@components/Button/Button';

function ContactForm() {
  return (
    <div className='p-5 md:w-7/12 md:p-12'>
      <h4 className='text-2xl'>Gửi lời nhắn cho chúng tôi</h4>
      <hr className='my-[20px]' />
      <div className='flex h-[400px] flex-col gap-5'>
        <div className='flex h-[400px] flex-col gap-5'>
          <div className='flex flex-col gap-5 sm:flex-row'>
            <Input placeholder={'Họ và tên'} name={'name'} />
            <Input placeholder={'Email'} name={'email'} />
          </div>
          <Textarea placeholder={'Ghi chú'} />
        </div>
        <Button size={'medium'}>Gửi</Button>
      </div>
    </div>
  );
}

export default ContactForm;
