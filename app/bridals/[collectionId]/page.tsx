"use client";
import { useParams, useRouter } from "next/navigation";
import Container from "@/components/container";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import { collectionsData } from "@/app/data";
import { FaCircleArrowLeft } from "react-icons/fa6";


const BridalsPage = () => {
  const { collectionId } = useParams();
  const router = useRouter();
  const collectionData = collectionsData.find(
    (item) => item.id === collectionId
  );
  if (!collectionData) {
    return <div>Collection not found</div>;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <button
            onClick={() => router.back()}
            className="flex items-center text-[#3D021E] mb-4 hover:text-[#5a0230] transition"
          >
            <FaCircleArrowLeft size={24} className="mr-2" />
            <span>Go Back</span>
          </button>
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Gallery */}
            <Gallery images={collectionData.media} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 ">
              {/* Info */}
              <Info data={collectionData} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BridalsPage;
