import { Button, Form, Input, Modal, Select } from "antd";
import React from "react";

const { Option } = Select;

class AddBeerModal extends React.Component {
	formRef = React.createRef();
	state = {
		visible: false,
	};

	onFinish = (values) => {
		const url = "api/v1/beers/";
		fetch(url, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		})
			.then((data) => {
				if (data.ok) {
					this.handleCancel();

					return data.json();
				}
				throw new Error("Network error.");
			})
			.then(() => {
				this.props.reloadBeers();
			})
			.catch((err) => console.error("Error: " + err));
	};

	showModal = () => {
		this.setState({
			visible: true,
		});
	};

	handleCancel = () => {
		this.setState({
			visible: false,
		});
	};

	render() {
		return (
			<>
				<Button type="primary" onClick={this.showModal}>
					Create New +
				</Button>

				<Modal
					title="Add New Beer ..."
					visible={this.state.visible}
					onCancel={this.handleCancel}
					footer={null}
				>
					<Form ref={this.formRef} layout="vertical" onFinish={this.onFinish}>
						<Form.Item
							name="brand"
							label="Brand"
							rules={[
								{ required: true, message: "Please input your beer's brand!" },
							]}
						>
							<Input placeholder="Input your beer's brand" />
						</Form.Item>

						<Form.Item
							name="style"
							label="Style"
							rules={[
								{ required: true, message: "Please input your beer's style!" },
							]}
						>
							<Input placeholder="Input your beer's style" />
						</Form.Item>

						<Form.Item
							name="country"
							label="Country"
							rules={[
								{
									required: true,
									message: "Please input your beer's country!",
								},
							]}
						>
							<Select
								showSearch
								placeholder="Select your beer's country"
								optionFilterProp="children"
								style={{ width: "100%" }}
							>
								<Option value="Finland">Finland</Option>
								<Option value="Germany">Germany</Option>
								<Option value="Netherlands">Netherlands</Option>
								<Option value="UK">UK</Option>
								<Option value="USA">USA</Option>
								<Option value="Other">Other</Option>
							</Select>
						</Form.Item>

						<Form.Item
							name="quantity"
							label="Quantity"
							rules={[
								{ required: true, message: "Please input the quantity!" },
							]}
						>
							<Input type="number" placeholder="How many beers you desire?" />
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Modal>
			</>
		);
	}
}

export default AddBeerModal;
