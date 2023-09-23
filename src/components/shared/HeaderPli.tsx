'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';

const HeaderPli = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="text-[18px] py-2 text-dark_blue overflow-x-hidden">
      <div className="flex justify-between items-center px-2 overflow-x-hidden max-w-xs mx-auto sm:max-w-xl md:max-w-[82rem] ">
        <div className="flex gap-5">
          {/* Imagen de escritorio */}
          <Link href="/">
            <Image
              src="/assets/img/header/logo.svg"
              width={120}
              height={120}
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
          <ul className="flex flex-col justify-center items-center font-medium text-white md:flex-row gap-[10px] mb-3 md:gap-[60px] md:mb-0">
            <li>
              <Link className="text-soft_blue text-[13px]" href="/login">
                Transacciones
              </Link>
            </li>
            <li>
              <Link className="text-soft_blue text-[13px]" href="/register">
                Cuentas
              </Link>
            </li>
            <li>
              <Link className="text-soft_blue text-[13px]" href="/#">
                Historial de Tx
              </Link>
            </li>
          </ul>
        </div>
        <div className="block text-sm text-center md:hidden">
          <p>Bienvenido,</p>
          <p className="font-black">Daniel Mansutti</p>
        </div>
        <nav
          className={`${menuActive ? 'menu-active' : 'menu-inactive'}  menu`}
        >
          <ul className="flex flex-col justify-center items-center font-medium text-white md:flex-row gap-[10px] mb-3 md:gap-[60px] md:mb-0 md:text-black">
            <li className="text-soft_blue text-[13px]">
              Volver al modo usuario
            </li>
            <li>
              <Link href="/">
                <HiOutlineUserCircle className="text-xl" />
              </Link>
            </li>
          </ul>
        </nav>
        <div onClick={handleMenuActive} className="md:hidden">
          <Image
            src={'./assets/img/header/burger.svg'}
            width={20}
            height={20}
            alt="botonharmburguer"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderPli;
