import Link from 'next/link'
export default function Home() {
  return (
    <>
      <div className="row">
        <div className="col-1 text-center home">
          <Link href="/posts"><a className="a1">Post</a></Link>
        </div>
      </div>
    </>
  )
}
