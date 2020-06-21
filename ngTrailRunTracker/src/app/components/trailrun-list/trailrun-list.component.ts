import { Component, OnInit } from '@angular/core';
import { TrailrunService } from 'src/app/services/trailrun.service';
import { Trailrun } from 'src/app/models/trailrun';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-trailrun-list',
  templateUrl: './trailrun-list.component.html',
  styleUrls: ['./trailrun-list.component.css']
})
export class TrailrunListComponent implements OnInit {
  closeResult = '';

  totalDistance = 0;
  selected = null;
  editRun = null;
  trailRun = new Trailrun();
  trailRuns: Trailrun[] = [];

  constructor(
    private trailrunSvc: TrailrunService,
    // private modalService: NgbModal
    ) { }

    // Modal code for reference:
    // open(content) {
    //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //     this.closeResult = `Closed with: ${result}`;
    //   }, (reason) => {
    //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //   });
    // }

    // private getDismissReason(reason: any): string {
    //   if (reason === ModalDismissReasons.ESC) {
    //     return 'by pressing ESC';
    //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //     return 'by clicking on a backdrop';
    //   } else {
    //     return `with: ${reason}`;
    //   }
    // }

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
      updateRun(editRun: Trailrun){
        this.trailrunSvc.update(editRun).subscribe(
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
