import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../posts/Header"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
export default function index({ posts }) {
  return (
    <>
      <Header />
      <ul className="row">
        {posts.map((post) => {
          return (
            <li keys={post.id} className="col-md-3 post">
              <p>{process.env.NEXT_PUBLIC_BASE_URL}</p>
              <img
                src={"/images/posts/" + post.id + ".jpeg"}
                className="postImage"
              />
              <h3 className="heading">
                <Link href="/posts/[id]" as={"/posts/" + post.id}>
                  <a className="link">{post.title}</a>
                </Link>
              </h3>
              <p>{post.body}</p>
              <hr />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`);
  const posts = await res.json();

  return {
    props: { posts },
  };
}
