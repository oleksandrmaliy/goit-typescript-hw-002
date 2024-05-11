import { Image } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageCardProps {
  images: Image[];
  onModalOpen: (pictures: Image) => void;
}

const ImageGallery: React.FC<ImageCardProps> = ({ images, onModalOpen }) => {
  return (
    <ul className={css.list}>
      {Array.isArray(images) &&
        images.map((image) => {
          return (
            <ImageCard key={image.id} image={image} onModalOpen={onModalOpen} />
          );
        })}
    </ul>
  );
};

export default ImageGallery;
