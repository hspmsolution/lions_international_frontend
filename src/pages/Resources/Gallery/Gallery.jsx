import { Box } from '@mui/material'
import CustomizedBreadcrumbs from '../../../components/Breadcrumb/Breadcrumb'
import Gallery from '../../../components/Gallery/Gallery'

export default function GalleryR() {
    return (
        <>
            <Box sx={{ backgroundImage: "url('/assets/img/bggg.png')", backgroundAttachment: 'fixed' }}>
                <CustomizedBreadcrumbs label={'Resources'} subLabel={'Gallery'} />
                <Gallery />
            </Box>
        </>
    )
}