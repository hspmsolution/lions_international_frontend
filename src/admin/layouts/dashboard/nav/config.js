// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  // {
  //   title: 'user',
  //   path: '/dashboard/user',
  //   icon: icon('ic_user'),
  // },
  {
    title: 'Activities',
    path: '/dashboard/activity',
    icon: icon('ic_cart'),
  },
  {
    title: 'Report New Activity',
    path: '/dashboard/activity',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Reported Activities',
    path: '/dashboard/pastactivity',
    icon: icon('ic_blog'),
  },
  {
    title: 'Admin Reporting',
    path: '/dashboard/admin',
    icon: icon('ic_cart'),
  },
  {
    title: 'News Reporting',
    path: '/dashboard/news',
    icon: icon('ic_cart'),
  },

  {
    title: 'Members',
    path: '/dashboard/member',
    icon: icon('ic_lock'),
  },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
  // {
  //   title: 'register',
  //   path: '/register',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
