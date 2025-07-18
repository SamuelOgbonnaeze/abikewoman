import { ProductCard } from "./product-card"

export const AnuCollection = () => {
    return (
        <div className='mx-[15px] md:mx-[25px] lg:mx-[70px]  mt-4'>
            <p className='text-[36px] font-normal leading-[14px]'>Anu Collection</p>
            <div className='mt-[38px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4' >
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}