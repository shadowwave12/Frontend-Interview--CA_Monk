import { useState } from "react";
import { BlogList } from "@/components/blog/BlogList";
import { BlogDetail } from "@/components/blog/BlogDetail";
import { CreateBlogForm } from "@/components/blog/CreateBlogForm";

export function HomePage() {
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Panel */}
      <div className="md:col-span-1 space-y-4 max-h-[calc(100vh-120px)] overflow-y-auto pr-2">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase">
          Latest Articles
        </h2>

        <CreateBlogForm />
        <BlogList
          selectedBlogId={selectedBlogId}
          onSelectBlog={setSelectedBlogId}
        />
      </div>

      {/* Right Panel */}
      <div className="md:col-span-2 overflow-y-auto">
        <BlogDetail blogId={selectedBlogId} />
      </div>
    </div>
  );
}
