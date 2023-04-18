import { Box, Card, Typography } from "@mui/material";


export default function ActivityCard({item}) {

    return (
        <Card variant="outlined" sx={{ width: '30%', height: '300px' }}>
            <Box
                sx={{ flexBasis: 120, borderRadius: 'sm' }}
            >
                <img
                    src={`${item.src}?w=120&fit=crop&auto=format`}
                    srcSet={`${item.src}?w=120&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
            </Box>
            <Typography variant='h6'>{item.title}</Typography>
            <Typography>{item.description}</Typography>
        </Card>
    )
}