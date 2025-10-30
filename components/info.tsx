import { FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler } from "react";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
  data: {
    id: string;
    media: { id: string; url: string }[];
    title: string;
    description: React.ReactNode;
    link: string;
    category: string;
  };
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  const handlePreOrder = () => {
    const phoneNumber = "2347038072466";
    const message = encodeURIComponent(
      `Hi, The AbikeWoman! I would like to pre-order the ${data.title} from the ${data.category}.\n\nProduct Link: ${window.location.href}`
    );

    // WhatsApp URL format
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex flex-col space-y-6">
      <h1 className="text-3xl font-bold text-gray-700">{data.title}</h1>
      <hr className="my-4" />
      <div className="">{data.description}</div>
      <div className="flex items-center space-x-6">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          <ShoppingCart size={20} />
          Add to cart
        </Button>
        <Button
          onClick={handlePreOrder}
          className="bg-[#3D021E] md:w-[250px] text-center hover:bg-[#3D021E]/90 transition-colors"
        >
          <FaWhatsapp size={24} />
          Pre-Order
        </Button>
      </div>
    </div>
  );
};

export default Info;
