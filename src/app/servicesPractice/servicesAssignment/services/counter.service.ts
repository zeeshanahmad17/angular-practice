export class CounterService {
    activeToInactiveCount = 0;
    inactiveToActiveCount = 0;

    incrementActiveToInactiveCount() {
        this.activeToInactiveCount++;
        console.log('Active to Inactive Count: ' + this.activeToInactiveCount)
    }

    incrementInactiveToActiveCount() {
        this.inactiveToActiveCount++;
        console.log('Inactive to Active Count: ' + this.inactiveToActiveCount)
    }
}