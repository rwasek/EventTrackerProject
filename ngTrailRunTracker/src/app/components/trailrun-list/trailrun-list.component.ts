import { Component, OnInit } from '@angular/core';
import { TrailrunService } from 'src/app/services/trailrun.service';
import { Trailrun } from 'src/app/models/trailrun';

@Component({
  selector: 'app-trailrun-list',
  templateUrl: './trailrun-list.component.html',
  styleUrls: ['./trailrun-list.component.css']
})
export class TrailrunListComponent implements OnInit {

  totalDistance = 0;
  selected = null;
  editRun = null;
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
          this.getTotalDistance();
        },
        onfail => {
          console.log(this.trailRuns);
          console.error('Observer got an error: ' + onfail);
        }
        );
      }

      displayRun(run: Trailrun){
        this.selected = run;
        this.editRun = Object.assign({}, this.selected);
      }

      goBack(){
        this.selected = null;
        this.getTotalDistance();
      }

      // Not actually deleted, just disabled/ not visible to user and stored in the DB
      deleteRun(run: Trailrun){
        run.active = false;
        this.trailrunSvc.disable(run).subscribe(
          data => {
            window.alert('Trail Run Deleted Successfully');
            this.loadTrailruns();
          },
          err => {
            console.error('problem with deleteRun() in trailrun-list component');
          }
          );
      }

      // Update run
      updateRun(selected: Trailrun){
        this.trailrunSvc.update(selected).subscribe(
          data => {
            this.loadTrailruns();
            this.selected = null;
            window.alert('Trail Run Updated Successfully');
          },
          err => {
            console.error('problem with updateRun() in trailrun-list component');
          }
        );
      }

      // get total distance of runs
      getTotalDistance(){
        this.totalDistance = 0;
        for (const run of this.trailRuns) {
          this.totalDistance += run.distance;
        }
      }
}
