import { Query, Post, FullPost } from "./types";

export async function fetchBlog(q: Query): Promise<Post[]> {
  const url =
    "https://o9stxxyy.api.sanity.io/v2025-09-25/data/query/production";

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(q),
  });

  const data = await res.json();

  if (data.error) {
    console.error("Sanity query failed:", data.error);
    return [];
  }

  if (!data.result) {
    return [];
  }

  return data.result.map((fetched: FullPost) => ({
    _id: fetched._id,
    _createdAt: fetched._createdAt,
    _updatedAt: fetched._updatedAt,
    title: fetched.title,
    author: fetched.author,
    body: fetched.body.map((block) => ({
      children: block.children.map((child) => ({ text: child.text })),
    })),
    categories: fetched.categories,
    mainImage: {
      url: fetched.mainImage?.asset?.url || "",
      alt: fetched.mainImage?.alt || "",
    },
  }));
}

export async function fetchSingleBlog(
  id: string | undefined,
): Promise<Post | null> {
  if (!id) return null;

  const url =
    "https://o9stxxyy.api.sanity.io/v2025-09-25/data/query/production";

  const query: Query = {
    query: `
      *[_type == "post" && _id == $id][0]{
        _id,
        _createdAt,
        _updatedAt,
        title,
        categories,
        author->{name},
        body,
        mainImage{asset->{_id,url}, alt}
      }
    `,
    params: { id },
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(query),
  });

  const data = await res.json();

  if (data.error) {
    console.error("Sanity query failed:", data.error);
    return null;
  }

  const fetched: FullPost = data.result;
  if (!fetched) return null;

  return {
    _id: fetched._id,
    _createdAt: fetched._createdAt,
    _updatedAt: fetched._updatedAt,
    title: fetched.title,
    author: fetched.author,
    body: fetched.body.map((block) => ({
      children: block.children.map((child) => ({ text: child.text })),
    })),
    categories: fetched.categories,
    mainImage: {
      url: fetched.mainImage?.asset?.url || "",
      alt: fetched.mainImage?.alt || "",
    },
  };
}

export const createPostsQuery = (
  offset = 0,
  limit = 10,
  category?: string,
): Query => {
  const safeCategoryFilter =
    category && category !== "All Posts"
      ? ` && "${category}" in categories[]?.title`
      : "";

  const range = `[${offset}..${offset + limit - 1}]`;

  return {
    query: `
      *[_type == "post"${safeCategoryFilter}] | order(_createdAt desc)${range}{
        _id,
        _createdAt,
        _updatedAt,
        title,
        categories,
        author->{name},
        body,
        mainImage{asset->{_id,url}, alt}
      }
    `,
  };
};
