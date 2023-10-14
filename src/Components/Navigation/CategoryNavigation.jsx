import React from 'react';
import fourSquareIcon from "../../assets/four-squares-line-icon.svg";
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Category 1', link: '/category1' },
  { name: 'Category 2', link: '/category2' },
  { name: 'Category 3', link: '/category3' },
  { name: 'Category 4', link: '/category4' },
  { name: 'Category 5', link: '/category5' },
  { name: 'Category 6', link: '/category6' },
  
];

export default function CategoryNavigation() {
  return (
    <div>
      <div>
        <div className="parent-title flex items-center space-x-3 p-4 bg-black">
          <img src={fourSquareIcon} className='w-4 h-4' alt="" />
          <span className='text-white uppercase'>Categories</span>
        </div>
        <div className="vertical-menu">
          <ul className="navbar-nav">
            {categories.map((category, index) => (
                  <Link to={category.link} key={index} >
              <li className='bg-green-800 hover:bg-green-400 text-white p-4 border-t-2 cursor-pointer'>
              {category.name}
              </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
