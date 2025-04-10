/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
// components

import IndexDropdown from '@components/AdminComponents/Dropdowns/IndexDropdown.jsx';

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className='navbar-expand-lg fixed top-0 z-50 flex w-full flex-wrap items-center justify-between bg-white px-2 py-3 shadow'>
        <div className='container mx-auto flex flex-wrap items-center justify-between px-4'>
          <div className='relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start'>
            <Link
              to='/'
              className='text-blueGray-700 mr-4 inline-block whitespace-nowrap py-2 text-sm font-bold uppercase leading-relaxed'
            >
              Notus React
            </Link>
            <button
              className='block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className='fas fa-bars'></i>
            </button>
          </div>
          <div
            className={
              'flex-grow items-center bg-white lg:flex lg:bg-opacity-0 lg:shadow-none' +
              (navbarOpen ? ' block' : ' hidden')
            }
            id='example-navbar-warning'
          >
            <ul className='mr-auto flex list-none flex-col lg:flex-row'>
              <li className='flex items-center'>
                <a
                  className='hover:text-blueGray-500 text-blueGray-700 flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2'
                  href='https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index-navbar'
                >
                  <i className='text-blueGray-400 far fa-file-alt leading-lg mr-2 text-lg' /> Docs
                </a>
              </li>
            </ul>
            <ul className='flex list-none flex-col lg:ml-auto lg:flex-row'>
              <li className='flex items-center'>
                <IndexDropdown />
              </li>
              <li className='flex items-center'>
                <a
                  className='hover:text-blueGray-500 text-blueGray-700 flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2'
                  href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F'
                  target='_blank'
                >
                  <i className='text-blueGray-400 fab fa-facebook leading-lg text-lg' />
                  <span className='ml-2 inline-block lg:hidden'>Share</span>
                </a>
              </li>

              <li className='flex items-center'>
                <a
                  className='hover:text-blueGray-500 text-blueGray-700 flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2'
                  href='https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20React%20UI%20Kit%20and%20Admin.%20Let%20Notus%20React%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20'
                  target='_blank'
                >
                  <i className='text-blueGray-400 fab fa-twitter leading-lg text-lg' />
                  <span className='ml-2 inline-block lg:hidden'>Tweet</span>
                </a>
              </li>

              <li className='flex items-center'>
                <a
                  className='hover:text-blueGray-500 text-blueGray-700 flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2'
                  href='https://github.com/creativetimofficial/notus-react?ref=nr-index-navbar'
                  target='_blank'
                >
                  <i className='text-blueGray-400 fab fa-github leading-lg text-lg' />
                  <span className='ml-2 inline-block lg:hidden'>Star</span>
                </a>
              </li>

              <li className='flex items-center'>
                <button
                  className='bg-lightBlue-500 active:bg-lightBlue-600 mb-3 ml-3 rounded px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none lg:mb-0 lg:mr-1'
                  type='button'
                >
                  <i className='fas fa-arrow-alt-circle-down'></i> Download
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
