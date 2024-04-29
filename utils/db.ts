// db.js
import Dexie from "dexie";

export const db = new Dexie("database"); // database is database name with 1 version
db.version(1).stores({
  testdb: " polygon ", // Primary key and indexed props
});
