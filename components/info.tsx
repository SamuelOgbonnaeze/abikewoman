import { Button } from "./ui/button";

interface InfoProps {
    data: {
        id: string;
        images: { id: string; url: string }[];
        title: string;
        description: string;
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
           <p className="text-md font-bold text-gray-700">{data.description}</p>
           <Button className="bg-[#3D021E] md:w-[250px] text-center">Contact us</Button>
        </div>
    );
}

export default Info;