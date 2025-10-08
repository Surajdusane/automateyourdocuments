import { baseProcedure } from "@/src/trpc/init";

// This procedure will be used to check if the user is authorized
// TODO: Add authorization middleware
export const authorizedProcedure = baseProcedure