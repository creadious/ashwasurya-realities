import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import img1 from '../../assets/g1.jpg';
import img2 from '../../assets/g2.jpg';
import img3 from '../../assets/g3.jpg';
import img4 from '../../assets/g4.jpg';
import img5 from '../../assets/g5.jpg';
import img6 from '../../assets/g6.jpg';

const Gallery = () => {

    const photos = [img1, img2, img3, img4, img5, img6,];


    return (
        <section className="md:px-20 py-10 px-4">
            <h2 className="md:text-5xl text-3xl md:mb-10 mb-5 md:text-right text-left">GALLERY</h2>
            <PhotoProvider>
                <div className="grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-2">
                    {photos.map((item, index) => (
                        <PhotoView key={index} src={item}>
                            <img className='w-full h-full object-cover shadow-2xl p-2 hover:scale-110 duration-300' src={item} alt="" />
                        </PhotoView>
                    ))}
                </div>
            </PhotoProvider>
        </section >
    );
};

export default Gallery;