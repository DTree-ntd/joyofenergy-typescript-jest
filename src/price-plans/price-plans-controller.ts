import { pricePlans } from "./price-plans";
import { usageForAllPricePlans } from "../usage/usage";


const extractCost = (cost: number) => {
    const value: number[] = Object.entries(cost).find( ([key]) => key in pricePlans)
    return value
};

export const recommend = (getReadings, req) => {
    const meter = req.params.smartMeterId;
    const pricePlanComparisons = usageForAllPricePlans(pricePlans, getReadings(meter)).sort((a, b) => extractCost(a) - extractCost(b))
    if("limit" in req.query) {
        return pricePlanComparisons.slice(0, req.query.limit);
    }
    return pricePlanComparisons;
};

export const compare = (getData, req) => {
    const meter = req.params.smartMeterId;
    const pricePlanComparisons = usageForAllPricePlans(pricePlans, getData(meter));;
    return {
        smartMeterId: req.params.smartMeterId,
        pricePlanComparisons,
    };
};