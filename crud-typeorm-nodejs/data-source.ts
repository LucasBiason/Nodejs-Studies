import "reflect-metadata";
import { DataSource } from "typeorm";

require('dotenv').config()

export const connectionSource = new DataSource({
    migrationsTableName: 'migrations',
    type: "postgres",
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || "5432"),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    logging: false,
    synchronize: true,
    name: 'default',
    entities: ['src/entities/*.ts'],
    migrations: ['src/migrations/*.ts'],
    subscribers: ['src/subscriber/*.ts'],
});

connectionSource.initialize();