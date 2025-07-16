import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function PostCardSkeleton() {
  return (
    <Card className="bg-zinc-700 rounded-md overflow-hidden border border-zinc-800 shadow-sm">
      <div className="flex items-center gap-3 p-4">
        <Skeleton className="w-10 h-10 rounded-full" />
        <div className="space-y-1">
          <Skeleton className="w-24 h-4 rounded" />
          <Skeleton className="w-16 h-3 rounded" />
        </div>
      </div>

      <div className="w-full aspect-square">
        <Skeleton className="w-full h-full bg-blue-950" />
      </div>

      <div className="p-4 space-y-2">
        <Skeleton className="w-3/4 h-4" />
        <Skeleton className="w-full h-3" />
        <Skeleton className="w-full h-3" />
        <div className="flex gap-2 pt-2">
          <Skeleton className="w-12 h-5 rounded-full" />
          <Skeleton className="w-16 h-5 rounded-full" />
        </div>
      </div>
    </Card>
  );
}
