import Lightbox from 'react-image-lightbox';
import Box from '@mui/material/Box';
import 'react-image-lightbox/style.css';
import './Gallery.css';
import React from 'react';

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {
        const { photoIndex, isOpen } = this.state;

        return (
            <>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', pb: '2rem' }}>
                    {images.map((item, index) => (
                        <button type="button" onClick={() => this.setState({ isOpen: true, photoIndex: index })} className='itemButton'>
                            <Box sx={{ width: '100%', height: '100%' }}>
                                <img
                                    src={`${item}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    // alt={item.title}
                                    loading="lazy"
                                    style={{ height: '100%', margin: 'auto' }}
                                />
                            </Box>
                        </button>
                    ))}
                </Box>

                {isOpen && (
                    <Lightbox
                        mainSrc={itemData[photoIndex].src}
                        nextSrc={itemData[(photoIndex + 1) % itemData.length].src}
                        prevSrc={itemData[(photoIndex + itemData.length - 1) % itemData.length].src}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + itemData.length - 1) % itemData.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % itemData.length,
                            })
                        }
                        imageTitle={itemData[photoIndex].title}
                        imageCaption={'Image Caption'}
                    />
                )}
            </>
        )
    }
}

const images = [
    'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
];

const itemData = [
    {
        src: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
    },
    {
        src: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
    },
    {
        src: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
    },
    {
        src: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
    },
    {
        src: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
    },
    {
        src: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
    },
    {
        src: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
    },
    {
        src: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors',
    },
    {
        src: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        title: 'Coffee',
    },
    {
        src: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Storage',
    },
    {
        src: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle',
    },
    {
        src: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title: 'Coffee table',
    },
];