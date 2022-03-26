import React from 'react'
import sidebar_logo from '../../assets/img/sidebar_logo.png'

import{RiLogoutBoxLine,RiSettings2Line, RiUser2Line, RiContactsLine, RiMessage2Line, RiCalendarEventLine, RiPlayListAddFill, RiEdit2Line, RiLayoutMasonryFill, RiMenu5Line} from 'react-icons/ri'

import {SideBarListTitle, SideBarList, SideBarStyles, SideBarListContainer, SideBarToggle, SideBarLayout, SideBarLogo} from './styles'
import { Link } from 'react-router-dom'

import { SideBarButton } from 'ui/buttons'

import { signOut } from "firebase/auth";
import { auth } from "libs/firebase";

function SideBar  (props){
    var toggleVar = "closed"
    const onClickMenu = () => {
        if (toggleVar == "closed"){
            document.getElementById("sidebar").style.width = "12rem"
            document.getElementById("sidebar").style.width = "12rem"
            toggleVar ="open"
        }
        else { 
            document.getElementById("sidebar").style.width = "4rem"
            toggleVar ="closed"
        }
    }

    function onLogOutRequest(e) {
        signOut(auth);
    }

    return( 
        <SideBarLayout id="sidebar" >
            <SideBarList>
                <SideBarToggle onClick={onClickMenu}>
                    <RiMenu5Line size="1.5rem" fill="white"></RiMenu5Line>
                    <span>ValleyRose</span>
                </SideBarToggle>
                <SideBarLogo src={sidebar_logo}></SideBarLogo>
            </SideBarList>
            <SideBarListContainer>
                <SideBarStyles>
                    <SideBarListTitle id="title" >Navigation</SideBarListTitle>
                    <SideBarList>
                        <Link to="../dashboard">
                            <RiLayoutMasonryFill size="1.5rem"></RiLayoutMasonryFill>
                            <span>Dashboard</span>
                        </Link>
                        <Link to="add">
                            <RiPlayListAddFill size="1.5rem"></RiPlayListAddFill>
                            <span>New Product</span>
                        </Link>
                        <Link to="edit">
                            <RiEdit2Line size="1.5rem"></RiEdit2Line>
                            <span>Edit</span>
                        </Link>
                    </SideBarList>
                </SideBarStyles>
                <SideBarStyles>
                    <SideBarListTitle id="title">Apps</SideBarListTitle>
                    <SideBarList>
                        <Link to="../calender">
                            <RiCalendarEventLine size="1.5rem"></RiCalendarEventLine>
                            <span>Calender</span>
                        </Link>
                        <Link to="../messenger">
                            <RiMessage2Line size="1.5rem"></RiMessage2Line>
                            <span>Messenger</span>
                        </Link>
                        <Link to="../messenger">
                            <RiContactsLine size="1.5rem"></RiContactsLine>
                            <span>Contacts</span>
                        </Link>
                        <Link to="../messenger">
                            <RiEdit2Line size="1.5rem"></RiEdit2Line>
                            <span>File Manager</span>
                        </Link>
                    </SideBarList>
                </SideBarStyles>
                <SideBarStyles>
                    <SideBarListTitle id="title">Account</SideBarListTitle>
                    <SideBarList>
                        <Link to="../messenger">
                            <RiUser2Line size="1.5rem"></RiUser2Line>
                            <span>Profile</span>
                        </Link>
                        <Link to="../messenger">
                            <RiSettings2Line size="1.5rem"></RiSettings2Line>
                            <span>Settings</span>
                        </Link>
                        <SideBarButton onClick={onLogOutRequest}>
                            <RiLogoutBoxLine size="1.5rem"></RiLogoutBoxLine>
                            <span>Log Out</span>
                        </SideBarButton>
                    </SideBarList>
                </SideBarStyles>

                

            </SideBarListContainer>
        </SideBarLayout>
    )
}

export default SideBar 

