"use client"

import { useState } from "react";
import { useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";


export default function Header() {


    const [showCards, setShowCards] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => setIsDarkMode((prev) => !prev);



    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const handleInputClick = () => {
        setShowCards(true);
    };

    const handleCloseCards = () => {
        setShowCards(false);
    };

    const cardsInfo = [
        {
            id: 1,
            title: 'Adrianna Papell',
            image: 'https://demo-alukas.myshopify.com/cdn/shop/files/Birds-of-Paradise-Pendant-1.jpg?v=1713578606&width=360',
            p1Info1: 'Birds of Paradise Pendant',
            h1Info2: '$149.00',
        },
        {
            id: 2,
            title: 'AG - Adriano',
            image: 'https://demo-alukas.myshopify.com/cdn/shop/files/1_aa77cbf3-5780-442f-941e-cdbaa0c79566.jpg?v=1709716552&width=360',
            p1Info1: 'Blue Diamond Swing Ring',
            h1Info2: '$399.00',

        },
        {
            id: 3,
            title: 'Aglini',
            image: 'https://demo-alukas.myshopify.com/cdn/shop/files/1_82b29341-c859-42e8-a6df-fd1ea2298aa8.jpg?v=1709714541&width=360',
            p1Info1: 'Blue Stripes & Stone Earrings',
            h1Info2: '$249.00',

        },
        {
            id: 4,
            title: 'Alberta Ferretti',
            image: 'https://demo-alukas.myshopify.com/cdn/shop/files/1_61a4cf16-f72c-4fc2-ab97-21f227095e50.jpg?v=1709716004&width=360',
            p1Info1: 'Circle of Chain Necklace',
            h1Info2: '$285.00',

        },
        {
            id: 5,
            title: 'Alukas',
            image: 'https://demo-alukas.myshopify.com/cdn/shop/files/1.jpg?v=1709714257&width=360',
            p1Info1: 'Circle of Light Heart Earrings',
            h1Info2: '$129.00',
        },
    ];

    return (
        <div>
            <div className="header flex flex-wrap justify-around align-items w-full py-7 gap-14">
                <div className="input flex items-center ">
                    <input
                        className='outline-none w-56'
                        type="text"
                        placeholder='search products'
                        onClick={handleInputClick}
                    />
                    <button><IoSearchOutline /></button>
                </div>
                <div className='flex items-center gap-2 text-3xl'>
                    <h1>ALUKAS</h1>
                    <h1>&</h1>
                    <h1>CO</h1>
                </div>

                <div className="flex gap-7">
                    <div className="flex justify-center items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-7 h-7"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zM4.5 18.75a7.5 7.5 0 0115 0v.75H4.5v-.75z"
                            />
                        </svg>
                    </div>

                    <div className="flex justify-center items-center relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-7 h-7"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.8 8.35c0-3.29-2.66-5.96-5.95-5.96a6.002 6.002 0 00-5.96 5.96c0 3.3 6.46 9.86 6.46 9.86s6.46-6.56 6.46-9.86z"
                            />
                        </svg>
                        <span className="absolute top-0 left-5 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>

                    </div>

                    <div className="flex w-full items-center relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-7 h-7"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 3h2.6l1.6 9.63a2.25 2.25 0 002.24 1.87h6.92a2.25 2.25 0 002.24-1.87L20.4 3H3zm6 18.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                            />
                        </svg>
                        <span className="absolute top-0 left-5 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>

                        <div className='flex gap-2 pl-4'>
                            <button onClick={toggleDarkMode}>
                                <IoMoonOutline className='ml-5 text-xl' />
                            </button>
                            <button >
                                <img className='w-[22px] h-[22px]' src="https://w7.pngwing.com/pngs/478/548/png-transparent-flag-of-azerbaijan-azerbaijanis-flag-of-azerbaijan-flag-sphere-republic-thumbnail.png" alt="aze" />
                            </button>
                            <button >
                                <img className='w-[22px] h-[22px]' src="https://cdn2.iconfinder.com/data/icons/world-flags-1-1/100/Britain-512.png" alt="eng" />
                            </button>
                            <button  >
                                <img className='w-[25px] h-[25px]' src="https://media.istockphoto.com/id/542202100/photo/russian-flag-button-flag-of-russia-badge-3d-illustration.jpg?s=612x612&w=0&k=20&c=4F-3PGlyJWQl9yL_58-iJn6mRjez_XwdpHO9csQv8wM=" alt="eng" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="navbar w-full flex-wrap flex justify-around py-5 ">
                <div>
                    <h1 className='flex items-center'> BROWSE CATEGORIES <IoIosArrowDown className='ml-1' /></h1>
                </div>

                <div className='flex gap-8'>
                    <a className='flex items-center' href="#">HOME <IoIosArrowDown className='ml-1' /> </a>
                    <a className='flex items-center' href="#">SHOP <IoIosArrowDown className='ml-1' /></a>
                    <a className='flex items-center' href="#">PRODUCT <IoIosArrowDown className='ml-1' /></a>
                    <a className='flex items-center' href="#">PAGES <IoIosArrowDown className='ml-1' /></a>
                    <a className='flex items-center' href="#">BLOGS <IoIosArrowDown className='ml-1' /></a>
                    <a href="#">buy alukas!</a>
                </div>
                <div className='flex gap-6'>
                    <h1 className='flex items-center'> <CiPhone className='mr-1' /> (+800) 1234 56</h1>
                    <h1 className='flex items-center'> <CiLocationOn className='mr-1' />Our Stores</h1>
                </div>
            </div>


            {showCards && (

                <div className="flex flex-row gap-6 p-6 relative overflow-x-auto">
                    <button
                        className="absolute top-0 right-5  text-black text-2xl rounded-full transition"
                        onClick={handleCloseCards}
                    >
                        X
                    </button>
                    {cardsInfo.map(card => (
                        <div
                            key={card.id}
                            className=" p-6 rounded-lg  transform transition hover:scale-105 w-[400px] h-[400px]" // Kart boyutları 400x400
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-60 h-56 object-cover rounded-lg mb-4 cursor-pointer"
                            />
                            <h3 className="text-base mb-3 text-gray-500 text-center">{card.title}</h3>
                            <h1 className="text-lg text-center text-[#000] mb-1">{card.h1Info2}</h1>

                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}
