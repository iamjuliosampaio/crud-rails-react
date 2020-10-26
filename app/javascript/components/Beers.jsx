import { Table, message, Popconfirm } from "antd";
import React from "react";
import AddBeerModal from "./AddBeerModal";

class Beers extends React.Component {
	columns = [
		{
			title: "Brand",
			dataIndex: "brand",
			key: "brand",
		},
		{
			title: "Style",
			dataIndex: "style",
			key: "style",
		},
		{
			title: "Country",
			dataIndex: "country",
			key: "country",
		},
		{
			title: "Quantity",
			dataIndex: "quantity",
			key: "quantity",
		},
		{
			title: "",
			key: "action",
			render: (_text, record) => (
				<Popconfirm
					title="Are you sure delete this beer?"
					onConfirm={() => this.deleteBeer(record.id)}
					okText="Yes"
					cancelText="No"
				>
					<a href="#" type="danger">
						Delete{" "}
					</a>
				</Popconfirm>
			),
		},
	];

	state = {
		beers: [],
	};

	componentDidMount() {
		this.loadBeers();
	}

	loadBeers = () => {
		const url = "api/v1/beers/index";
		fetch(url)
			.then((data) => {
				if (data.ok) {
					return data.json();
				}
				throw new Error("Network error.");
			})
			.then((data) => {
				data.forEach((beer) => {
					const newEl = {
						key: beer.id,
						id: beer.id,
						brand: beer.brand,
						style: beer.style,
						country: beer.country,
						quantity: beer.quantity,
					};

					this.setState((prevState) => ({
						beers: [...prevState.beers, newEl],
					}));
				});
			})
			.catch((err) => message.error("Error: " + err));
	};

	reloadBeers = () => {
		this.setState({ beers: [] });
		this.loadBeers();
	};

	deleteBeer = (id) => {
		const url = `api/v1/beers/${id}`;

		fetch(url, {
			method: "delete",
		})
			.then((data) => {
				if (data.ok) {
					this.reloadBeers();
					return data.json();
				}
				throw new Error("Network error.");
			})
			.catch((err) => message.error("Error: " + err));
	};

	render() {
		return (
			<>
				<Table
					className="table-striped-rows"
					dataSource={this.state.beers}
					columns={this.columns}
					pagination={{ pageSize: 5 }}
				/>

				<AddBeerModal reloadBeers={this.reloadBeers} />
			</>
		);
	}
}

export default Beers;
