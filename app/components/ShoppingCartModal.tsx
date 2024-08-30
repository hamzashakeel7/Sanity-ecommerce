"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ShoppingCartModal: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    clearCart, // Added clearCart function
  } = useShoppingCart();
  const router = useRouter();

  const handleCheckout = async () => {
    if (cartCount === 0) {
      alert(
        "Your cart is empty. Please add items to your cart before checking out."
      );
      return; // Stop the checkout process if the cart is empty
    }

    setIsLoading(true); // Set loading state

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartDetails, totalPrice }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorMessage}`
        );
      }

      const result = await response.json();
      console.log("Email sent:", result);

      // Clear the cart after successful checkout
      clearCart();

      // Redirect to thank you page
      window.location.href = "/thankyou"; // Adjust path as needed
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false); // Clear loading state
    }
  };

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[80vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200" role="list">
              {cartCount === 0 ? (
                <h1 className="text-xl py-6 font-semibold">
                  Your cart is empty 😞
                </h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          alt={entry.name}
                          src={entry.image ?? ""}
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{entry.name}</h3>
                            <p className="ml-4">PKR {entry.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                            {entry.description}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">QTY: {entry.quantity}</p>
                          <div className="flex">
                            <button
                              onClick={() => removeItem(entry.id)}
                              type="button"
                              className="font-medium text-destructive hover:text-destructive/80"
                              aria-label={`Remove ${entry.name}`}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Total Amount:</p>
              <p>PKR {totalPrice}</p>
            </div>
            <div className="mt-6">
              <Button
                className="w-full"
                onClick={handleCheckout}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "CheckOut"}
              </Button>
            </div>
            <div className="mt-6 flex flex-col justify-center text-center text-sm text-gray-500">
              OR{" "}
              <Button
                onClick={() => handleCartClick()}
                className="mt-3"
                variant={"ghost"}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartModal;
