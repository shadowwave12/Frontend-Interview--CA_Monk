import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Blog } from "@/types/blog";

interface BlogCardProps {
  blog: Blog;
  onSelect: (id: number) => void;
  isActive?: boolean;
}

export function BlogCard({ blog, onSelect, isActive }: BlogCardProps) {
  return (
    <Card
      onClick={() => onSelect(blog.id)}
      className={`cursor-pointer transition hover:shadow-md ${
        isActive ? "border-primary" : ""
      }`}
    >
      <CardContent className="p-4 space-y-2">
        <div className="flex gap-2 flex-wrap">
          {blog.category.map((cat) => (
            <Badge key={cat} variant="secondary">
              {cat}
            </Badge>
          ))}
        </div>

        <h3 className="font-semibold text-lg leading-tight">{blog.title}</h3>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {blog.description}
        </p>
      </CardContent>
    </Card>
  );
}
