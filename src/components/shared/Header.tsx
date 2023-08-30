'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="text-[18px] py-4 text-dark_blue overflow-x-hidden bg-general_backgound">
      <div className="flex justify-between overflow-x-hidden max-w-xs mx-auto sm:max-w-xl md:max-w-6xl ">
        <div className="w-36">
          <Link href="/">
            <Image
              src={'./assets/img/header/logo.svg'}
              width={500}
              height={500}
              alt="Logo"
              className="w-full h-full"
            />
          </Link>
        </div>
        <nav
          className={`${menuActive ? 'menu-activce' : 'menu-inactive'}  menu`}
        >
          <ul className="flex flex-col justify-center items-center font-medium text-white md:flex-row gap-[10px] mb-3 md:gap-[60px] md:mb-0 md:text-black">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/register">Lista de Espera</Link>
            </li>
            <li>
              <Link href="/#Faq">FAQ</Link>
            </li>
            {/* <li>
            <Link href="/#Blog">Blog</Link>
            </li> */}
          </ul>
          <div className="flex flex-col md:flex-row gap-[20px] items-center">
            <Link href="/register">
              <button className=" bg-white w-full text-blue-500 border border-blue-500 md:blue_gradient-2 md:text-white px-[30px] py-[6px] rounded-[10px] font-medium cursor-pointer">
                Lista de Espera
              </button>
            </Link>
            {/* <button className="bg-white w-full  text-blue-500 border border-blue-500 px-[30px] py-[6px] font-medium rounded-xl shadow-button">
              Ingresar
            </button> */}
          </div>
        </nav>
        <div onClick={handleMenuActive} className="md:hidden">
        <Image src={'./assets/img/header/burger.svg'} 
                      width={500}
                      height={500}
                       alt="botonharmburguer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
