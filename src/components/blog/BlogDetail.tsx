import { useBlog } from "@/features/blogs/queries";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

interface BlogDetailProps {
  blogId: number | null;
}

export function BlogDetail({ blogId }: BlogDetailProps) {
  const { data, isLoading, isError } = useBlog(blogId);

  // No blog selected
  if (!blogId) {
    return (
      <div className="h-full flex items-center justify-center text-muted-foreground">
        Select a blog from the list to read full content
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-64 w-full rounded-lg" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    );
  }

  // Error state
  if (isError || !data) {
    return (
      <div className="text-sm text-red-500 bg-red-50 p-4 rounded">
        Something went wrong while loading this blog.
      </div>
    );
  }

  return (
    <article className="bg-white border rounded-xl p-6 md:p-8 max-w-3xl mx-auto space-y-6">
      {/* Cover Image */}
      <img
        src={data.coverImage}
        alt={data.title}
        className="w-full h-48 md:h-64 object-cover rounded-lg"
      />

      {/* Categories */}
      <div className="flex gap-2 flex-wrap">
        {data.category.map((cat) => (
          <Badge key={cat} variant="secondary">
            {cat}
          </Badge>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold tracking-tight leading-snug">
        {data.title}
      </h1>

      <div className="flex gap-6 text-sm text-muted-foreground">
        <span className="uppercase">{data.category.join(" • ")}</span>
        <span>{new Date(data.date).toDateString()}</span>
      </div>

      {/* Date */}
      <p className="text-sm text-muted-foreground">
        {new Date(data.date).toLocaleDateString()}
      </p>

      {/* Content */}
      <p className="text-gray-700 leading-7 whitespace-pre-line">
        {data.content}
      </p>
    </article>
  );
}
