export type Query = {
  query: string;
  params?: {
    id?: string | null | undefined;
    offset?: number;
    limit?: number;
    category?: string;
  };
};

export type FullPost = {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  categories: { title: string }[] | null;
  author: {
    name: string;
  };
  body: {
    _key: string;
    _type: "block";
    children: {
      _key: string;
      _type: "span";
      text: string;
      marks: string[];
    }[];
    markDefs: unknown[];
    style: string;
  }[];
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
};

export type Post = {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  title: string;
  categories:
    | {
        title: string;
      }[]
    | null;
  author: {
    name: string;
  };
  body: {
    children: {
      text: string;
    }[];
  }[];
  mainImage: {
    url: string;
    alt: string;
  };
};