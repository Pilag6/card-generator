class HistoryManager {
    constructor(initialState) {
        this.history = [initialState];
        this.currentIndex = 0;
    }

    push(newState) {
        // Remove any future states
        this.history = this.history.slice(0, this.currentIndex + 1);
        this.history.push(newState);
        this.currentIndex++;
    }

    undo() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            return this.history[this.currentIndex];
        }
        return null;
    }

    redo() {
        if (this.currentIndex < this.history.length - 1) {
            this.currentIndex++;
            return this.history[this.currentIndex];
        }
        return null;
    }

    canUndo() {
        return this.currentIndex > 0;
    }

    canRedo() {
        return this.currentIndex < this.history.length - 1;
    }
}

export default HistoryManager;
