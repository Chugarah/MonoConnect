// Props interfaces
export interface Customer {
	id: string;
	name: string;
}

// Props interfaces
export interface CustomerListProps {
	customers: Customer[];
	deleteCustomer: DeleteCustomerFn;
}

export interface AddCustomerFormProps {
	addCustomer: AddCustomerFn;
}

// Parameter types
export type CustomerId = string;
export type CustomerName = string;

// Function types
export type AddCustomerFn = (name: CustomerName) => void;
export type DeleteCustomerFn = (id: CustomerId) => void;
