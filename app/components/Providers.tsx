"use client";

import React, { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      successUrl="http://localhost:3000/sucess"
      cancelUrl="http://localhost:3000/error"
      currency="PKR"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
    >
      {children}
    </USCProvider>
  );
};

export default CartProvider;
