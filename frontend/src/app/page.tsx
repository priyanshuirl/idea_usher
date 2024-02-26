"use client";
import { BlogCard } from "@/components/BlogCard";
import styles from "./BlogList.module.css";
import { useEffect, useState } from "react";

const getData = async (page: number = 1) => {
  const limit = 9;
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts?offset=${
      (page - 1) * limit
    }&limit=${limit}`
  );
  const blogs = await res.json();
  return blogs;
};

interface BlogList {
  blogs: [];
}

export default function Page() {
  const [page, setPage] = useState<number>(1);
  const [blogs, setBlogs] = useState<BlogList | null>(null);
  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => (prev !== 0 ? prev - 1 : prev));

  useEffect(() => {
    setBlogs(null);
    getData(page).then((data) => {
      setBlogs(data);
    });
  }, [page]);

  return (
    <main className={styles.pageContainer}>
      <div className={styles.blogsContainer}>
        {blogs === null ? (
          <div className={styles.loading}>
            <h1>Loading...</h1>
          </div>
        ) : (
          <>
            {blogs?.blogs?.map(({ id, photo_url, title }: any) => {
              return (
                <BlogCard title={title} id={id} image={photo_url} key={id} />
              );
            })}
          </>
        )}
      </div>
      <div className={styles.paginationComponent}>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </main>
  );
}
