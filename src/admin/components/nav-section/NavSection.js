import { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
// @mui
import { Box, List, ListItemText } from '@mui/material';
//
import { StyledNavItem, StyledNavItemIcon } from './styles';
// component
import SvgColor from '../svg-color';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

NavSection.propTypes = {
  data: PropTypes.array,
};


const config = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
    isClick:false
  },
  {
    title: 'Activities',
    // path: '/dashboard/activity',
    icon: icon('ic_cart'),
    isClick:false,
    subItems: [
      {
        title: 'Report New Activity',
        path:'/dashboard/activity',
        icon: icon('ic_analytics'),
      },
      {
        title: 'Reported Activities',
        path: '/dashboard/pastactivity',
        icon: icon('ic_blog'),
      },
    ],
  },

  {
    title: 'Admin Reporting',
    path: '/dashboard/admin',
    icon: icon('ic_cart'),
    isClick:false,
  },
  
  {
    title: 'News Reporting',
    path: '/dashboard/news',
    icon: icon('ic_cart'),
    isClick:false
  },
  {
    title: 'Expense Manager',
    path: '/dashboard/manage-expense',
    icon: icon('ic_lock'),
    isClick:false
  },
  {
    title: 'Zone',
    path: '/dashboard/zone',
    icon: icon('ic_lock'),
    isClick:false
  },
  {
    title: 'Region',
    path: '/dashboard/region',
    icon: icon('ic_lock'),
    isClick:false
  },

  {
    title: 'Members',
    path: '/dashboard/members',
    icon: icon('ic_lock'),
    isClick:false
  },
];


export default function NavSection({ ...other }) {
  const [navConfig, setNavConfig] = useState(config);

  const handleClick = (title) => {
    setNavConfig((prevState) =>
      prevState.map((item) =>
        item.title === title ? { ...item, isClick: !item.isClick } : item
      )
    );
  };
  
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {navConfig.map((item) => (
          <>
          <NavItem key={item.title} item={item} onClick={()=>{handleClick(item.title)}}/>
          {item.subItems && item.isClick && (
            <List disablePadding sx={{ pl: 3 }}>
              {item.subItems.map((subItem) => (
                <NavItem key={subItem.title} item={subItem} />
              ))}
            </List>
          )}
          </>
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item ,onClick}) {
  const { title, path, icon, info ,subItems,isClick} = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      onClick={onClick} 
      sx={!subItems && {
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />
      {subItems && (isClick ? <CloseIcon /> : <AddIcon />)}
      {info && info}
    </StyledNavItem>
  );
}
