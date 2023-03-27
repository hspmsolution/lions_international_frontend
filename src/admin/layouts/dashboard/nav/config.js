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
    title: 'Expense Manager',
    path: '/dashboard/manage-expense',
    icon: icon('ic_lock'),
  },
  {
    title: 'Zone',
    path: '/dashboard/zone',
    icon: icon('ic_lock'),
  },
  {
    title: 'Region',
    path: '/dashboard/region',
    icon: icon('ic_lock'),
  },

  {
    title: 'Members',
    path: '/dashboard/members',
    icon: icon('ic_lock'),
  },
];

export default navConfig;
