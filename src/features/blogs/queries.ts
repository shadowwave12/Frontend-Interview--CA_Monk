import { useQuery } from "@tanstack/react-query";
import { fetchBlogs, fetchBlogById } from "@/api/blogs";

export function useBlogs() {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });
}

export function useBlog(id: number | null) {
  return useQuery({
    queryKey: ["blogs", id],
    queryFn: () => fetchBlogById(id as number),
    enabled: !!id,
  });
}
