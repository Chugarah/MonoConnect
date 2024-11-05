import Contact from "./Contact";
import "../scss/components/edu-prop-contacts.scss";

// You can also use an object for user data:
const userData = {
	name: "Sonny",
	email: "sonny@domain.com",
};

export default function ContactList() {
	return (
		<>
			<div className="contact-list">
				<Contact name="Hans" email="hans@domain.com" />
				{/* Add more contacts here */}
				<Contact name={userData.name} email={userData.email} />
			</div>
		</>
	);
}
