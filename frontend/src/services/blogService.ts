import type { Blog } from '../types/blog';
const API_URL = 'http://localhost:5000/api/blogs';

export const getBlogs = async (): Promise<Blog[]> => {
  const response = await fetch(API_URL);
  return response.json();
};

export const getBlogById = async (id: string): Promise<Blog> => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export const createBlog = async (blog: Blog): Promise<Blog> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(blog),
  });

  return response.json();
};

export const updateBlog = async (id: string, blog: Blog): Promise<Blog> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(blog),
  });

  return response.json();
};

export const deleteBlog = async (id: string): Promise<{ message: string }> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });

  return response.json();
};
