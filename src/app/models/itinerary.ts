export class Itinerary{
    constructor(
        public description:string,
        public dateDepart: Date,
        public shipDisplayName : string = '',
        public disembarkPortName: string = '',
        public embarkPortName : string = '',
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ){}

}

