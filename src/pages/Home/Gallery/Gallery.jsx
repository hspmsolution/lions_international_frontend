import * as React from 'react';
import { Typography } from '@mui/material'; // This only needs to be imported once in your app
import Gallery from '../../../components/Gallery/Gallery';

export default class MasonryImageList extends React.Component {

    render() {
        return (
            <div style={{ backgroundImage: "url('/assets/img/bggg.png')", backgroundAttachment: 'fixed' }}>
                <Typography variant='h3' className='team-h'>Gallery</Typography>
                <Gallery />
            </div>
        );
    }
}