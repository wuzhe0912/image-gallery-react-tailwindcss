import { useState, useEffect } from 'react';
import Search from './components/Search';
import Card from './components/Card';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`;
    const fetchImages = async () => {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setImages(data.hits);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchImages();
  }, [term]);

  return (
    <div className="container mx-auto">
      <Search searchText={(text) => setTerm(text)} />

      {!isLoading && images.length === 0 && (
        <h1 className="text-sky-800 text-5xl text-center mx-auto mt-32">
          No results found.
        </h1>
      )}

      {isLoading ? (
        <h1 className="text-sky-800 text-5xl text-center mx-auto mt-32">
          Loading...
        </h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => {
            return <Card key={image.id} data={image} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
