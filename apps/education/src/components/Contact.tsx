import "../scss/components/edu-prop-contacts.scss";

// Contact interface for props type checking
interface ContactProps {
	name: string;
	email: string;
}

// Contact component that accepts props of type ContactProps
function Contact({ name, email }: ContactProps) {
	return (
		<>
			<div className="contact">
				<p className="name">{name}</p>
				<p className="email">{email}</p>
			</div>
		</>
	);
}


// Export the Contact component for use in other parts of the application
export default Contact;