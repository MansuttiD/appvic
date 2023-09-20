'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';


const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="text-[18px] py-4 text-dark_blue overflow-x-hidden">
      <div className="flex justify-between items-center px-2 overflow-x-hidden max-w-xs mx-auto sm:max-w-xl md:max-w-[82rem] ">
                <div>
          {/* Imagen de escritorio */}
          <Link href="/">
            <Image
              src="/assets/img/header/logo.svg"
              width={180}
              height={180}
              alt="Logo Desktop"
              className="hidden md:block"
            />
          </Link>

          {/* Imagen móvil */}
          <Link href="/">
            <Image
              src="/assets/img/header/logoimago.svg"
              width={40}
              height={40}
              alt="Logo Mobile"
              className="block md:hidden"
            />
          </Link>
        </div>
        <div className="block text-sm text-center md:hidden">
          <p>Bienvenido,</p>
          <p className='font-black'>Daniel Mansutti</p>
        </div>
        <nav
          className={`${menuActive ? 'menu-active' : 'menu-inactive'}  menu`}
        >
          <ul className="flex flex-col justify-center items-center font-medium text-white md:flex-row gap-[10px] mb-3 md:gap-[60px] md:mb-0 md:text-black">
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Registrate</Link>
            </li>
            <li>
              <Link href="/#">Soporte</Link>
            </li>
            <li>
              <Link href="/"><HiOutlineUserCircle className="text-xl"/></Link>
            </li>

          </ul>
        </nav>
        <div onClick={handleMenuActive} className="md:hidden">
        <Image src={'./assets/img/header/burger.svg'} 
                      width={20}
                      height={20}
                       alt="botonharmburguer" />
        </div>
      </div>
    </header>
  );
};

export default Header;