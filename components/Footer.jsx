import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-100 py-8'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-4 gap-8'>
          <div>
            <a
              href='/index.html'
              className='text-3xl font-bold'>
              <Image
                src='/logo.svg'
                classNameName='h-10 rounded-lg'
                alt='kitchen'
                width={100}
                height={100}
              />
            </a>
            <p className='text-gray-600 mt-2 text-sm'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>LWS Kitchen</h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-gray-600 hover:[#fd088f]'>
                  About us
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-600 hover:[#fd088f]'>
                  Careers
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-600 hover:[#fd088f]'>
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-600 hover:[#fd088f]'>
                  Feedback
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Legal</h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-gray-600 hover:[#fd088f]'>
                  Terms
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-600 hover:[#fd088f]'>
                  Conditions
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-600 hover:[#fd088f]'>
                  Cookies
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-600 hover:[#fd088f]'>
                  Copyright
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Follow</h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#'
                  className='text-gray-600 hover:[#fd088f]'>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-600 hover:[#fd088f]'>
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-600 hover:[#fd088f]'>
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-gray-600 hover:[#fd088f]'>
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
