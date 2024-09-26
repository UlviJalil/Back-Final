'use client'
import next from "next"
import { useEffect, useState } from "react";


interface ICategory {
    imageURL: string,
    title: string

}

function Category() {
    const [categories, setCategories] = useState<ICategory[]>([])


    async function getData() {
        const url = "http://localhost:3001/categories";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            setCategories(json)
            console.log(json);
        } catch (error: any) {
            console.error(error.message);
        }
    }
    useEffect(() => {
        getData()
    }, [])


    return (
        <div>
            <h1 className="text-center text-[#222222] font-medium p-14 text-4xl">Popular Categories</h1>

            <div className="flex justify-center items-center gap-8 max-w-full">
                {
                    categories.map((category: ICategory, index: number) => (
                        <div key={index} className="flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-110 hover:z-10">
                            <img
                                className="w-[190px] rounded-full object-contain transition-all duration-300 ease-in-out cursor-pointer"
                                src={category.imageURL ?? "-"}
                                alt={category.title}
                            />
                            <h1>{category.title ?? "-"}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}



export default Category;