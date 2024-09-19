import List from '@mui/material/List';

import sideBarConfig from '../../../router/sideBarConfig';
import SideBarItem from './sideBarItem';

function SideBarContain() {
    return (
            <List>
                {sideBarConfig.map((item, index) => (
                    <SideBarItem key={index} item={item} childrenItems={item.children}/>
                ))}
            </List>
    )
}

export default SideBarContain
