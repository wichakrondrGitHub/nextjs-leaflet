// Polygon.jsx
import { db } from "@/utils/db";
import { useLiveQuery } from "dexie-react-hooks";

export default function PolygonList() {
  const data = useLiveQuery(() => db);
  const polygons = useLiveQuery(() => db.testdb.toArray());

  const updatePolygon = async (data) => {
    await db.testdb.update("polygon", {
      polygon: "polygon",
      update_at: `update ${Date.now()}`,
    });
    alert("updated your database with static data ");
  };

  const clearAll = () => {
    db.delete()
      .then(() => {
        alert(" database deleted ");
      })
      .catch((err) => {
        console.error("Could not delete database", err);
        alert("Could not delete database");
      })
      .finally(() => {
        // Do what should be done next...
      });
  };
  return (
    <ul>
      {console.log({ data })}
      <button disabled={polygons?.length === 0} onClick={clearAll}>
        Delete data base{" "}
      </button>
      {polygons?.map(({ polygon, update_at }) => (
        <li key={polygon}>
          {polygon} {update_at}
          <button className="" onClick={() => updatePolygon(polygon)}>
            Edit {polygon.id}
          </button>
        </li>
      ))}
    </ul>
  );
}
