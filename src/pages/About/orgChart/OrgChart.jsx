import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "@mui/material/Accordion";
import { Box, Container, Typography } from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import ZoneTable from "./ZoneTable";
import { districtData } from "../../../actions/client";

export default function OrgChart() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.client.districtData);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  React.useEffect(() => {
    dispatch(districtData());
  }, [dispatch]);

  return (
    <>
      <Box
        sx={{
          backgroundImage: "url('/assets/img/bggg.png')",
          backgroundAttachment: "fixed",
        }}
      >
        <CustomizedBreadcrumbs label={"Organization Chart"} />
        <Container sx={{ pb: "3rem" }}>
          {data.map((region, index) => (
            <Accordion
              expanded={expanded === index}
              onChange={handleChange(index)}
              key={index}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{ display: { sm: 'block', md: 'flex' } }}
              >
                <Typography variant="h4" sx={{ width: "33%", flexShrink: 0 }}>
                  {region.name}
                </Typography>
                <Typography variant="h5" sx={{ color: "text.secondary" }}>
                  Region Chairperson{region.chairPerson}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ display: "flex", flexWrap: 'wrap', gap: "3rem", justifyContent: 'center' }}>
                {region.zones?.map((zone, i) => (
                  <ZoneTable zone={zone} key={i} />
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>
    </>
  );
}