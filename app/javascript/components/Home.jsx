import { Layout } from "antd";
import React from "react";
import Beers from "./Beers";
import Header from "./Header";

const { Content, Footer } = Layout;

export default () => (
	<Layout className="layout">
		<Header />
		<Content style={{ padding: "0 50px" }}>
			<div className="site-layout-content" style={{ margin: "100px auto" }}>
				<h1>Beer's Catalog</h1>
				<Beers />
			</div>
		</Content>
		<Footer style={{ textAlign: "center" }}>
			Honeybadger ©2020.
		</Footer>
	</Layout>
);
