"use client";
import { useParams } from "next/navigation";
import Container from "@/components/container";
import Gallery from "@/components/gallery";
import Info from "@/components/info";

const CollectionPage = () => {
    const { collectionId } = useParams();
    const collectionData = anuCollectionData.find(item => item.id === collectionId);
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

const anuCollectionData = [
    {
        id: "anu-1",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection/anu-1",
    },
    {
        id: "anu-2",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection/anu-2",
    },
    {
        id: "anu-3",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection/anu-3",
    },
    {
        id: "anu-4",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection/anu-4",
    },
    {
        id: "anu-5",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection/anu-5",
    },
    {
        id: "anu-6",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection/anu-6",
    },
    {
        id: "anu-7",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection/anu-7",
    },
    {
        id: "anu-8",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
        ],
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection/anu-8",
    }
]
