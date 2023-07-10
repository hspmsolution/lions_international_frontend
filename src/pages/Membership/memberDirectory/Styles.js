import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  profileContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContent: {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    padding: "0",
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
    
  },
  cardHeaders: {
    display: "grid",
    alignItems: "center",
    justifyItems: "center",
    gap: "3.9em",
  },
  avatar: {
    width: "150px",
    height: "150px",
  },
  socialIcons: {
    textAlign: "center",
    "& a": {
      color: "#3d4750",
      margin: "10px",
      padding: "8px 10px",
      backgroundColor: "#cdcdcd",
      borderRadius: "5px",
      fontSize: "1.3rem",
    },
    "& a:hover": { backgroundColor: "#15AAFF", color: "white" },
  },
  avatarBg: {
    height: "50%",
    width: "100%",
    backgroundImage:
      "url('https://unsplash.imgix.net/45/ZLSw0SXxThSrkXRIiCdT_DSC_0345.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=857f07b76abac23a7fb7161cc7b12a46')",
    backgroundSize: "cover",
  },
  contentList: {
    padding: 0,
    "& .MuiListItem-root": {
      padding: "0 !important",
    },
  },
  fullname: {
    color: "#15AAFF",
  },
  newsPagination: {
    '& ul': {
        gap: '10px'
    }
}
}));
