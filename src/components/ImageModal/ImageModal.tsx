import { Image } from "../../types";

interface ImageModalProps {
  images: Omit<Image, "id">;
}

const ImageModal: React.FC<ImageModalProps> = ({ images }) => {
  const { urls, alt_description } = images;
  return (
    <div>
      <img src={urls.regular} alt={alt_description} />
    </div>
  );
};
export default ImageModal;
