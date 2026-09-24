import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import img1 from "../../../assets/project/JdSignature/01.webp";
import img2 from "../../../assets/project/JdSignature/02.webp";
import img3 from "../../../assets/project/JdSignature/03.webp";
import img4 from "../../../assets/project/JdSignature/04.webp";
import img5 from "../../../assets/project/JdSignature/05.webp";

const photos = [img1, img2, img3, img4, img5];

const Gallery = () => {
  return (
    <section className="md:px-20 py-10 px-4">
      <h2 className="md:text-5xl text-3xl md:mb-10 mb-5 md:text-left text-center">
        GALLERY
      </h2>
      <PhotoProvider>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-2">
          {photos.map((item, index) => (
            <PhotoView key={index} src={item}>
              <img
                className="w-full h-48 md:h-64 object-cover shadow-xl rounded hover:scale-105 duration-300 cursor-pointer"
                src={item}
                alt={`JD Signature render ${index + 1}`}
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </section>
  );
};

export default Gallery;
