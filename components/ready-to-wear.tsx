import { ProductCard } from "./product-card"

const readyToWearData = [
    {
        id: "rtw-1",
        imageSrc: "hero_4.jpg",
        title: "Pleated Midi Dress",
        description: "A lightweight pleated midi dress, perfect for casual outings or summer events.",
        link: "pleated-midi-dress",
    },
    {
        id: "rtw-2",
        imageSrc: "hero_4.jpg",
        title: "Tailored Blazer Set",
        description: "A sharp, tailored two-piece blazer set suitable for both work and dinner dates.",
        link: "tailored-blazer-set",
    },
    {
        id: "rtw-3",
        imageSrc: "hero_4.jpg",
        title: "Relaxed Linen Shirt",
        description: "Breathable and chic, this relaxed-fit linen shirt is a go-to for warm days.",
        link: "relaxed-linen-shirt",
    },
    {
        id: "rtw-4",
        imageSrc: "hero_4.jpg",
        title: "High-Waisted Trousers",
        description: "Elegant high-waisted trousers that pair effortlessly with tucked blouses or crop tops.",
        link: "high-waisted-trousers",
    },
    {
        id: "rtw-5",
        imageSrc: "hero_4.jpg",
        title: "Casual Shirt Dress",
        description: "A versatile shirt dress that can be dressed up with heels or kept casual with sneakers.",
        link: "casual-shirt-dress",
    },
    {
        id: "rtw-6",
        imageSrc: "hero_4.jpg",
        title: "Printed Wrap Dress",
        description: "This wrap dress features bold prints and a flattering waist tie for a confident look.",
        link: "printed-wrap-dress",
    },
    {
        id: "rtw-7",
        imageSrc: "hero_4.jpg",
        title: "Cropped Denim Jacket",
        description: "A stylish cropped denim jacket perfect for layering over dresses or tanks.",
        link: "cropped-denim-jacket",
    },
    {
        id: "rtw-8",
        imageSrc: "hero_4.jpg",
        title: "Jersey Maxi Dress",
        description: "Comfortable and flowy jersey maxi dress ideal for errands, lounging, or travel days.",
        link: "jersey-maxi-dress",
    },
]


export const ReadyToWear = () => {
    return (
        <div className='mx-[15px] md:mx-[25px] lg:mx-[70px] mt-4'>
            <p className='text-[36px] font-normal leading-[14px]'>Ready To Wear</p>
            <div className='mt-[38px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4'>
                {readyToWearData.map((item) => (
                    <ProductCard
                        key={item.id}
                        imageSrc={item.imageSrc}
                        title={item.title}
                        description={item.description}
                        link={item.link}
                    />
                ))}
            </div>
        </div>
    )
}
