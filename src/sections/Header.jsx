import { useState, useEffect } from 'react'
import { Link as LinkScroll } from 'react-scroll'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [hasScroll, setHasScroll] = useState(false);

    useEffect(() => {
        function handelScroll() {
            setHasScroll(window.scrollY > 32);
        };
        window.addEventListener('scroll', handelScroll)

        return () => {
            window.removeEventListener('scroll', handelScroll);
        }
    }, [window.scrollY]);

    const Navlink = ({ title, to }) => (
        <LinkScroll onClick={() => setIsOpen(false)} activeClass='nav-active' to={to} smooth spy  className="base-bold uppercase text-p4 transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
            { title }
        </LinkScroll>
    )

    return (
        <header className={`fixed top-0 left-0 w-full z-50 h-24 transition-all duration-500 ${hasScroll ? 'bg-black-100 h-[70px] backdrop-blur-lg' : ''}`}>
            <div className="container  h-full flex items-center max-lg:px-5">
                <a href='/' className='lg:hidden flex-1 cursor-pointer z-2'>
                    <img src="/images/xora.svg" alt="logo" width={hasScroll ? 90 :115} height={hasScroll ? 45 : 55} />
                </a>
                <div className={`w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 ${isOpen ? "max-lg:opacity-100" : "max-lg:opacity-0"}`}>
                    <div className='maw-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4'>
                        <nav className='max-lg:relative max-lg:z-2 max-lg:my-auto'>
                            <ul className='flex max-lg:block max-lg:px-12'>
                                <li className='nav-li'>
                                    <Navlink title='features' to="features"/>
                                    <div className='dot' />
                                    <Navlink title='pricing' to="pricing"/>
                                </li>
                                <li className='nav-logo'>
                                    <LinkScroll to="hero" offset={-100} spy smooth className="max-lg:hidden transition-transform duration-500 cursor-pointer">
                                        <img src="/images/xora.svg" alt="logo" width={160} height={55} />
                                    </LinkScroll>
                                </li>
                                <li className='nav-li'>
                                    <Navlink title='faq' to="faq"/>
                                    <div className='dot' />
                                    <Navlink title='download' to="download"/>
                                </li>
                            </ul>
                        </nav>
                    </div>  
                </div>
                <button onClick={() => setIsOpen(isOpen => !isOpen)} className='lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center'>
                    <img src={`/images/${isOpen ? 'close' : 'magic'}.svg`} alt="magic" className='size-1/2 object-contain' />
                </button>
            </div>
        </header>
    )
}

export default Header
