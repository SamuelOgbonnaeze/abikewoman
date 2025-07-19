import { ProductCard } from "./product-card"

const anuCollectionData = [
    {
        id: "anu-1",
        imageSrc: "image 114.png",
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection",
    },
    {
        id: "anu-2",
        imageSrc: "image 114.png",
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection",
    },
    {
        id: "anu-3",
        imageSrc: "image 114.png",
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection",
    },
    {
        id: "anu-4",
        imageSrc: "image 114.png",
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection",
    },
    {
        id: "anu-5",
        imageSrc: "image 114.png",
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection",
    },
    {
        id: "anu-6",
        imageSrc: "image 114.png",
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection",
    },
    {
        id: "anu-7",
        imageSrc: "image 114.png",
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection",
    },
    {
        id: "anu-8",
        imageSrc: "image 114.png",
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection",
    }
]

export const AnuCollection = () => {
    return (
        <div className='mx-[15px] md:mx-[25px] lg:mx-[70px]  mt-4'>
            <p className='text-[36px] font-normal leading-[14px]'>Anu Collection</p>
            <div className='mt-[38px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4' >
                {anuCollectionData.map((item) => (
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