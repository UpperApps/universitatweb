import { Data } from 'app/model/data';

export class Clima {
    constructor(
        public id ?: number,
        public name ?: string,
        public sate ?: string,
        public country ?: string,
        public data: Data = new Data()
    ) {}
}
