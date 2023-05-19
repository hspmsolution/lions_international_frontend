import React from 'react'
import CustomizedBreadcrumbs from '../../../components/Breadcrumb/Breadcrumb'
import useStyles from './Styles'
import { Box, Container } from '@mui/material'

export default function MiniDirectory() {
  const classes = useStyles();

  return (
    <div>
      <Box sx={{ backgroundImage: "url('/assets/img/bggg.png')", backgroundAttachment: 'fixed', pb: '2rem' }}>
        <CustomizedBreadcrumbs label={"Membership"} subLabel={"Mini Directory"} />
        <Container >
          <iframe src='/assets/MiniDirectory2023-24.pdf' title='Mini Directory' className={classes.businessPdfIframe} />
        </Container>
      </Box>
    </div>
  )
}