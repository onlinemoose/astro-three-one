import { column, defineDb, defineTable } from 'astro:db';

const Link = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    url: column.text(),
    description: column.text(),
    isRead: column.boolean({ default: false })
    // customerId: column.number({ references: () => Customer.columns.id })
  }
})

const Customer = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    firstName: column.text(),
    lastName: column.text(),
    street: column.text(),
    city: column.text(),
    state: column.text(),
    zipCode: column.text()
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: { Link, Customer },
});
