import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {TrainingService} from '../training.service';
import {Exercise} from '../exercise.model';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import 'rxjs/add/operator/map';
import {UiService} from "../../shared/ui.service";

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
 exercises: Exercise[];
 exercisesSubscription: Subscription;
 isLoading = true;
 private loadingSubs: Subscription;

  constructor(private trainingService: TrainingService,
              private uiService: UiService) { }

  ngOnInit() {
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
    this.exercisesSubscription = this.trainingService.exercisesChanged
      .subscribe(exercises => (this.exercises = exercises));
    this.trainingService.fetchAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }
  ngOnDestroy() {
    this.exercisesSubscription.unsubscribe();
    this.loadingSubs.unsubscribe();
  }

}
