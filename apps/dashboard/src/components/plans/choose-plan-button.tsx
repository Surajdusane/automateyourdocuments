"use client";

import { useState } from "react";
import { Button } from "@workspace/ui/components/button";

import { ChoosePlanModal } from "@/components/modals/choose-plan-modal";

export function ChoosePlanButton({
  children,
  initialIsOpen,
  daysLeft,
  hasDiscount,
  discountPrice,
}: {
  children: React.ReactNode;
  initialIsOpen?: boolean;
  daysLeft?: number;
  hasDiscount?: boolean;
  discountPrice?: number;
}) {
  const [isOpen, setIsOpen] = useState(initialIsOpen ?? false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        className="text-muted-foreground h-[32px] rounded-full p-0 px-3 text-xs font-normal"
      >
        {children}
      </Button>

      <ChoosePlanModal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        daysLeft={daysLeft}
        hasDiscount={hasDiscount}
        discountPrice={discountPrice}
      />
    </>
  );
}
