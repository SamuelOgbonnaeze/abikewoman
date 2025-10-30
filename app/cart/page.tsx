"use client";

import CartItemComponent from "@/components/cart-item";
import Container from "@/components/container";
import Summary from "@/components/summary";
import useCart from "@/hooks/use-cart";

const CartPage = () => {
  const cart = useCart();

  return (
    <div className="bg-white">
      <Container>
        <div className="  px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold mt-5 ">Your shopping cart</h1>
          <div className=" mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-neutral-500">
                  There are no items currently in your cart{" "}
                </p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItemComponent
                    key={`${item.id}-${item.selectedStyle || "default"}`}
                    data={item}
                  />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
