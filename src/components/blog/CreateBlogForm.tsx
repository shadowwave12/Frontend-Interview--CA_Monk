import { useState } from "react";
import { useCreateBlog } from "@/features/blogs/mutations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function CreateBlogForm() {
  const { mutate, isPending } = useCreateBlog();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    mutate({
      title,
      category: category.split(",").map((c) => c.trim()),
      description,
      coverImage,
      content,
      date: new Date().toISOString(),
    });

    // Reset form
    setTitle("");
    setCategory("");
    setDescription("");
    setCoverImage("");
    setContent("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 border rounded-lg bg-white"
    >
      <h2 className="font-semibold text-lg">Create New Blog</h2>

      <div className="space-y-1">
        <Label>Title</Label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="space-y-1">
        <Label>Category (comma separated)</Label>
        <Input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="TECH, FINANCE"
          required
        />
      </div>

      <div className="space-y-1">
        <Label>Description</Label>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="space-y-1">
        <Label>Cover Image URL</Label>
        <Input
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          required
        />
      </div>

      <div className="space-y-1">
        <Label>Content</Label>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={5}
          required
        />
      </div>

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? "Creating..." : "Create Blog"}
      </Button>
    </form>
  );
}
