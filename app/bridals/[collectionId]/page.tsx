"use client";
import { useParams } from "next/navigation";
import Container from "@/components/container";
import Gallery from "@/components/gallery";
import Info from "@/components/info";

const BridalsPage = () => {
    const { collectionId } = useParams();
    const collectionData = bridalsData.find(item => item.id === collectionId);
    if (!collectionData) {
        return <div>Collection not found</div>;
    }

    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        {/* Gallery */}
                        <Gallery images={collectionData.images} />
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 ">
                            {/* Info */}
                            <Info data={collectionData} />
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default BridalsPage;

const bridalsData = [
    {
        id: "bridal-1",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "Classic Lace Gown",
        description: "A timeless lace bridal gown featuring delicate floral patterns and a flowing silhouette.",
        link: "bridals/bridal-1",
    },
    {
        id: "bridal-2",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "Modern Mermaid Dress",
        description: "This figure-hugging mermaid dress is perfect for brides seeking a sleek, contemporary look.",
        link: "bridals/bridal-2",
    },
    {
        id: "bridal-3",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "Off-Shoulder Ball Gown",
        description: "A dreamy ball gown with off-shoulder sleeves and a full tulle skirt for a fairytale moment.",
        link: "bridals/bridal-3",
    },
    {
        id: "bridal-4",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "Vintage-Inspired Dress",
        description: "Charming vintage-inspired dress with lace detailing and a romantic neckline.",
        link: "bridals/bridal-4",
    },
    {
        id: "bridal-5",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "Silk A-Line Gown",
        description: "Sleek and simple silk A-line gown with a minimalist design and elegant flow.",
        link: "bridals/bridal-5",
    },
    {
        id: "bridal-6",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "Bohemian Chic Dress",
        description: "Free-spirited boho bridal dress with flowing fabrics and earthy details.",
        link: "bridals/bridal-6",
    },
    {
        id: "bridal-7",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "Strapless Satin Gown",
        description: "Elegant strapless satin gown with clean lines and a dramatic train.",
        link: "bridals/bridal-7",
    },
    {
        id: "bridal-8",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "Tulle and Beaded Bodice",
        description: "Soft tulle skirt paired with a sparkling beaded bodice for the ultimate bridal glamour.",
        link: "bridals/bridal-8",
    },
]