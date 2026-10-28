import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('hshop_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('hshop_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const addToCart = (product, selectedVariant, quantity = 1) => {
    const variant = selectedVariant || product.variants[0];
    const itemKey = `${product.id}-${variant.id}`;

    setCartItems((prev) => {
      const existing = prev.find((item) => item.itemKey === itemKey);
      if (existing) {
        return prev.map((item) =>
          item.itemKey === itemKey
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          itemKey,
          productId: product.id,
          variantId: variant.id,
          name: product.name,
          category: product.category,
          brand: product.brand,
          variantLabel: variant.label,
          unitPrice: variant.price,
          originalPrice: variant.originalPrice || variant.price,
          unit: product.defaultUnit,
          image: product.image,
          quantity: quantity
        }
      ];
    });

    showToast(`Added ${quantity}x ${product.name} (${variant.label}) to cart!`);
  };

  const addBundleToCart = (bundleItems) => {
    setCartItems((prev) => {
      let updated = [...prev];
      bundleItems.forEach((bItem) => {
        const itemKey = `${bItem.productId}-${bItem.variantId}`;
        const existing = updated.find((item) => item.itemKey === itemKey);
        if (existing) {
          updated = updated.map((item) =>
            item.itemKey === itemKey
              ? { ...item, quantity: item.quantity + bItem.quantity }
              : item
          );
        } else {
          updated.push({
            itemKey,
            productId: bItem.productId,
            variantId: bItem.variantId,
            name: bItem.name,
            category: bItem.category,
            variantLabel: bItem.name.includes('(') ? bItem.name.split('(')[1]?.replace(')', '') : 'Standard',
            unitPrice: bItem.unitPrice,
            originalPrice: Math.round(bItem.unitPrice * 1.15),
            unit: bItem.unit,
            image: 'https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=800&q=80',
            quantity: bItem.quantity
          });
        }
      });
      return updated;
    });

    showToast(`Added ${bundleItems.length} items from Project Estimator to cart!`);
    setIsCartOpen(true);
  };

  const updateQuantity = (itemKey, newQty) => {
    if (newQty <= 0) {
      removeFromCart(itemKey);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.itemKey === itemKey ? { ...item, quantity: newQty } : item
      )
    );
  };

  const removeFromCart = (itemKey) => {
    setCartItems((prev) => prev.filter((item) => item.itemKey !== itemKey));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const totalSavings = cartItems.reduce(
    (acc, item) => acc + (item.originalPrice - item.unitPrice) * item.quantity,
    0
  );
  const gstTax = Math.round(subtotal * 0.18);
  const isFreeShipping = subtotal >= 10000;
  const shippingCharge = subtotal === 0 ? 0 : isFreeShipping ? 0 : 500;
  const grandTotal = subtotal + gstTax + shippingCharge;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItems,
        subtotal,
        totalSavings,
        gstTax,
        shippingCharge,
        isFreeShipping,
        grandTotal,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        quickViewProduct,
        setQuickViewProduct,
        addToCart,
        addBundleToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        toastMessage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
