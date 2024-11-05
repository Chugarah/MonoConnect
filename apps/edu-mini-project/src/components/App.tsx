import AddCustomerForm from "@components/ContactForm/AddCustomerForm";
import CustomerList from "@components/Contacts/CustomerList";

import Header from "@components/Header";
import { useState } from "react";
import type { CustomerId } from "types/contacts/customer";
import { v4 as uuidv4 } from "uuid";

function App() {
	const [customers, setCustomers] = useState([
		{
			id: uuidv4(),
			name: "Starcraft Original",
		},
		{
			id: uuidv4(),
			name: "Starcraft BroodWar",
		},
	]);

	const addCustomer = (customerName: string) => {
		setCustomers((state) => {
			return [...state, { id: uuidv4(), name: customerName }];
		});
	};

	const deleteCustomer = (id: CustomerId) => {
		setCustomers((state) => {
			return state.filter((customer) => customer.id !== id);
		});
	};

	return (
		<>
			<div>
				<Header title="Customers" />
			</div>
			<main className="container mx-auto pt-8 space-y-8">
				<AddCustomerForm addCustomer={addCustomer} />
				<CustomerList customers={customers} deleteCustomer={deleteCustomer} />
			</main>
		</>
	);
}
export default App;
