import MUIDataTable from "mui-datatables";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import CustomizedBreadcrumbs from "../../../components/Breadcrumb/Breadcrumb";
import useStyles from './Styles';

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true
});

export default function MemberDir() {
  const responsive = "simple";
  const tableBodyMaxHeight = "";
  const searchBtn = true;
  const downloadBtn = false;
  const printBtn = false;
  const viewColumnBtn = false;
  const filterBtn = true;
  const classes = useStyles();

  const columns = [
    "Sr No.",
    "Title",
    { name: "Full Name", options: { filterOptions: { fullWidth: true } } },
    "Club Name",
    "Occupation"
  ];

  const options = {
    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: "dropdown",
    responsive,
    selectableRows: 'none', // Disable the checkbox column
    tableBodyMaxHeight,
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    }
  };

  const data = [
    [1, "Lion Member", "Gabby George", "himym", "Business Analyst"],
    [
      2,
      "Past District Governor",
      "Aiden Lloyd",
      "PUNE SUPREME",
      "CEO of Tony's Burger Palace"
    ],
    [3, "Club Administrator", "Jaden Collins", "PUNE SUPREME", "CA"],
    [4, "Club Director", "Franky Rees", "VADGAON", "Business Analyst"],
    [5, "Club Treasurer", "Aaren Rose", "Toledo", "Business Analyst"],
    [6, "Lion Member", "Joe Jones", "POONA SARASBAUG", "Computer Programmer"],
    [7, "Club Director", "Johnny Jones", "St. Petersburg", "Business Analyst"],
    [8, "Lion Member", "Jimmy Johns", "Baltimore", "Business Analyst"],
    [9, "Lion Member", "Jacky Jackson", "Baltimore", "Business Consultant"],
    [10, "Club Director	", "Jack Jackson", "El Paso", "Business Analyst"],
    [11, "Lion Member", "Jo Jo", "Washington DC", "Software Developer"],
    [12, "Lion Member", "Donna Marie", "Annapolis", "Business Manager"]
  ];

  return (
    <div className="memberTable">
      <Box sx={{ background: "url('/assets/img/bggg.png')", backgroundAttachment: 'fixed' }}>
        <CustomizedBreadcrumbs label={'Membership'} subLabel={'Member Directory'} />
        <Container sx={{ py: '5rem' }} className={classes.muiTableContainer}>
          <CacheProvider value={muiCache}>
            <ThemeProvider theme={createTheme()}>
              <MUIDataTable
                // title={"Member Directory"}
                data={data}
                columns={columns}
                options={options}
              />
            </ThemeProvider>
          </CacheProvider>
        </Container>
      </Box>
    </div>
  );
}