import React from 'react';
import PropTypes from 'prop-types';
import boostrap from '@assets/img/bootstrap.jpg';
import angular from '@assets/img/angular.jpg';
import react from '@assets/img/react.jpg';
import vue from '@assets/img/vue.jpg';
import sketch from '@assets/img/sketch.jpg';

import team1 from '@assets/img/team-1-800x800.jpg';
import team2 from '@assets/img/team-2-800x800.jpg';
import team3 from '@assets/img/team-3-800x800.jpg';
import team4 from '@assets/img/team-4-470x470.png';

// components

import TableDropdown from '@components/AdminComponents/Dropdowns/TableDropdown.jsx';

export default function CardTable({ color }) {
  return (
    <>
      <div
        className={
          'relative mb-6 flex w-full min-w-0 flex-col break-words rounded shadow-lg ' +
          (color === 'light' ? 'bg-white' : 'bg-lightBlue-900 text-white')
        }
      >
        <div className='mb-0 rounded-t border-0 px-4 py-3'>
          <div className='flex flex-wrap items-center'>
            <div className='relative w-full max-w-full flex-1 flex-grow px-4'>
              <h3 className={'text-lg font-semibold ' + (color === 'light' ? 'text-blueGray-700' : 'text-white')}>
                Card Tables
              </h3>
            </div>
          </div>
        </div>
        <div className='block w-full overflow-x-auto'>
          {/* Projects table */}
          <table className='w-full border-collapse items-center bg-transparent'>
            <thead>
              <tr>
                <th
                  className={
                    'whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }
                >
                  Project
                </th>
                <th
                  className={
                    'whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }
                >
                  Budget
                </th>
                <th
                  className={
                    'whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }
                >
                  Status
                </th>
                <th
                  className={
                    'whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }
                >
                  Users
                </th>
                <th
                  className={
                    'whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }
                >
                  Completion
                </th>
                <th
                  className={
                    'whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700')
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className='flex items-center whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs'>
                  <img src={boostrap} className='h-12 w-12 rounded-full border bg-white' alt='...'></img>{' '}
                  <span className={'ml-3 font-bold ' + +(color === 'light' ? 'text-blueGray-600' : 'text-white')}>
                    Argon Design System
                  </span>
                </th>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  $2,500 USD
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  <i className='fas fa-circle mr-2 text-orange-500'></i> pending
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  <div className='flex'>
                    <img
                      src={team1}
                      alt='...'
                      className='border-blueGray-50 h-10 w-10 rounded-full border-2 shadow'
                    ></img>
                    <img
                      src={team2}
                      alt='...'
                      className='border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow'
                    ></img>
                    <img
                      src={team3}
                      alt='...'
                      className='border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow'
                    ></img>
                    <img
                      src={team4}
                      alt='...'
                      className='border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow'
                    ></img>
                  </div>
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  <div className='flex items-center'>
                    <span className='mr-2'>60%</span>
                    <div className='relative w-full'>
                      <div className='flex h-2 overflow-hidden rounded bg-red-200 text-xs'>
                        <div
                          style={{ width: '60%' }}
                          className='flex flex-col justify-center whitespace-nowrap bg-red-500 text-center text-white shadow-none'
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-right align-middle text-xs'>
                  <TableDropdown />
                </td>
              </tr>
              <tr>
                <th className='flex items-center whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs'>
                  <img src={angular} className='h-12 w-12 rounded-full border bg-white' alt='...'></img>{' '}
                  <span className={'ml-3 font-bold ' + +(color === 'light' ? 'text-blueGray-600' : 'text-white')}>
                    Angular Now UI Kit PRO
                  </span>
                </th>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  $1,800 USD
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  <i className='fas fa-circle mr-2 text-emerald-500'></i> completed
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  <div className='flex'>
                    <img
                      src={team1}
                      alt='...'
                      className='border-blueGray-50 h-10 w-10 rounded-full border-2 shadow'
                    ></img>
                    <img
                      src={team2}
                      alt='...'
                      className='border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow'
                    ></img>
                    <img
                      src={team3}
                      alt='...'
                      className='border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow'
                    ></img>
                    <img
                      src={team4}
                      alt='...'
                      className='border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow'
                    ></img>
                  </div>
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  <div className='flex items-center'>
                    <span className='mr-2'>100%</span>
                    <div className='relative w-full'>
                      <div className='flex h-2 overflow-hidden rounded bg-emerald-200 text-xs'>
                        <div
                          style={{ width: '100%' }}
                          className='flex flex-col justify-center whitespace-nowrap bg-emerald-500 text-center text-white shadow-none'
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-right align-middle text-xs'>
                  <TableDropdown />
                </td>
              </tr>
              <tr>
                <th className='flex items-center whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs'>
                  <img src={sketch} className='h-12 w-12 rounded-full border bg-white' alt='...'></img>{' '}
                  <span className={'ml-3 font-bold ' + +(color === 'light' ? 'text-blueGray-600' : 'text-white')}>
                    Black Dashboard Sketch
                  </span>
                </th>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  $3,150 USD
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  <i className='fas fa-circle mr-2 text-red-500'></i> delayed
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  <div className='flex'>
                    <img
                      src={team1}
                      alt='...'
                      className='border-blueGray-50 h-10 w-10 rounded-full border-2 shadow'
                    ></img>
                    <img
                      src={team2}
                      alt='...'
                      className='border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow'
                    ></img>
                    <img
                      src={team3}
                      alt='...'
                      className='border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow'
                    ></img>
                    <img
                      src={team4}
                      alt='...'
                      className='border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow'
                    ></img>
                  </div>
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  <div className='flex items-center'>
                    <span className='mr-2'>73%</span>
                    <div className='relative w-full'>
                      <div className='flex h-2 overflow-hidden rounded bg-red-200 text-xs'>
                        <div
                          style={{ width: '73%' }}
                          className='flex flex-col justify-center whitespace-nowrap bg-red-500 text-center text-white shadow-none'
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-right align-middle text-xs'>
                  <TableDropdown />
                </td>
              </tr>
              <tr>
                <th className='flex items-center whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs'>
                  <img src={react} className='h-12 w-12 rounded-full border bg-white' alt='...'></img>{' '}
                  <span className={'ml-3 font-bold ' + +(color === 'light' ? 'text-blueGray-600' : 'text-white')}>
                    React Material Dashboard
                  </span>
                </th>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  $4,400 USD
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  <i className='fas fa-circle mr-2 text-teal-500'></i> on schedule
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  <div className='flex'>
                    <img
                      src={team1}
                      alt='...'
                      className='border-blueGray-50 h-10 w-10 rounded-full border-2 shadow'
                    ></img>
                    <img
                      src={team2}
                      alt='...'
                      className='border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow'
                    ></img>
                    <img
                      src={team3}
                      alt='...'
                      className='border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow'
                    ></img>
                    <img
                      src={team4}
                      alt='...'
                      className='border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow'
                    ></img>
                  </div>
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  <div className='flex items-center'>
                    <span className='mr-2'>90%</span>
                    <div className='relative w-full'>
                      <div className='flex h-2 overflow-hidden rounded bg-teal-200 text-xs'>
                        <div
                          style={{ width: '90%' }}
                          className='flex flex-col justify-center whitespace-nowrap bg-teal-500 text-center text-white shadow-none'
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-right align-middle text-xs'>
                  <TableDropdown />
                </td>
              </tr>
              <tr>
                <th className='flex items-center whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs'>
                  <img src={vue} className='h-12 w-12 rounded-full border bg-white' alt='...'></img>{' '}
                  <span className={'ml-3 font-bold ' + +(color === 'light' ? 'text-blueGray-600' : 'text-white')}>
                    React Material Dashboard
                  </span>
                </th>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  $2,200 USD
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  <i className='fas fa-circle mr-2 text-emerald-500'></i> completed
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  <div className='flex'>
                    <img
                      src={team1}
                      alt='...'
                      className='border-blueGray-50 h-10 w-10 rounded-full border-2 shadow'
                    ></img>
                    <img
                      src={team2}
                      alt='...'
                      className='border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow'
                    ></img>
                    <img
                      src={team3}
                      alt='...'
                      className='border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow'
                    ></img>
                    <img
                      src={team4}
                      alt='...'
                      className='border-blueGray-50 -ml-4 h-10 w-10 rounded-full border-2 shadow'
                    ></img>
                  </div>
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 align-middle text-xs'>
                  <div className='flex items-center'>
                    <span className='mr-2'>100%</span>
                    <div className='relative w-full'>
                      <div className='flex h-2 overflow-hidden rounded bg-emerald-200 text-xs'>
                        <div
                          style={{ width: '100%' }}
                          className='flex flex-col justify-center whitespace-nowrap bg-emerald-500 text-center text-white shadow-none'
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className='whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-right align-middle text-xs'>
                  <TableDropdown />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: 'light'
};

CardTable.propTypes = {
  color: PropTypes.oneOf(['light', 'dark'])
};
