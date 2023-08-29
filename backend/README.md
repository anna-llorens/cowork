# ℹ️ Prisma Guide

Launch prisma studio:

```sh
 npx prisma studio
```

Mitigate db

```sh
npx prisma migrate dev --name "update_description"
```

Re-generate PrismaClient

```sh
npx prisma generate
```

Add new rows to existing tables

```sh
 npx prisma migrate dev --create-only
```
