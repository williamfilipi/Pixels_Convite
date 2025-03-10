import { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  options?: Record<string, string>;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, "quantity">, quantity = 1) => {
    setCartItems((prevItems) => {
      // Verificar se o item já existe no carrinho
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id,
      );

      if (existingItemIndex >= 0) {
        // Se o item já existe, atualizar a quantidade
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        // Se o item não existe, adicionar ao carrinho
        return [...prevItems, { ...item, quantity }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Calcular o número total de itens no carrinho
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
