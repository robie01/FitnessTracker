import {Exercise} from './exercise.model';
import {Subject} from 'rxjs/Subject';

export class TrainingService {
  // it will store the exercise which user selected
  private runningExercise: Exercise;
  exerciseChanged = new Subject<Exercise>();

 private availableExercise: Exercise[] = [
    {id: 'crunches', name: 'Crunches', duration: 30, calories: 8},
    {id: 'touch-toes', name: 'Touch Toes', duration: 130, calories: 15},
    {id: 'side-lungs', name: 'Side-lungs', duration: 80, calories: 7},
  ];

 getAvailableExercises() {
   return this.availableExercise.slice();
 }

 // the selected is equal to the available exercise.
 startExercise(selectedId: string) {
   this.runningExercise =  this.availableExercise.find(
    ex => ex.id === selectedId);
   this.exerciseChanged.next({...this.runningExercise});
 }
 getRunningExercise() {
   return {...this.runningExercise};
 }

}
