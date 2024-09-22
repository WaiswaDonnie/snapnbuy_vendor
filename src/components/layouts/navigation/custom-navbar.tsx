import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';
import { useWindowSize } from 'react-use';
import { useUI } from '@/contexts/ui.context';
import Logo from '@/components/ui/logo';
import AuthorizedMenu from './authorized-menu';
import { RESPONSIVE_WIDTH } from '@/utils/constants';
import LinkButton from '@/components/ui/link-button';
import VisitStore from '../topbar/visit-store';

const CustomNavbar = () => {
  const { t } = useTranslation();
  const { toggleSidebar } = useUI();
  const { width } = useWindowSize();
  const { locale } = useRouter();
  
  const handleToggleSidebar = () => {
    toggleSidebar();
  };

  return (
    <header className="fixed top-0 z-40 w-full bg-white shadow">
      <nav className="flex items-center px-5 md:px-8">
        <div className="relative flex w-full flex-1 items-center">
          <div className="flex items-center">
            {/* Hamburger menu for mobile view */}
            <motion.button
              whileTap={{ scale: 0.88 }}
              onClick={handleToggleSidebar}
              className="group flex h-5 w-5 shrink-0 cursor-pointer flex-col justify-center space-y-1 me-4 focus:text-accent focus:outline-none lg:hidden"
            >
              <span className="h-0.5 rounded-full bg-gray-600 transition-[width] group-hover:bg-accent" />
              <span className="h-0.5 w-full rounded-full bg-gray-600 group-hover:bg-accent" />
              <span className="h-0.5 w-3/4 rounded-full bg-gray-600 transition-[width] group-hover:bg-accent" />
            </motion.button>

            {/* Logo */}
            <div className="flex h-16 shrink-0 transition-[width] duration-300 me-4 lg:h-[76px] lg:border-solid lg:border-gray-200/80 lg:me-8 lg:border-e">
              <Logo />
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex flex-grow justify-center lg:justify-start">
            <ul className="hidden lg:flex space-x-8">
              <li>
                <Link href="/home">
                  <p className="text-gray-700 hover:text-accent">{"Home"}</p>
                </Link>
              </li>
              <li>
                <Link href="/pricing">
                  <p className="text-gray-700 hover:text-accent">{"Pricing"}</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Right side (Login/Signup) */}
          <div className="flex items-center space-x-4 ml-auto">
          <div className="hidden border-gray-200/80 px-6 py-5 border-e 2xl:block">
                
                </div>

                <div className="hidden px-6 py-5 md:block">
                <LinkButton
                    href={"Routes.shop.create"}
                    size="small"
                    className="px-3.5"
                  >
                    BECOME A SELLER
                  </LinkButton>
             
                </div>
            {/* <Link href="/login">
              <p className="text-gray-700 hover:text-accent">
                {t('common:text-login-signup')}
              </p>
            </Link> */}
          </div>

         
        </div>
      </nav>
    </header>
  );
};

export default CustomNavbar;
