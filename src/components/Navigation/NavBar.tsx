import Link from 'next/link';
import Image from 'next/legacy/image';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { twMerge } from 'tailwind-merge';
import Container from '../Utils/Container';
import { links } from '../../constants/links';

const NavLink = (props: {href: string, label: string}) => (
    <Link legacyBehavior href={props.href} passHref>
        <a className="cursor-pointer text-xl transition hover:text-primary">
            {props.label}
        </a>
    </Link>
);

const NavLinkGroup = () => (
    <ul className="max-md:items-end max-md:mt-5 flex flex-col gap-y-4 md:flex-row md:gap-x-8">
        <NavLink href="/" label="Home" />
        <NavLink href="/projects" label="Projects" />
        <NavLink href="/notams" label="NOTAMs" />
        <NavLink href="/map" label="Map" />
        <NavLink href={links.docs} label="Documentation" />
    </ul>
);

const NavBar = () => {
    const { route } = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const scrollHandler = () => {
        setIsScrolled(window.scrollY > 2);
    };

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [isScrolled]);

    let bgClass;
    if (route.indexOf('map') !== -1) {
        bgClass = 'bg-secondary-accent-dark/90';
    } else if (isScrolled || isOpen) {
        bgClass = 'bg-secondary-accent-dark';
    } else {
        bgClass = 'bg-transparent';
    }

    return (
        <nav
            className={twMerge('fixed w-full py-4 text-white transition', bgClass)}
            style={{ zIndex: '9999' }}
        >
            <Container className="flex items-center justify-between">
                <Link legacyBehavior href="/">
                    <Image className="cursor-pointer" src="/svg/tail/tail.svg" alt="FlyByWire Simulations" width={30} height={30} />
                </Link>

                <Container className="hidden md:block">
                    <NavLinkGroup />
                </Container>

                <div className="md:hidden">
                    {isOpen
                        ? <CloseOutlined style={{ fontSize: '20px' }} className="cursor-pointer text-white" onClick={handleClick} />
                        : <MenuOutlined style={{ fontSize: '20px' }} className="cursor-pointer text-white" onClick={handleClick} />}
                </div>

            </Container>

            <Container className={twMerge('text-center', isOpen ? 'md:hidden' : 'hidden')}>
                <NavLinkGroup />
            </Container>

            <div className={twMerge('absolute h-screen w-full', !isOpen && 'hidden')} onClick={handleClick} />
        </nav>
    );
};

export default NavBar;
