import { useEffect, useState } from 'react';
import { requesForImages } from './components/API/api';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import Modal from 'react-modal';
import { animateScroll } from 'react-scroll';
import { Image } from './types';

Modal.setAppElement('#root');

const options = {
  duration: 500,
  smooth: true,
};

interface Results {
  results: Image[];
  total_pages: number;
}

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchImagesByQuery = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const data: Results = await requesForImages(query, page);
        setImages(prevImages => [...prevImages, ...data.results]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImagesByQuery();
  }, [query, page]);

  const onModalOpen = (pictures: Image): void => {
    setModalImage(pictures);
    setModalIsOpen(true);
  };

  const onModalClose = (): void => {
    setModalIsOpen(false);
  };

  const handleSearch = (data: string): void => {
    setImages([]);
    setPage(1);
    setQuery(data);
  };

  const handleClick = (): void => {
    setPage(page + 1);
    animateScroll.scrollMore(470, options);
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <ImageGallery images={images} onModalOpen={onModalOpen} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && <LoadMoreBtn onClick={handleClick} />}
      <Modal isOpen={modalIsOpen} onRequestClose={onModalClose}>
        {modalImage && <ImageModal images={modalImage} />}
      </Modal>
    </>
  );
};

export default App;
