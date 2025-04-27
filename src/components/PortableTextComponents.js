import '../styles/portable-text-components.css'


export const PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?.url) {
        console.error('Image asset missing', value);
        return null;
      }

      return (
        <div className="blogsection-image-container">
          <img
            src={value.asset.url}
            alt={value.alt || 'Post Image'}
            className="blogsection-image"
          />
        </div>
      );
    },

    videoBlock: ({ value }) => {
      if (!value?.videoUrl) return null; // corrected field name
      return (
        <div className="blogsection-video-container">
          <iframe
            width="100%"
            height="400"
            src={value.videoUrl}
            frameBorder="0"
            allowFullScreen
          />
          
        </div>
      );
    },

    listBlock: ({ value }) => {
      if (!value?.items?.length) return null;
      return (
        <ul className="blogsection-list-container">
          {value.items.map((item, idx) => (
            <li key={idx} className="blogsection-list">
              {item}
            </li>
          ))}
        </ul>
      );
    },
  },

  block: {
    normal: ({ children }) => (
      <p className="blogsection-block-container">
        {children}
      </p>
    ),
  },
};
