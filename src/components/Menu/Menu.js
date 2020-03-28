import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/img/logo.svg';

import './Menu.scss';

export default function MenuTop() {
    return (
        <div className="menu-top">
            <figure className="menu-top__logo">
                <Logo />
            </figure>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[1]}
                style={{ lineHeight: "64px" }}
            >
                <Menu.Item key="1">
                    <Link to="/"> Home </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/new-movies"> Recently added </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/popular"> Popular </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/search"> Search </Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}