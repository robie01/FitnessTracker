import {Exercise} from './exercise.model';
import {Subject} from 'rxjs/Subject';

export class TrainingService {
  // it will store the exercise which user selected
  private runningExercise: Exercise;
  private exercises: Exercise[];
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
 // getting an exact copy and making sure it cant mutate outside the service
 getRunningExercise() {
   return {...this.runningExercise};
 }

 // complete the whole duration.
 completeExercise() {
   this.exercises.push({
     ...this.runningExercise,
     date: new Date(),
     state: 'completed'
   });
  this.runningExercise = null;
  this.exerciseChanged.next(null);
 }

 // cancelling the exercise.
 cancelExercise(progress: number) {
   this.exercises.push({
     ...this.runningExercise,
     duration:  this.runningExercise.duration * (progress / 100),
     calories: this.runningExercise.duration * (progress / 100),
     date: new Date(),
     state: 'cancelled'
   });
   this.runningExercise = null;
   this.exerciseChanged.next(null);
 }

}
