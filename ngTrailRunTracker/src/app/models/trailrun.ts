export class Trailrun {
  id: number;
  name: string;
  trailName: string;
  location: string;
  date: string;
  totalTime: string;
  distance: number;
  active: boolean;

  constructor(id?: number, name?: string, trailName?: string, date?: string, totalTime?: string, distance?: number, active?: boolean){
    this.id = id;
    this.name = name;
    this.trailName = trailName;
    this.date = date;
    this.totalTime = totalTime;
    this.distance = distance;
    this.active = active;
  }
}
