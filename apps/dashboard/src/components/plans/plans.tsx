"use client";

import { useState } from "react";
import Link from "next/link";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { SubmitButton } from "@workspace/ui/components/submit-button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@workspace/ui/components/tooltip";
import { cn } from "@workspace/ui/lib/utils";

import { Check } from "lucide-react";

import { useUserQuery } from "@/hooks/use-user";

export function Plans() {
  // TODO: fix desktop app
  const isDesktop = false;
  const [isSubmitting, setIsSubmitting] = useState(0);
  const trpc = useTRPC();

  const { data: user } = useUserQuery();
  //   const { data, isLoading } = useQuery(trpc.team.availablePlans.queryOptions());
  const { data, isLoading } = {
    data: {
      starter: {
        id: "ac17601d-29a9-4530-ab9d-9f6ea39f7e32",
        name: "Starter",
        key: "starter",
      },
      pro: {
        id: "0a0a36b1-38d3-4082-85ca-f46cec9d8b1a",
        name: "Pro",
        key: "pro",
      },
    },
    isLoading: false,
  };

  return (
    <TooltipProvider delayDuration={0}>
      <div className="grid w-full grid-cols-1 gap-7 md:grid-cols-2">
        {/* Starter Plan */}
        <div className="bg-background flex flex-col border p-6">
          <h2 className="mb-2 text-left text-xl">Starter</h2>
          <div className="mt-1 flex items-baseline">
            <span className="text-2xl font-medium tracking-tight">$29</span>
            <span className="ml-1 text-xl font-medium">/mo</span>
            <span className="text-muted-foreground ml-2 text-xs">Excl. VAT</span>
          </div>

          <div className="mt-4">
            <h3 className="text-left font-mono text-xs font-medium uppercase tracking-wide text-[#878787]">
              INCLUDING
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs">Send up to 10 invoices per month</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs">2 connected banks</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs">Unlimited bank accounts</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs">Financial overview</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs">Time Tracker</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs">50 inbox items per month</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs">Customer management</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs">Export CSV & reports</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs">Assistant</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs">10GB Vault Storage</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs">2 users</span>
              </li>
            </ul>
          </div>

          <div className="border-border mt-8 border-t-[1px] pt-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  prefetch={false}
                  href={`/api/checkout?plan=starter&teamId=`}
                  className={cn(!data?.starter && "cursor-default opacity-50")}
                  onClick={(evt) => {
                    if (!data?.starter) {
                      evt.preventDefault();
                      return;
                    }

                    setIsSubmitting(1);
                  }}
                >
                  <SubmitButton
                    variant="secondary"
                    className={cn(
                      "hover:bg-primary hover:text-secondary h-9",
                      !isLoading && !data?.starter && "pointer-events-none"
                    )}
                    isSubmitting={isSubmitting === 1}
                  >
                    Choose starter plan
                  </SubmitButton>
                </Link>
              </TooltipTrigger>
              {!isLoading && !data?.starter && (
                <TooltipContent className="max-w-[300px] text-xs">
                  <p>
                    This plan is not applicable since you have exceeded the limits for this subscription (users or bank
                    connections).
                  </p>
                </TooltipContent>
              )}
            </Tooltip>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="border-primary bg-background relative flex flex-col border p-6">
          <div className="absolute right-6 top-6 rounded-full border px-2 py-1 font-mono text-[9px] font-normal text-[#878787]">
            Limited offer
          </div>
          <h2 className="mb-2 text-left text-xl">Pro</h2>
          <div className="mt-1 flex items-baseline">
            <span className={cn("text-2xl font-medium tracking-tight", "text-[#878787] line-through")}>$99</span>
            <span className="ml-1 text-2xl font-medium tracking-tight">$49</span>

            <span className="ml-1 text-xl font-medium">/mo</span>
            <span className="text-muted-foreground ml-2 text-xs">Excl. VAT</span>
          </div>

          <div className="mt-4">
            <h3 className="text-left font-mono text-xs font-medium uppercase tracking-wide text-[#878787]">
              INCLUDING
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs">Send up to 50 invoices per month</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs">10 connected banks</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs">Unlimited bank accounts</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs">Financial overview</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs">Time Tracker</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs">500 inbox items per month</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs">Customer management</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs">Export CSV & reports</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs">Assistant</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs">100GB Vault Storage</span>
              </li>
              <li className="flex items-start">
                <Check className="text-primary mr-2 h-4 w-4 flex-shrink-0" />
                <span className="text-xs">10 users</span>
              </li>
            </ul>
          </div>

          <div className="border-border mt-8 border-t pt-4">
            <Link prefetch={false} href={`/api/checkout?plan=pro&teamId`}>
              <SubmitButton className="h-9" onClick={() => setIsSubmitting(2)} isSubmitting={isSubmitting === 2}>
                Choose pro plan
              </SubmitButton>
            </Link>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
