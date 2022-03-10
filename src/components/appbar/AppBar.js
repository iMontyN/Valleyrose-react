import React from 'react'


import {IoEllipsisVertical, IoMailOutline, IoNotificationsOutline} from 'react-icons/io5'


import { IconButton } from '../../ui/buttons'

import {AppBarStyles,AppBarItemGroup, AppBarTitle, AppBarItems, AppBarItem} from './styles'

function AppBar  (props){
    return( 

        <AppBarStyles>
            <AppBarItems>
                <AppBarItem>
                    <AppBarTitle>Dashboard</AppBarTitle>
                </AppBarItem>
                <AppBarItemGroup>
                    <IconButton>
                        <IoMailOutline size="1.25rem" color="#000"/>
                    </IconButton>
                    <IconButton>
                        <IoNotificationsOutline size="1.25rem" color="#000"/>
                    </IconButton>
                    <IconButton>
                        <img src="https://avatars.dicebear.com/api/big-ears/hello.svg?b=%23547cff&r=50" height="35" alt="" />
                    </IconButton>
                    <IconButton>
                        <IoEllipsisVertical size="1.25rem" color="#000"/>
                    </IconButton>
                </AppBarItemGroup>
            </AppBarItems>
            
        </AppBarStyles>
    )
}

export default AppBar 