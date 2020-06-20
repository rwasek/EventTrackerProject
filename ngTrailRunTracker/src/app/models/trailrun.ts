export class Trailrun {
  id: number;
  trailName: string;
  location: string;
  date: string;
  totalTime: string;
  distance: number;
  active: boolean;
  trailType: string;

  // tslint:disable-next-line: max-line-length
  constructor(id?: number, trailName?: string, date?: string, totalTime?: string, distance?: number, active?: boolean, trailType?: string){
    this.id = id;
    this.trailName = trailName;
    this.date = date;
    this.totalTime = totalTime;
    this.distance = distance;
    this.active = active;
    this.trailType = trailType;
  }
}
