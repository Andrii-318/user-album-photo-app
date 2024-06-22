import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Photos = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos`, {
        params: { albumId },
      })
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => console.error("Error fetching photos:", error));
  }, [albumId]);

  return (
    <div>
      <h1>Photos</h1>
      <ul className="photo-list">
        {photos.map((photo) => (
          <li key={photo.id}>
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
            />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Photos;
