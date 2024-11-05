import { useState } from "react";
import type { AddCustomerFormProps } from "types/contacts/customer";

function AddCustomerForm({ addCustomer }: AddCustomerFormProps) {
	const [customerName, setCustomerName] = useState("");

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		if (customerName.trim() === "") return;
		addCustomer(customerName);
		setCustomerName("");
	};

	return (
		<>
			<form className="flex" onSubmit={handleSubmit}>
				<input
					title="Input"
					type="text"
					className="flex-1 border border-sky-800 px-2 py-1 rounded-l-lg"
					value={customerName}
					onChange={(e) => setCustomerName(e.target.value)}
				/>
				<button
					type="submit"
					className="bg-sky-800 text-white font-semibold px-5 rounded-r-lg
          hover:bg-sky-900 transition-colors"
				>
					Add Customer
				</button>
			</form>
		</>
	);
}

export default AddCustomerForm;
