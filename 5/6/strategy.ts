interface SortStrategy {
    sort(data: number[]): number[];
}

class AscendingSort implements SortStrategy {
    sort(data: number[]): number[] {
        return [...data].sort((a, b) => a - b);
    }
}

class DescendingSort implements SortStrategy {
    sort(data: number[]): number[] {
        return [...data].sort((a, b) => b - a);
    }
}

class DataProcessor {
    private strategy: SortStrategy;

    constructor(strategy: SortStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: SortStrategy): void {
        this.strategy = strategy;
    }

    process(data: number[]): number[] {
        return this.strategy.sort(data);
    }
}

const numbers = [5, 2, 9, 1, 7];
const processor = new DataProcessor(new AscendingSort());
console.log('По возрастанию:', processor.process(numbers));

processor.setStrategy(new DescendingSort());
console.log('По убыванию:', processor.process(numbers));