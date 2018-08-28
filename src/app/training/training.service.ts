import {Exercise} from './exercise.model';
import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable()
export class TrainingService {
  // it will store the exercise which user selected
  private runningExercise: Exercise;
  private exercises: Exercise[] = [];
  exerciseChanged = new Subject<Exercise>();

  private availableExercise: Exercise[] = [];
  // event emitter
  exercisesChanged = new Subject<Exercise[]>();

  constructor(private db: AngularFirestore) {
  }

 fetchAvailableExercises() {
   this.db.collection('availableExercises')
     .snapshotChanges().map(docDataArray => {
     return docDataArray.map(doc => {
       return {
         id: doc.payload.doc.id,
         name: doc.payload.doc.data().name,
         duration: doc.payload.doc.data().duration,
         calories: doc.payload.doc.data().calories
       };
     });
       // populating the available exercises
   }).subscribe((exercises: Exercise[]) => {
     console.log(this.exercises);
     this.availableExercise = exercises;
     this.exercisesChanged.next([...this.availableExercise]);
   });
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
     calories: this.runningExercise.calories * (progress / 100),
     date: new Date(),
     state: 'cancelled'
   });
   this.runningExercise = null;
   this.exerciseChanged.next(null);
 }

 getCompletedOrCancelledExercise() {
   return this.exercises.slice();
 }

}
