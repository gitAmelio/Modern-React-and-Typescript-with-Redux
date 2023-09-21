import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import {searchImages, Image} from './api';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [images, setImages] = useState<Image[]>([]);
  
  const handleInputOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.currentTarget.value)
  }

  const fetchImages: (input: string) => void = async (input) => {
    const urls = await searchImages(input)
    setImages(urls)
  }

  const handleSearch = () => {
    fetchImages(input);
  }    

  return (
    <div className='app'>
      <SearchBar value={input} onChange={handleInputOnChange} searchCallback={handleSearch}/>
      <ImageList images={images} />
    </div>
  );
}

export default App;