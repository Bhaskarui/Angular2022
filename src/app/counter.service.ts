export class CounterService {
    activeToInactiveCounter = 0;
    InactiveToActiveCounter = 0;

    incrementActiveToInactive() {
        this.activeToInactiveCounter++;
        console.log('Active to Inactive:' + this.activeToInactiveCounter);
    }

    incrementInctiveToactive() {
        this.InactiveToActiveCounter++;
        console.log('Inctive to active:' + this.InactiveToActiveCounter);
    }
}