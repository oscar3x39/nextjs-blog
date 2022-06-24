import Link from 'next/link'

export default function Post({ post }) {
  return (
    <>
      <Link href={`/article/${post.slug}`}>
        <a className='btn'>{post.frontmatter.title}</a>
      </Link>
      <div className='post-date'>{post.frontmatter.date}</div>
    </>
  )
}