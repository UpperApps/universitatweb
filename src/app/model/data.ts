export class Data {
    constructor(
        public temperature ?: number,
        public wind_direction ?: string,
        public wind_velocity ?: number,
        public humidity ?: number,
        public condition ?: string,
        public pressure ?: number,
        public icon ?: string,
        public sensation ?: number,
        public date ?: Date
    ) {}
}
