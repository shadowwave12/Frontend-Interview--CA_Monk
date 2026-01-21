import { useState } from "react";
import { BlogList } from "@/components/blog/BlogList";

export function HomePage() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Panel */}
      <div className="md:col-span-1">
        <BlogList
          selectedBlogId={selectedBlogId}
          onSelectBlog={setSelectedBlogId}
        />
      </div>

      {/* Right Panel (placeholder for now) */}
      <div className="md:col-span-2 flex items-center justify-center text-muted-foreground">
        Select a blog to view details
      </div>
    </div>
  );
}
