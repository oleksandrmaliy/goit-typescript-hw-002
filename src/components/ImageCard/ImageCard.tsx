import { Image } from "../../types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  image: Image;
  onModalOpen: (pictures: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onModalOpen }) => {
  const { urls, alt_description } = image;
  return (
    <li>
      <img
        onClick={() => onModalOpen(image)}
        className={css.img}
        src={urls.small}
        alt={alt_description}
      />
    </li>
  );
};

export default ImageCard;
