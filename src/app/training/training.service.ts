import {Exercise} from './exercise.model';

export class TrainingService {
 private availableExercise: Exercise[] = [
    {id: 'crunches', name: 'Crunches', duration: 30, calories: 8},
    {id: 'touch-toes', name: 'Touch Toes', duration: 130, calories: 15},
    {id: 'side-lungs', name: 'Side-lungs', duration: 134, calories: 7},
  ];

 getAvailableExercises() {
   return this.availableExercise.slice();
 }
}
