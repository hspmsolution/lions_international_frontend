import { Container, Typography } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

function RecipeReviewCard() {
    return (
        <Card sx={{ maxWidth: 345, height: '350px' }}>
            <CardHeader
                title="Zone Chairperson :"
                sx={{ 
                    backgroundImage: "url('https://img.freepik.com/free-vector/abstract-blue-geometric-shapes-background_1035-17545.jpg?w=1060&t=st=1678466335~exp=1678466935~hmac=75a02f83c3ba218e2889d9504d8cb8240396d7d9cf346cf88844cf9430db4902')", 
                    color: '#00135ede' 
                }}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
        </Card>
    );
}

function OrgChart() {
    return (
        <>
            <Container sx={{ marginTop: '8rem' }}>
                <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
                    Region Chairperson:
                </Typography>
                <RecipeReviewCard />
                <hr />
            </Container>
        </>
    )
}

export default OrgChart;