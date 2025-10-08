"use client";

// TODO: impliment sign out
// import { createClient } from "@midday/supabase/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { DropdownMenuItem } from "@workspace/ui/components/dropdown-menu";

export function SignOut() {
  const [isLoading, setLoading] = useState(false);
  //   const supabase = createClient();
  //   const router = useRouter();

  //   const handleSignOut = async () => {
  //     setLoading(true);

  //     await supabase.auth.signOut({
  //       scope: "local",
  //     });

  //     router.push("/login");
  //   };

  return (
    <DropdownMenuItem
    // onClick={handleSignOut}
    >
      {isLoading ? "Loading..." : "Sign out"}
    </DropdownMenuItem>
  );
}
