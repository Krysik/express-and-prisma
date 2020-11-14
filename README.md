# express-and-prisma

It's a simple example which presents my attempt to work with prisma.

### How to run
* npm install
* npm start - starts the server on http://localhost:4000


1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started.
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql or sqlite.
3. Run prisma introspect to turn your database schema into a Prisma data model.
4. Run prisma generate to install Prisma Client. You can then start querying your database.
