
'use client';

import { client } from '../../../sanity';
import { PortableText } from '@portabletext/react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { PortableTextComponents } from '../../components/PortableTextComponents'; // Correct path
import '../../blogstandard-page.css'
export default function BlogPostPage() {
  const [post, setPost] = useState(null);
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `
          *[_type == "blogsStandardDetails" && slug.current == $slug][0] {
            title,
            introText,
            content[]{
              ...,
              _type == "image" => {
                ...,
                asset->{
                  _id,
                  url
                }
              }
            }
          }
        `;
        const fetchedPost = await client.fetch(query, { slug });
        setPost(fetchedPost);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (!post) {
    return <div>Loading post...</div>;
  }

  return (

    <div className='container'>

      <h1 className='title'>{post.title}</h1>
      <p className='intro'>{post.introText}</p>

      <div className='content'>
          <PortableText
          value={post.content}    // <<<<<<✅ Correct field!
          components={PortableTextComponents}/>
      </div>

    </div>
  );
}
