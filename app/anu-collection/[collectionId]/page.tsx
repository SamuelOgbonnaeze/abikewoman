"use client";
import { useParams } from "next/navigation";

const CollectionPage = () => {
    const { collectionId } = useParams();
    const collectionData = anuCollectionData.find(item => item.id === collectionId);
    if (!collectionData) {
        return <div>Collection not found</div>;
    }


    return(
        <div>
            oijhhui hello world
        </div>
    )
}

export default CollectionPage;

const anuCollectionData = [
    {
        id: "anu-1",
        imageSrc: "image 114.png",
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection/anu-1",
    },
    {
        id: "anu-2",
        imageSrc: "image 114.png",
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection/anu-2",
    },
    {
        id: "anu-3",
        imageSrc: "image 114.png",
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection/anu-3",
    },
    {
        id: "anu-4",
        imageSrc: "image 114.png",
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection/anu-4",
    },
    {
        id: "anu-5",
        imageSrc: "image 114.png",
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection/anu-5",
    },
    {
        id: "anu-6",
        imageSrc: "image 114.png",
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection/anu-6",
    },
    {
        id: "anu-7",
        imageSrc: "image 114.png",
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection/anu-7",
    },
    {
        id: "anu-8",
        imageSrc: "image 114.png",
        title: "Anu Collection Title",
        description: "Anu Collection Description goes here. It can be a bit longer to test the line clamping.",
        link: "anu-collection/anu-8",
    }
]
