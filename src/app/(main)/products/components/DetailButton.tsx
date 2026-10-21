"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { ReactNode } from "react";

interface DetailButtonProps {
  productId: number;
  children: ReactNode;
}

function DetailButton({ productId, children }: DetailButtonProps) {
  return (
    <div className="mt-auto flex gap-2">
      <Button 
      variant="outline"
      className="flex-1"
        onClick={() =>
          toast.add({
            type: "success",
            description: `Added to Cart. Product ID: ${productId}`,
          })
        }
      >
        Add to Cart
      </Button>
      {children}
    </div>
  );
}

export default DetailButton;
