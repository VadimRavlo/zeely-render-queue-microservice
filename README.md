# Zeely Render Queue Microservice

## Launch

### Using of docker-compose for local deployment (recommended)

Launch it from root directory

```bash
$ docker compose up
```

Using this command will start 2 containers: `postgres`, `api`.

To disable any of these containers and to use an existing one please delete the related section in `docker-compose.yml`

After adding a new module to the project please use:

```bash
$ docker compose up --build
```

### Using of npm for local deployment (in case you need connect external database or external Redis instance)

To start project, launch it from project repository:
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Database Access

Local database `zeely_render_queue_local` by default is available on `localhost:5432`.

Please use `.env` file for details.

If you previously have started another PostgreSQL container on `localhost:5432` you have to stop the container before running the app.

## File structure

In case creating a new service, module, controller, entity or spec file, please use default file structure:
* all providers, like database, redis, message queues, external APIs should be stored by `src/providers`
* in order to provide additional logs security, you should use logger, stored by `src/logger`
* directory `src/modules` uses default file structure:
    * `src/modules/configurations` only to store configuration service with DTO for `.env` file (in order to check validity of `.env` content)
    * `src/modules/fundamentals` only to store low-level services with access only to related database's table/entity
    * `src/modules/providers` only to store low-level providers services (database, queues, auth, file providers, cache providers)
    * `src/modules/managers` to store services with complicated logic with access to more than 1 service from fundamentals or providers
    * `src/modules/apis` for all provided by app controllers with related modules/services:
        * `src/modules/apis/common-api` - all provided by app APIs for common part of app
        * `src/modules/apis/admins-api` - all provided by app APIs for Admin part of app

## Migrate

Current microservice with Nest.js uses Prisma ORM. It has built in methods to migrate and synchronize DB.

If you're updating Prisma's schema, you would need to create and run a migration to apply it.

To generate a migration from entities changes:
```bash
$ npx prisma migrate dev -n <migration name in pascal case>
```

To manual run migration:
```bash
$ npx prisma migrate deploy
```

## Architecture Decision Records

An architecture decision record (ADR) is a document that captures an important architecture decision made along with its context and consequences.

The Zeely Render Queue Microservice uses [**log4brains**](https://github.com/thomvaill/log4brains) to manage ADR.

To get started, run
```bash
npm install -g log4brains
```

To preview the knowledge base locally run
```bash
log4brains preview
```

>In this mode, the Hot Reload feature is enabled

To create a new ADR interactively from template, run:
```bash
log4brains adr new
```
Then you can edit template in `docs/adr/${date}-${decision_name}.md`

ADR is immutable. Only its status can change in the future.

## Template
The original template had a few parts:

- **Title**: Which sums up the solved problem and its solution
- **Context**: Probably the essential part, which describes "the forces at play, including technological, political, social, and project local"
- **Decision**
- **Status**: Proposed, accepted, deprecated, superseded...
- **Consequences**: The positive and negative ones for the future of the project

### More information:
- [Log4brains documentation](https://github.com/thomvaill/log4brains/tree/master#readme)
- [What is an ADR and why should you use them](https://github.com/thomvaill/log4brains/tree/master#-what-is-an-adr-and-why-should-you-use-them)
- [ADR GitHub organization](https://adr.github.io/)
