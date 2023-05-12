import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { API_URL } from '../../../api';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
// import './Gallery.css';
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



