import type { Customer, DeleteCustomerFn } from "types/contacts/customer";

function CustomerListItem({
	customer,
	deleteCustomer,
}: { customer: Customer } & { deleteCustomer: DeleteCustomerFn }) {
	return (
		<>
			<li className="flex justify-between items-center">
				<div className="flex items-center">
					<p className="w-[100px]">{customer.id.slice(0, 6)}</p>
					<p className="font-semibold text-lg">{customer.name}</p>
				</div>
				<button
					onClick={() => {
						deleteCustomer(customer.id);
					}}
					type="button"
					className="bg-red-800 text-white px-5 py-1 rounded-lg
            hover:bg-red-900 transition-colors"
				>
					Remove Customer
				</button>
			</li>
		</>
	);
}

export default CustomerListItem;
