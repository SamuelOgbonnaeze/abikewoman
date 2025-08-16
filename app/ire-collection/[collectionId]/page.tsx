"use client";
import Container from "@/components/container";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import { useParams } from "next/navigation";

const ireCollectionData = [
    {
        id: "ire-1",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
          ],
        title: "Ire Collection Title",
        description: "Ire Collection Description goes here. This is some sample text to test layout.",
        link: "ire-collection/ire-1",
    },
    {
        id: "ire-2",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_3.jpg" },
            { id: "3", url: "/hero_2.jpg" },
            { id: "4", url: "/hero_4.jpg" },
            { id: "5", url: "/hero_3.jpg" },
            { id: "6", url: "/hero_2.jpg" },
          ],
        title: "Ire Collection Title",
        description: "Ire Collection Description goes here. This is some sample text to test layout.",
        link: "ire-collection/ire-2",
    },
    {
        id: "ire-3",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_4.jpg" },
          ],
        title: "Ire Collection Title",
        description: "Ire Collection Description goes here. This is some sample text to test layout.",
        link: "ire-collection/ire-3",
    },
    {
        id: "ire-4",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_4.jpg" },
          ],
        title: "Ire Collection Title",
        description: "Ire Collection Description goes here. This is some sample text to test layout.",
        link: "ire-collection/ire-4",
    },
    {
        id: "ire-5",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_4.jpg" },
          ],
        title: "Ire Collection Title",
        description: "Ire Collection Description goes here. This is some sample text to test layout.",
        link: "ire-collection/ire-5",
    },
    {
        id: "ire-6",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_4.jpg" },
          ],
        title: "Ire Collection Title",
        description: "Ire Collection Description goes here. This is some sample text to test layout.",
        link: "ire-collection/ire-6",
    },
    {
        id: "ire-7",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_4.jpg" },
          ],
        title: "Ire Collection Title",
        description: "Ire Collection Description goes here. This is some sample text to test layout.",
        link: "ire-collection/ire-7",
    },
    {
        id: "ire-8",
        images: [
            { id: "1", url: "/hero_4.jpg" },
            { id: "2", url: "/hero_4.jpg" },
          ],
        title: "Ire Collection Title",
        description: "Ire Collection Description goes here. This is some sample text to test layout.",
        link: "ire-collection/ire-8",
    },
]

const IrePage = () => {
    const { collectionId } = useParams();
    const collectionData = ireCollectionData.find(item => item.id === collectionId);
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

export default IrePage;
