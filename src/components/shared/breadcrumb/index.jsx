import Breadcrumbs from '@mui/material/Breadcrumbs';
import BreadcrumbItem from './breadcrumbItem';
import routeConfig from '../../../router/routeConfig';
import {useLocation } from 'react-router-dom';


function Breadcrumb() {
  const location = useLocation();
  const currentBreadcrumb = routeConfig.find(x => x.path === location.pathname).breadcrumb;
  return (
    <div>
       <Breadcrumbs aria-label="breadcrumb">
            {currentBreadcrumb && currentBreadcrumb.map(item => (<BreadcrumbItem key={item.label} label={item.label} icon={item.icon} url={item.url}/>))}
      </Breadcrumbs>
    </div>
  )
}

export default Breadcrumb
