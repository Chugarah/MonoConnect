import { z } from "zod";

//  https://stackoverflow.com/questions/11522529/regexp-for-checking-the-full-name
// First name need to have atleast 3 characters, first and last nam,e
export const contactFormSchema = z.object({
	fullName: z
		.string()
		.min(1, "Please enter your full name")
		.regex(
			/^[a-z]{3,}([-']?[a-z]+)*(\s[a-z]{3,}([-']?[a-z]+)*)+$/im,
			"Please enter your first and last name (minimum 3 characters for each like...:) Starcraft BroodWar)",
		),
	email: z
		.string()
		.min(1, "Email address is required :)")
		.email("Invalid email address")
		.regex(
			new RegExp(
				`
				(?:[a-z0-9!#$%&'*+/=?^_\`{|}~-]+
				(?:\\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*|
				"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|
				\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*")@
				(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+
				[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|
				\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}
				(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|
				[a-z0-9-]*[a-z0-9]:
				(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|
				\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])
			`.replace(/\s+/g, ""),
				"i",
			),
			"Email format is invalid",
		)
		.max(125, "Your Email is too long, shorten it :D"),
	specialist: z
		.string({
			required_error: "Please select a specialist",
			invalid_type_error: "Please select a specialist",
		})
		.min(1, "Please select a specialist")
		.regex(/^[a-zA-Z0-9\s-]+$/, "Invalid specialist selection"),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
