import React from 'react'

export default function Post({ postData }) {
    return (
        <>
            <div className="row">
                <img src={"/images/posts/" + postData.id + ".jpeg"} className="col-md-3" />
                <h3 className="heading">{postData.title}</h3>
                <p>{postData.body}</p>
            </div>
        </>
    )
}

export async function getServerSideProps({ query }) {
    const { id } = query;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/` + id)
    const postData = await res.json()
    return {
        props: { postData }
    }
}
