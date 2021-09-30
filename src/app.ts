import express, { request } from 'express';
import { readings } from "./readings/readings";
import { readingsData } from "./readings/readings.data";
import { read, store } from "./readings/readings-controller";
import { recommend, compare } from "./price-plans/price-plans-controller";


export const app = express();

// const { getReadings, setReadings } = readings(readingsData);

// app.get("/readings/read/:smartMeterId", (req, res) => {
//     res.send(read(getReadings: [], req: Request));
// });

// app.post("/readings/store", (req, res) => {
//     res.send(store(setReadings: [], req: Request));
// });

// app.get("/price-plans/recommend/:smartMeterId", (req, res) => {
//     res.send(recommend(getReadings: [], req: Request));
// });

// app.get("/price-plans/compare-all/:smartMeterId", (req, res) => {
//     res.send(compare(getReadings: [], req: Request));
// });


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});