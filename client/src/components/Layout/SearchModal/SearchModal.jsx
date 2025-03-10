import React from 'react';
import { TfiClose } from 'react-icons/tfi';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearch } from '@redux/features/searchDrawer/searchSlice';
import Dropdown from '@components/Dropdown/Dropdown';
import Input from '@components/Input/Input';
import Button from '@components/Button/Button';

function SearchModal() {
  const isOpen = useSelector((state) => state.search.isOpen);
  const dispatch = useDispatch();
  const handleToggleSearchModal = () => {
    dispatch(toggleSearch());
  };
  return (
    <div>
      <div
        className={`fixed inset-0 z-40 bg-black ${isOpen ? '!visible !bg-opacity-50' : 'invisible bg-opacity-0'} transition-all duration-300 ease-in`}
        onClick={handleToggleSearchModal}
      ></div>
      <div
        className={`fixed left-0 right-0 top-0 z-[9999] h-[600px] w-full -translate-y-full bg-white transition-transform duration-300 ease-in ${isOpen ? '!translate-y-0' : ''}`}
      >
        <TfiClose
          className='absolute right-5 top-5 cursor-pointer text-2xl text-primaryColor opacity-100 transition-all duration-150 ease-in hover:-rotate-90 active:opacity-0'
          onClick={handleToggleSearchModal}
        />
        <div className='flex flex-col items-center justify-center'>
          <h1 className='p-7 text-2xl text-primaryColor'>Bạn muốn tìm món đồ nào?</h1>
          <div className='flex items-center justify-center'>
            <Dropdown className='h-[40px] w-[300px]'></Dropdown>
            <Input placeholder='Tìm kếm sản phẩm..' />
            <Button className='w-[170px]'>Tìm kiếm</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
