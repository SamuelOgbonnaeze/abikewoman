import Image from "next/image";
import Promo from "../public/promo10.png"

const AdBanner = () => {
    return ( 
        <div className="text-white my-5 p-3 mx-[30px] lg:mx-[72px] bg-[#604652] flex gap-x-5 items-center rounded-lg justify-center">
            <div className="flex flex-col max-w-[700px] ">
               <p className="text-4xl font-bold">Its our Opening Sales!!!</p>
               <p className="text-lg">Get a discount on all purchases this opening weekend <br /> This offer is valid from June 1 to June 4 </p>
            </div> 
            <div>
               <Image
               src={Promo}
               alt="10%"
               width={200}
               height={200}
               />
            </div>
        </div>
     );
}
 
export default AdBanner;