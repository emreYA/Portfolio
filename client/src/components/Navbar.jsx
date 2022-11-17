import React, { useState } from "react";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { CalendarIcon, MenuIcon, MoonIcon, ShoppingCartIcon, XIcon } from '@heroicons/react/outline'
import {NavLink, Link} from "react-router-dom"
import Cart from './Cart';
import logo from '../img/logo.png'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { logout } from '../redux/userSlice'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Shop', href: '/shop', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const {currentUser} = useSelector(state=>state.user)
  const dispatch = useDispatch()

  const handleSignOut = () => {
    dispatch(logout())
  }

  return (
<Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
        {openCart && <Cart setOpenCart={setOpenCart} />}
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md  text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink activeClassName="active" to={item.href} style={{color:"inherit", textDecoration:"none"}}>
                      <span
                        key={item.name}
                        className={classNames(
                          item.current ? 'text-blue-900' : 'text-gray-700 hover:text-gray-900',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </span>
                      </NavLink>
                    ))}
                  <button
                    type="button"
                    className="p-1 rounded-full text-gray-400 hover:text-yellow-500 focus:outline-none"
                  >
                    <span className="sr-only">Dark/light mode</span>
                    <MoonIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link to="/hireme">
                <button
                  type="button"
                  className="bg-indigo-600 p-1 mr-3 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">Calendar</span>
                  <CalendarIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                </Link>
                <button
                onClick={() => setOpenCart(true)} 
                  type="button"
                  className="bg-indigo-600 p-1 mr-3 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">Cart</span>
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                { currentUser ? (
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={currentUser.img}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="z-20 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link to={"/profile"} style={{color:"inherit", textDecoration:"none"}}>
                          <span
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </span>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                          onClick={handleSignOut}
                          href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                  
                </Menu> ) : (
                  <Link to="/login">
                      <span
                      class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                    Login
                    </span>
                    </Link>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <NavLink activeClassName="active" to={item.href} style={{color:"inherit", textDecoration:"none"}}>
                <Disclosure.Button
                  key={item.name}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-700 hover:text-gray-900 mobile-nav-button',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
                </NavLink>
              ))}
                  <button
                    type="button"
                    className="p-1 rounded-full text-gray-400 hover:text-yellow-500 focus:outline-none"
                  >
                    <span className="sr-only">Dark/light mode</span>
                    <MoonIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
        
    </Disclosure>
  )
}

export default Navbar