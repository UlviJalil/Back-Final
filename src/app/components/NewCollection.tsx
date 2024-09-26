"use client"
import next from 'next';


const NewCollection = () => {
    return (
        <>
            <div className="flex items-center justify-center max-w-full pt-4">
                <div className="relative w-[530px] p-4 cursor-pointer group">
                    <img src="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_1.webp?v=1712128482" alt="bracelet" className="w-full h-[290px] object-contain transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:z-10" />

                    <div className="absolute flex flex-col top-1/3 left-14 gap-2">
                        <p className='text-white'>2024 FASHION</p>
                        <h1 className='text-white text-3xl'>Just Launched <br /> Desk The Hals</h1>
                        <div className='relative group'>
                            <button className='text-white relative transition-transform duration-500 ease-in-out transform hover:scale-110'>
                                SHOP NOW
                            </button>

                            <span className="absolute left-0 bottom-[-5px] w-0 group-hover:w-[88px] h-[2px] bg-white block transition-all duration-500 ease-in-out"></span>
                        </div>
                    </div>
                </div>
                <div className="relative w-[530px] p-4 cursor-pointer group">
                    <img src="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_2.jpg?v=1711684410" alt="bracelet" className="w-full h-[290px] object-contain transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:z-10" />

                    <div className="absolute flex flex-col top-1/3 left-14 gap-2">
                        <p className='text-white'>FLAT DISCOUNT</p>
                        <h1 className='text-white text-3xl'>Necklaces & <br /> Body Jewels</h1>
                        <div className='relative group'>
                            <button className='text-white relative transition-transform duration-500 ease-in-out transform hover:scale-110'>
                                SHOP NOW
                            </button>

                            <span className="absolute left-0 bottom-[-5px] w-0 group-hover:w-[88px] h-[2px] bg-white block transition-all duration-500 ease-in-out"></span>
                        </div>
                    </div>
                </div>
                <div className="relative w-[530px] p-4 cursor-pointer group">
                    <img src="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_3.jpg?v=1711684399" alt="bracelet" className="w-full h-[290px] object-contain transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:z-10" />

                    <div className="absolute flex flex-col top-1/3 left-14 gap-2">
                        <p className='text-white'>NEW COLLECTION</p>
                        <h1 className='text-white text-3xl'>Jewelry <br />Charm Rings</h1>
                        <div className='relative group'>
                            <button className='text-white relative transition-transform duration-500 ease-in-out transform hover:scale-110'>
                                SHOP NOW
                            </button>

                            <span className="absolute left-0 bottom-[-5px] w-0 group-hover:w-[88px] h-[2px] bg-white block transition-all duration-500 ease-in-out"></span>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default NewCollection
