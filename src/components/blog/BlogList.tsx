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
      <div className="text-red-500 text-sm">
        Failed to load blogs. Please try again.
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
