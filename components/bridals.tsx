import { ProductCard } from "./product-card"

const bridalsCollectionData = [
    {
        id: "bridal-1",
        imageSrc: "hero_4.jpg",
        title: "Classic Lace Gown",
        description: "A timeless lace bridal gown featuring delicate floral patterns and a flowing silhouette.",
        link: "classic-lace-gown",
    },
    {
        id: "bridal-2",
        imageSrc: "hero_4.jpg",
        title: "Modern Mermaid Dress",
        description: "This figure-hugging mermaid dress is perfect for brides seeking a sleek, contemporary look.",
        link: "modern-mermaid-dress",
    },
    {
        id: "bridal-3",
        imageSrc: "hero_4.jpg",
        title: "Off-Shoulder Ball Gown",
        description: "A dreamy ball gown with off-shoulder sleeves and a full tulle skirt for a fairytale moment.",
        link: "off-shoulder-ball-gown",
    },
    {
        id: "bridal-4",
        imageSrc: "hero_4.jpg",
        title: "Vintage-Inspired Dress",
        description: "Charming vintage-inspired dress with lace detailing and a romantic neckline.",
        link: "vintage-bridal-dress",
    },
    {
        id: "bridal-5",
        imageSrc: "hero_4.jpg",
        title: "Silk A-Line Gown",
        description: "Sleek and simple silk A-line gown with a minimalist design and elegant flow.",
        link: "silk-a-line-gown",
    },
    {
        id: "bridal-6",
        imageSrc: "hero_4.jpg",
        title: "Bohemian Chic Dress",
        description: "Free-spirited boho bridal dress with flowing fabrics and earthy details.",
        link: "bohemian-bridal-dress",
    },
    {
        id: "bridal-7",
        imageSrc: "hero_4.jpg",
        title: "Strapless Satin Gown",
        description: "Elegant strapless satin gown with clean lines and a dramatic train.",
        link: "strapless-satin-gown",
    },
    {
        id: "bridal-8",
        imageSrc: "hero_4.jpg",
        title: "Tulle and Beaded Bodice",
        description: "Soft tulle skirt paired with a sparkling beaded bodice for the ultimate bridal glamour.",
        link: "tulle-beaded-bodice",
    },
]

export const BridalsCollection = () => {
    return (
        <div className='mx-[15px] md:mx-[25px] lg:mx-[70px] mt-4'>
            <p className='text-[36px] font-normal leading-[14px]'>Bridals</p>
            <div className='mt-[38px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-4'>
                {bridalsCollectionData.map((item) => (
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
