import Link from 'next/link';
import React from 'react'

const BlogPage = () => {
  return (
    <main>
        <h1>Welcome to our Blog page</h1>
        <p><Link href="/blog/post-1">Messi is better</Link></p>
        <p><Link href="/blog/post-2">Ronaldo is the best</Link></p>
    </main>
  )
}

export default BlogPage;