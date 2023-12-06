export class Atelier {
    [x: string]: any;
    static nextId: number;
    static notdone=false;
    constructor(public id:number,public nom:string,public description:string,public date:Date,public image:string,public lieu:string, public done:boolean){
        this.id = Atelier.nextId++;
        this.done=Atelier.notdone
    }
}

export class Request {
    userId: number;
    atelierId: number;
    username:string;
    workshop:string
  
    constructor(userId: number, atelierId: number, username:string, workshop:string) {
      this.userId = userId;
      this.atelierId = atelierId;
      this.username=username;
      this.workshop=workshop;
    }
}