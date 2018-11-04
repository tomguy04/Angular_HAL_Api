export class Itinerary{
    constructor(
        public description:string,
        public dateDepart: Date,
        public shipDisplayName : string = '',
        public disembarkPortName: string = '',
        public embarkPortName : string = '',
        public stateRooms : Array<string> = [],
        public tfpe : number = 0,
        public selectedStateRoomName = '',
        public selectedStateRoomPrice = 0,
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ){}

}

