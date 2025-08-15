"use client";
import { useParams } from "next/navigation";
import Container from "@/components/container";
import Gallery from "@/components/gallery";
import Info from "@/components/info";

const CollectionPage = () => {
    const { collectionId } = useParams();
    const collectionData = ReadyToWearCollectionData.find(item => item.id === collectionId);
    if (!collectionData) {
        return <div>Collection not found</div>;
    }

    return(
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

export default CollectionPage;

const ReadyToWearCollectionData = [
    {
        id: "rtw-1",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "Pleated Midi Dress",
        description: "A lightweight pleated midi dress, perfect for casual outings or summer events.",
        link: "pleated-midi-dress",
    },
    {
        id: "rtw-2",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "Tailored Blazer Set",
        description: "A sharp, tailored two-piece blazer set suitable for both work and dinner dates.",
        link: "tailored-blazer-set",
    },
    {
        id: "rtw-3",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "Relaxed Linen Shirt",
        description: "Breathable and chic, this relaxed-fit linen shirt is a go-to for warm days.",
        link: "relaxed-linen-shirt",
    },
    {
        id: "rtw-4",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "High-Waisted Trousers",
        description: "Elegant high-waisted trousers that pair effortlessly with tucked blouses or crop tops.",
        link: "high-waisted-trousers",
    },
    {
        id: "rtw-5",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "Casual Shirt Dress",
        description: "A versatile shirt dress that can be dressed up with heels or kept casual with sneakers.",
        link: "casual-shirt-dress",
    },
    {
        id: "rtw-6",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "Printed Wrap Dress",
        description: "This wrap dress features bold prints and a flattering waist tie for a confident look.",
        link: "printed-wrap-dress",
    },
    {
        id: "rtw-7",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "Cropped Denim Jacket",
        description: "A stylish cropped denim jacket perfect for layering over dresses or tanks.",
        link: "cropped-denim-jacket",
    },
    {
        id: "rtw-8",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "Jersey Maxi Dress",
        description: "Comfortable and flowy jersey maxi dress ideal for errands, lounging, or travel days.",
        link: "jersey-maxi-dress",
    },
]
