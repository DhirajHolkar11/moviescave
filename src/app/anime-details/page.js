// 'use client';
// import React, { useEffect, useState } from 'react';
// import { client } from '../../../sanity';
// import { useSearchParams } from 'next/navigation';
// import '../../styles/anime-details.css';

// const AnimeDetailsPage = () => {
//   const searchParams = useSearchParams();
//   const slug = searchParams.get('slug');

//   const [anime, setAnime] = useState(null);

//   useEffect(() => {
//     const fetchAnime = async () => {
//       try {
//         const query = `*[_type == "animesDetails" && slug.current == $slug][0]{
//           title,
//           year,
//           country,
//           revenue,
//           director,
//           studio,
//           genre,
//           "imageUrl": image.asset->url,
//           description
//         }`;
//         const data = await client.fetch(query, { slug });
//         setAnime(data);
//       } catch (error) {
//         console.error('Error fetching anime details:', error);
//       }
//     };

//     if (slug) {
//       fetchAnime();
//     }
//   }, [slug]);

//   if (!anime) {
//     return <div className="loading">Loading anime details...</div>;
//   }

//   return (
//     <div className="anime-details-container">

//       <div className="anime-details-row">

//         <div className="anime-image">
//           <img src={anime.imageUrl} alt={anime.title} />
//         </div>

//         <div className="anime-info">
//           <h1>{anime.title}</h1>
//           <p><strong>Year:</strong> {anime.year}</p>
//           <p><strong>Studio:</strong> {anime.studio}</p>
//           <p><strong>Revenue:</strong> ${anime.revenue?.toLocaleString()}</p>
//           <p><strong>Country:</strong> {anime.country}</p>
//           <p><strong>Director:</strong> {anime.director}</p>
//           <p><strong>Genre:</strong> {anime.genre?.join(', ')}</p>
//         </div>

//       </div>


//       <div className="anime-description">
//         <h2>Description</h2>
//         <p>{anime.description}</p>
//       </div>

//     </div>


//   );
// };

// export default AnimeDetailsPage;








// app/anime-details/page.js

import React, { Suspense } from 'react';
import AnimeDetailsPage from './AnimeDetailsPage';

export default function Page() {
  return (
    <Suspense fallback={<div className="loading">Loading anime details...</div>}>
      <AnimeDetailsPage />
    </Suspense>
  );
}
