import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Albums = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums`, {
        params: { userId },
      })
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => console.error("Error fetching albums:", error));
  }, [userId]);

  return (
    <div>
      <h1>Albums</h1>
      <ul className="album-list">
        {albums.map((album) => (
          <li key={album.id}>
            {album.title}
            <Link to={`/photos/${album.id}`}>
              <button>Photos</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
