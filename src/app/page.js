import Posts from "@/components/posts/Posts";

import './page.css'

export const metadata = {
  title: 'Posts Page',
  openGraph: {
    title: 'Posts Page',
  },
}

export default function Home() {
  return (
    <>
      <h1 className="title" >See posts below</h1>
      <Posts />
    </>
  );
}
