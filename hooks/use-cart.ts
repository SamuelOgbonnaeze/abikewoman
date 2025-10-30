import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import toast from "react-hot-toast";
import { CollectionItem } from "@/types";

interface CartItem extends CollectionItem {
  orderQuantity: number; 
}

interface CartStore {
  items: CartItem[];
  addItem: (data: CollectionItem) => void;
  removeItem: (id: string) => void;
  updateOrderQuantity: (id: string, quantity: number) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: CollectionItem) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return toast("Item already in cart.");
        }

        // Add the product with an initial orderQuantity of 1
        const newItem: CartItem = { ...data, orderQuantity: 1 };
        set({ items: [...get().items, newItem] });
        toast.success("Item is added to cart.");
      },
      removeItem: (id: string) => {
        set({ items: get().items.filter((item) => item.id !== id) });
        toast.success("Item is removed from cart");
      },
      updateOrderQuantity: (id: string, quantity: number) => {
        const currentItems = get().items;
        const itemIndex = currentItems.findIndex((item) => item.id === id);

        if (itemIndex === -1) {
          return toast.error("Item not found in cart.");
        }

        if (quantity < 1 ) {
          return toast.error("Invalid quantity.");
        }

        const updatedItems = [...currentItems];
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          orderQuantity: quantity, // Only update the orderQuantity
        };

        set({ items: updatedItems });
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
