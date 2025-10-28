import { FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";

interface InfoProps {
    data: {
        id: string;
        media: { id: string; url: string }[];
        title: string;
        description: React.ReactNode;
        link: string;
      };
}

const Info: React.FC<InfoProps> = ({
    data
}) => {

    return (
        <div className="flex flex-col space-y-6">
            <h1 className="text-3xl font-bold text-gray-700">
                {data.title}
            </h1>
            <hr className="my-4" />
           <div className="">{data.description}</div>
           <Button className="bg-[#3D021E] md:w-[250px] text-center">
            <FaWhatsapp size={24} />
            Pre-Order
            </Button>
        </div>
    );
}

export default Info;