import React, { useEffect, useState, useRef } from "react";
import './Home.scss'
import logo from '../assets/logo.png'
import backgroundNewYear from '../assets/backgroundNewYear.png'
import backgroundValentine from '../assets/backgroundValentine.png'
import backgroundBirthday from '../assets/backgroundBirthday.png'
import backgroundChristmas from '../assets/backgroundChristmas.png'
import backgroundInternationalWomenDay from '../assets/backgroundInternationalWomenDay.png'
import backgroundVietnameseWomenDay from '../assets/backgroundVietnameseWomenDay.png'
import backgroundMoonFestival from '../assets/backgroundMoonFestival.png'
import ListProduct from "./ListProduct";
import Footer from "./Footer";

const Home = () => {
    const menuRef = useRef(null);
    const footerRef = useRef(null);
    const [isFooterVisible, setIsFooterVisible] = useState(false);
    const [menuHeight, setMenuHeight] = useState("90vh");
    const [numberScroll, setNumberScroll] = useState(0);
    const [lastScrollY, setLastScrollY] = useState(0);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFooterVisible(entry.isIntersecting);
            },
            { root: null, threshold: 0.1 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const updateMenuHeight = () => {
            if (menuRef.current && footerRef.current) {
                const menuRect = menuRef.current.getBoundingClientRect();
                const footerRect = footerRef.current.getBoundingClientRect();

                if (isFooterVisible) {
                    setMenuHeight(`${footerRect.top - menuRect.top}px`);
                } else {
                    setMenuHeight("90vh");
                }
            }
        };

        window.addEventListener("scroll", updateMenuHeight);
        updateMenuHeight(); // Gọi khi load trang

        return () => {
            window.removeEventListener("scroll", updateMenuHeight);
        };
    }, [lastScrollY]);

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollContainerRef.current) return;

            const currentScrollY = scrollContainerRef.current.scrollTop;
            console.log("Viewport currentScrollY:", currentScrollY);

            if (currentScrollY > lastScrollY) {
                setNumberScroll(prev => prev + 1);
            } else if (currentScrollY < lastScrollY) {
                setNumberScroll(prev => prev - 1);
            }

            setLastScrollY(currentScrollY);
            console.log("Viewport numberScroll:", numberScroll);
        };

        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, [lastScrollY]);

    console.log("Viewport numberScroll:", numberScroll);
    console.log("Viewport currentScrollY:", lastScrollY);

    return (
        <div className="home-page-wrapper" ref={scrollContainerRef}>
            <div className="home-page-wrap">
                <div className="home-page-navigation">
                    <div className="home-page-navigation-logo">
                        <div className="home-navigation-logo">
                            <img src={logo} alt="logo-web" />
                        </div>
                        <div className="home-navigation-name">
                            <span>Happy Card</span>
                        </div>
                    </div>
                    <div className="header-navigate">
                        <div className="navigation-item">
                            <nav className="nav-item">
                                <div className="bar-item" style={{ backgroundImage: `url(${backgroundNewYear})` }}>
                                    <span>New Year</span>
                                </div>
                                <div className="bar-item" style={{ backgroundImage: `url(${backgroundValentine})` }}>
                                    <span>Valentine</span>
                                </div>
                                <div className="bar-item" style={{backgroundImage: `url(${backgroundInternationalWomenDay})`}}>
                                    <span>International Women's Day</span>
                                </div>
                                <div className="bar-item" style={{backgroundImage: `url(${backgroundMoonFestival})`}}>
                                    <span>Moon Festival</span>
                                </div>
                                <div className="bar-item" style={{backgroundImage: `url(${backgroundVietnameseWomenDay})`}}>
                                    <span>Vietnamese Women's Day</span>
                                </div>
                                <div className="bar-item" style={{backgroundImage: `url(${backgroundChristmas})`}}>
                                    <span>Christmas</span>
                                </div>
                                <div className="bar-item" style={{backgroundImage: `url(${backgroundBirthday})`}}>
                                    <span>Birthday</span>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="left-menu-wrapper"
                     ref={menuRef}
                     style={{
                         position: "fixed",
                         height: menuHeight
                     }}>
                    <div className="left-menu-wrap">
                        <nav className="menu-item-wrap">
                            <div className="menu-item">
                                <span className="item">
                                    Basic
                                </span>
                                <span className="item">
                                    Colorful
                                </span>
                                <span className="item">
                                    Colorful
                                </span>
                                <span className="item">
                                    Colorful
                                </span>
                                <span className="item">
                                    Colorful
                                </span>
                                <span className="item">
                                    Colorful
                                </span>
                                <span className="item">
                                    Colorful
                                </span>
                                <span className="item">
                                    Colorful
                                </span>
                                <span className="item">
                                    Colorful
                                </span>
                                <span className="item">
                                    Colorful
                                </span>
                                <span className="item">
                                    Colorful
                                </span>
                                <span className="item">
                                    Colorful
                                </span>
                                <span className="item">
                                    Colorful
                                </span>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="component">
                <div className="sort-nav-wrapper">
                        <div className="search-wrapper">
                            <div className="search-name">
                                Search
                            </div>
                            <div className="search-bar" >
                                <input type="text" placeholder="search" />
                            </div>
                        </div>
                        <div className="sort-wrapper">
                            <div className="sort-name">
                                Sort
                            </div>
                            <div className="sort-bar">
                                <select className="sort-item-wrap">
                                    <option className="sort-item"></option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <ListProduct/>
                </div>
            </div>
            <Footer ref={footerRef}/>
        </div>
    )
}


export default Home;