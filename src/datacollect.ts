import {
    OpenIndex
} from "./utils";

export class DataCollect {
    constructor() {
    }

    public cron_job(): void {
        OpenIndex('services/server/frontend/#/cron_job')
    }

    public bi_core(): void {
        OpenIndex('services/server/frontend/#/bi_core')
    }
}
