import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
    breadcrumbCont: {
        height: '11rem',
        padding: '0 2rem',
        backgroundImage: "url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: '100%',
        backgroundAttachment: 'fixed',
        display: 'flex',
        color: 'white',
        position: 'relative',
        marginBottom: '3rem',
        '@media (min-width:300px)': {
            padding: 0,

        },
    },
    breadcrumb: {
        position: 'absolute',
        bottom: '15px',
        right: '20px',
        '@media (min-width:300px)': {
            // right: '0'
        },
    }
}))