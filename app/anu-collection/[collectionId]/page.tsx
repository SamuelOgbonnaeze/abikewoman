"use client";
import { useParams } from "next/navigation";
import Container from "@/components/container";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import { collectionsData } from "@/app/data";

const AnuPage = () => {
  const { collectionId } = useParams();
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
  );
};

export default AnuPage;
