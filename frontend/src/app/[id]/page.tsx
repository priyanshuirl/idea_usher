import Image from "next/image";
import styles from "./BlogPost.module.css";

const getData = async (id: number) => {
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
  );
  const blogData = await res.json();
  return blogData;
};

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const { blog } = await getData(Number(id));
  return (
    <main className={styles.pageWrapper}>
      <Image
        src={blog?.photo_url}
        alt={blog?.description}
        width={1000}
        height={400}
        className={styles.blogImage}
      />
      <h1>{blog?.title}</h1>
      <p>{blog?.description}</p>
      <span>{new Date(blog?.created_at ?? "").toDateString()}</span>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: blog?.content_html }}
      />
    </main>
  );
}
