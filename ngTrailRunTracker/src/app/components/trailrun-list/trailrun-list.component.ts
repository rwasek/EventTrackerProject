import { Component, OnInit } from '@angular/core';
import { TrailrunService } from 'src/app/services/trailrun.service';
import { Trailrun } from 'src/app/models/trailrun';

@Component({
  selector: 'app-trailrun-list',
  templateUrl: './trailrun-list.component.html',
  styleUrls: ['./trailrun-list.component.css']
})
export class TrailrunListComponent implements OnInit {

  selected = null;
  trailRun = new Trailrun();
  trailRuns: Trailrun[] = [];

  constructor(
    private trailrunSvc: TrailrunService
  ) { }

  ngOnInit(): void {
    this.loadTrailruns();
  }

  // functions:

  loadTrailruns() {
    this.trailrunSvc.index().subscribe(
      trailruns => {
        this.trailRuns = trailruns;
      },
      onfail => {
        console.log(this.trailRuns);
        console.error('Observer got an error: ' + onfail);
      }
    );
  }

}
