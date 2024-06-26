import { Customer, Link, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Customer).values([
		{
			firstName: "John",
			lastName: "Doe",
			street: "123 Main St",
			city: "New York",
			state: "NY",
			zipCode: "10001"
		},
		{
			firstName: "Jane",
			lastName: "Smith",
			street: "456 Elm St",
			city: "San Francisco",
			state: "CA",
			zipCode: "94101"
		},
		{
			firstName: "Mark",
			lastName: "Johnson",
			street: "789 Oak St",
			city: "Seattle",
			state: "WA",
			zipCode: "98101"
		}
	]);
	await db.insert(Link).values([
		{
			title: "My Blog",
			url: "https://chrispennington.blog",
			description: "This is my blog about web development and design.",
			isRead: true,
			customerId: 1
		},
		{
			title: "Google",
			url: "https://google.com",
			description: "I found this cool site that can search for anything.",
			isRead: false,
			customerId: 2
		},
		{
			title: "GitHub",
			url: "https://github.com",
			description: "I found this cool site that can hold repositories.",
			isRead: false,
			customerId: 3
		}
	]);
}
