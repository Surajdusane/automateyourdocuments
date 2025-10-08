"use client";
// TODO: update user query
// import { useTRPC } from "@/trpc/client";
// import {
//   useMutation,
//   useQueryClient,
//   useSuspenseQuery,
// } from "@tanstack/react-query";

export function useUserQuery() {
  //   const trpc = useTRPC();
  //   return useSuspenseQuery(trpc.user.me.queryOptions());
  return {
    data: {
      fullName: "sahil",
      email: "sahil@example.com",
      avatarUrl: "https://avatars.githubusercontent.com/u/123456?v=4",
      freeTrial: true,
      createdAt: "2023-01-01T00:00:00.000Z",
    },
  };
}

// export function useUserMutation() {
//   const trpc = useTRPC();
//   const queryClient = useQueryClient();

//   return useMutation(
//     trpc.user.update.mutationOptions({
//       onMutate: async (newData) => {
//         // Cancel outgoing refetches
//         await queryClient.cancelQueries({
//           queryKey: trpc.user.me.queryKey(),
//         });

//         // Get current data
//         const previousData = queryClient.getQueryData(trpc.user.me.queryKey());

//         // Optimistically update
//         queryClient.setQueryData(trpc.user.me.queryKey(), (old: any) => ({
//           ...old,
//           ...newData,
//         }));

//         return { previousData };
//       },
//       onError: (_, __, context) => {
//         // Rollback on error
//         queryClient.setQueryData(
//           trpc.user.me.queryKey(),
//           context?.previousData,
//         );
//       },
//       onSettled: () => {
//         // Refetch after error or success
//         queryClient.invalidateQueries({
//           queryKey: trpc.user.me.queryKey(),
//         });
//       },
//     }),
//   );
// }
