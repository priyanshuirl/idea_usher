import React from "react";
import styles from "./BlogCard.module.css";
import Image from "next/image";
import Link from "next/link";

interface PropTypes {
  title: string;
  image: string;
  id: number;
}

const BlogCard = (props: PropTypes) => {
  const { title, image, id } = props;
  return (
    <Link href={`/${id}`} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <Image
            src={image}
            alt={title}
            width={290}
            height={200}
            className={styles.nextImage}
          />
          <h2>{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export { BlogCard };
