import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const PostSheduledCardSkeleton = () => {
  return (
    <Card className="bg-transparent border-b-5 border-neutral-400 w-full md:max-w-4xl mx-auto overflow-hidden relative">
      <CardContent className="flex flex-col md:flex-row gap-4 p-4 pt-0">
        <div className="w-full md:w-1/3 overflow-hidden rounded-lg border border-neutral-800 shadow-md">
          <Skeleton className="w-full h-48 md:h-60" />
        </div>
        <div className="flex-1 flex flex-col justify-start text-white space-y-2">
          <div className="flex flex-row items-start justify-between p-4">
            <div className="space-y-1">
              <Skeleton className="h-6 w-3/4" />
            </div>
            <Skeleton className="h-6 w-6" />
          </div>
          <div className="px-4">
            <Skeleton className="h-4 w-1/2 mb-1" />
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-5 w-16" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
