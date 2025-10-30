// hooks/use-cart.ts

import { CartItem } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string, selectedStyle?: string) => void;
  removeAll: () => void;
  updateQuantity: (
    id: string,
    selectedStyle: string | undefined,
    quantity: number
  ) => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],

      addItem: (data: CartItem) => {
        const currentItems = get().items;

        // Check if item with same id AND style already exists
        const existingItemIndex = currentItems.findIndex(
          (item) =>
            item.id === data.id && item.selectedStyle === data.selectedStyle
        );

        if (existingItemIndex !== -1) {
          // Item exists, update quantity
          toast.success("Item already in cart");
        } else {
          // New item, add to cart
          set({ items: [...currentItems, { ...data, quantity: 1 }] });
          toast.success("Item is added to cart");
        }
      },

      removeItem: (id: string, selectedStyle?: string) => {
        set({
          items: get().items.filter(
            (item) => !(item.id === id && item.selectedStyle === selectedStyle)
          ),
        });
        toast.success("Item is removed from cart");
      },

      removeAll: () => set({ items: [] }),

      updateQuantity: (
        id: string,
        selectedStyle: string | undefined,
        quantity: number
      ) => {
        const currentItems = get().items;
        const itemIndex = currentItems.findIndex(
          (item) => item.id === id && item.selectedStyle === selectedStyle
        );

        if (itemIndex !== -1) {
          const updatedItems = [...currentItems];
          if (quantity <= 0) {
            // Remove item if quantity is 0 or less
            updatedItems.splice(itemIndex, 1);
          } else {
            updatedItems[itemIndex] = {
              ...updatedItems[itemIndex],
              quantity,
            };
          }
          set({ items: updatedItems });
        }
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
