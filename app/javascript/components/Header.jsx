import React from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

export default () => (
	<Header>
		<div className="logo" />
		<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
			<Menu.Item key="1">Home</Menu.Item>
			<Menu.Item key="2">Our Services</Menu.Item>
			<Menu.Item key="3">Contact</Menu.Item>
		</Menu>
	</Header>
);
