import React from 'react';

function Card({ data }) {
  const { largeImageURL, user, likes, downloads, views, tags } = data;
  const tagsData = tags.split(',');

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={largeImageURL} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl-mb-2">
          Photo by {user}
        </div>
        <ul>
          <li>
            <strong>Views : </strong>
            {views}
          </li>
          <li>
            <strong>Downloads : </strong>
            {downloads}
          </li>
          <li>
            <strong>Likes : </strong>
            {likes}
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap px-4 py-3">
        {tagsData.map((tag, index) => {
          return (
            <span
              key={index}
              className="inlin-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semiblod text-gray-700 m-1"
            >
              # {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
