import React from 'react'
import CustomizedBreadcrumbs from '../../../components/Breadcrumb/Breadcrumb'
import useStyles from './Styles'
import { Box, Container } from '@mui/material'

export default function MainDirectory() {
  const classes = useStyles();

  return (
    <div>
      <Box sx={{ backgroundImage: "url('/assets/img/bggg.png')", backgroundAttachment: 'fixed', pb: '2rem' }}>
        <CustomizedBreadcrumbs label={"Membership"} subLabel={"MainDirectory"} />
        <Container >
          <iframe src='https://lionsdistrict317f.org/api/static/assets/1691302698949-maindirectory.pdf' title='Main Directory' className={classes.businessPdfIframe} />
        </Container>
      </Box>
    </div>
  )
}