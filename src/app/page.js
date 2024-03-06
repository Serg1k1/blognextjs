import Posts from "@/components/posts/Posts";

import './page.css'

export default function Home() {
  return (
    <>
      <h1 className="title" >See posts below</h1>
      <Posts />
    </>
  );
}
