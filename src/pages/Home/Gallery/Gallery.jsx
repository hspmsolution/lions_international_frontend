import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { API_URL } from '../../../api';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './Gallery.css';
import { useSelector} from 'react-redux';


export default function MasonryImageList() {
    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpen, setIsOpen] = React.useState(false);
    const images = useSelector((state) => state.client.galleryImages);
    return (
        <div>
            <Typography variant='h3' className='team-h'>Gallery</Typography>
            <Box sx={{ height: 210, display: 'flex', justifyContent: 'space-evenly', mb: '2rem' }}>
                {images?.map((path, index) => (
                    <button type="button" onClick={() => { setIsOpen(true); setPhotoIndex(index) }} className='itemButton'>
                        <img
                            src={`${API_URL}${path?.image}?w=248&fit=crop&auto=format`}
                            srcSet={`${API_URL}${path?.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={path?.title}
                            loading="lazy"
                            style={{ height: '100%', margin: 'auto' }}
                        />
                    </button>
                ))}
            </Box>

            {isOpen && (
                <Lightbox
                    mainSrc={`${API_URL}${images[photoIndex]?.image}`}
                    nextSrc={`${API_URL}${images[(photoIndex + 1) % images.length]?.image}`}
                    prevSrc={`${API_URL}${images[(photoIndex + images.length - 1) % images.length]?.image}`}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                />
            )}
        </div>
    );
}


// const images = [
//     'https://images.unsplash.com/photo-1549388604-817d15aa0110',
//     'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
//     'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
//     'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
// ];

// const itemData = [
//     {
//         img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
//         title: 'Bed',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
//         title: 'Sink',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
//         title: 'Books',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
//         title: 'Kitchen',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
//         title: 'Blinds',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
//         title: 'Chairs',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
//         title: 'Laptop',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
//         title: 'Doors',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
//         title: 'Coffee',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
//         title: 'Storage',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
//         title: 'Candle',
//     },
//     {
//         img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
//         title: 'Coffee table',
//     },
// ];
