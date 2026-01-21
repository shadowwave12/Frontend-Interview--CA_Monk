import { useBlogs } from "@/features/blogs/queries";
import { BlogCard } from "./BlogCard";
import { BlogSkeleton } from "./BlogSkeleton";

interface BlogListProps {
  selectedBlogId: number | null;
  onSelectBlog: (id: number) => void;
}

export function BlogList({ selectedBlogId, onSelectBlog }: BlogListProps) {
  const { data, isLoading, isError } = useBlogs();

  if (isLoading) {
    return <BlogSkeleton />;
  }

  if (isError) {
    return (
      <div className="text-sm text-red-500 bg-red-50 p-3 rounded">
        Unable to load blogs. Please refresh the page.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {data?.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onSelect={onSelectBlog}
          isActive={blog.id === selectedBlogId}
        />
      ))}
    </div>
  );
}
