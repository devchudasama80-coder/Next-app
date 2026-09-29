import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "Nextjs_db",
  "root",
  "root",
  {
    host: "localhost",
    dialect: "mysql",
    port: 8889,
    logging: false,
  }
);

export default sequelize;