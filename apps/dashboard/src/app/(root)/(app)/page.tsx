import { getQueryClient, trpc } from "@/trpc/server";
import { Button } from "@workspace/ui/components/button";

export default async function Page() {
  const queryClient = getQueryClient();
  const data = await queryClient.fetchQuery(trpc.hello.queryOptions({ text: "sahil" }));
  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm">Button</Button>
        <p>{data.greeting}</p>
      </div>
    </div>
  );
}
