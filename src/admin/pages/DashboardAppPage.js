import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
import { green } from '@mui/material/colors';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Icon } from '@mui/material';
// components
import Iconify from '../components/iconify';
import {LocalActivity} from '@mui/icons-material';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------
export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard | Minimal UI </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Dashboard
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
          <AppWidgetSummary title="Activities Reporting" total={2} color="info" />
          
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Admin Reporting" total={1} color="info" />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="News Reporting" total={45} color="warning"  />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Members" total={234} color="error"  />
          </Grid>

       
        </Grid>
      </Container>
    </>
  );
}
