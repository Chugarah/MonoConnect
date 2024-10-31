import CustomerListItem from "@components/Contacts/CustomerListItem";
import type {
	CustomerListProps,
	DeleteCustomerFn,
} from "types/contacts/customer";

function CustomerList({
	customers,
	deleteCustomer,
}: CustomerListProps & { deleteCustomer: DeleteCustomerFn }) {
	return (
		<div>
			<div className="flex justify-between items-center mb-6">
				<div className="flex items-center">
					<p className="font-bold text-xl w-[100px]">Id</p>
					<p className="font-bold text-xl">Name</p>
				</div>
			</div>
			<ul className="space-y-4">
				{customers.length > 0 &&
					customers.map((customer) => (
						<CustomerListItem
							key={customer.id}
							customer={customer}
							deleteCustomer={deleteCustomer}
						/>
					))}

				{customers.length <= 0 && (
					<li>
						<p className="font-semibold text-lg">No customer to display</p>
					</li>
				)}
			</ul>
		</div>
	);
}

export default CustomerList;
