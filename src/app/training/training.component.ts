import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  onGoingTraining = false;
  constructor() { }

  ngOnInit() {
  }

  // trainingStart() {
  //   this.onGoingTraining = true;
  //   console.log('start');
  // }

}
