export class ProjetoPesquisa {
    constructor(
        public id ?: number,
        public titulo ?: string,
        public tempo_previsto ?: number,
        public data_inicio ?: Date,
        public data_fim ?: Date,
        public status ?: string
    ) {}
}
