"use client";
import { useParams } from "next/navigation";

const BridalsPage = () => {
    const { collectionId } = useParams();
    const collectionData = bridalsData.find(item => item.id === collectionId);
    if (!collectionData) {
        return <div>Collection not found</div>;
    }

    console.log(collectionData)

    return (
        <div>
            oijhhui hello world
        </div>
    )
}

export default BridalsPage;

const bridalsData = [
    {
        id: "bridal-1",
        imageSrc: "hero_4.jpg",
        title: "Classic Lace Gown",
        description: "A timeless lace bridal gown featuring delicate floral patterns and a flowing silhouette.",
        link: "bridals/bridal-1",
    },
    {
        id: "bridal-2",
        imageSrc: "hero_4.jpg",
        title: "Modern Mermaid Dress",
        description: "This figure-hugging mermaid dress is perfect for brides seeking a sleek, contemporary look.",
        link: "bridals/bridal-2",
    },
    {
        id: "bridal-3",
        imageSrc: "hero_4.jpg",
        title: "Off-Shoulder Ball Gown",
        description: "A dreamy ball gown with off-shoulder sleeves and a full tulle skirt for a fairytale moment.",
        link: "bridals/bridal-3",
    },
    {
        id: "bridal-4",
        imageSrc: "hero_4.jpg",
        title: "Vintage-Inspired Dress",
        description: "Charming vintage-inspired dress with lace detailing and a romantic neckline.",
        link: "bridals/bridal-4",
    },
    {
        id: "bridal-5",
        imageSrc: "hero_4.jpg",
        title: "Silk A-Line Gown",
        description: "Sleek and simple silk A-line gown with a minimalist design and elegant flow.",
        link: "bridals/bridal-5",
    },
    {
        id: "bridal-6",
        imageSrc: "hero_4.jpg",
        title: "Bohemian Chic Dress",
        description: "Free-spirited boho bridal dress with flowing fabrics and earthy details.",
        link: "bridals/bridal-6",
    },
    {
        id: "bridal-7",
        imageSrc: "hero_4.jpg",
        title: "Strapless Satin Gown",
        description: "Elegant strapless satin gown with clean lines and a dramatic train.",
        link: "bridals/bridal-7",
    },
    {
        id: "bridal-8",
        imageSrc: "hero_4.jpg",
        title: "Tulle and Beaded Bodice",
        description: "Soft tulle skirt paired with a sparkling beaded bodice for the ultimate bridal glamour.",
        link: "bridals/bridal-8",
    },
]