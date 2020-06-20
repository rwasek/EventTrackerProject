import { Component, OnInit } from '@angular/core';
import { TrailrunService } from 'src/app/services/trailrun.service';
import { Trailrun } from 'src/app/models/trailrun';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-run',
  templateUrl: './add-run.component.html',
  styleUrls: ['./add-run.component.css']
})
export class AddRunComponent implements OnInit {

  newRun = new Trailrun();

  constructor(
    private trailrunSvc: TrailrunService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // create new
  createNewRun(){
    this.newRun.active = true;
    this.trailrunSvc.create(this.newRun).subscribe(
      run => {
        console.log('creation success!');
        // call index method on service
        window.alert('Trail Run Created Successfully!');
        this.router.navigateByUrl('trailrun');

      },
      err => {
        console.error('problem with createNewRun() in add-run component');
      }
    );
  }

}
