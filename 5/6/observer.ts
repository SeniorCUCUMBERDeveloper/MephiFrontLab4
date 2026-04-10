interface Observer {
    update(message: string): void;
}

class Subject {
    private observers: Observer[] = [];

    subscribe(observer: Observer): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(message: string): void {
        this.observers.forEach(obs => obs.update(message));
    }
}

class ConcreteObserver implements Observer {
    constructor(private name: string) {}

    update(message: string): void {
        console.log(`${this.name} получил: ${message}`);
    }
}

const subject = new Subject();

const obs1 = new ConcreteObserver('Наблюдатель 1');
const obs2 = new ConcreteObserver('Наблюдатель 2');

subject.subscribe(obs1);
subject.subscribe(obs2);
subject.notify('Привет!');
subject.unsubscribe(obs1);
subject.notify('Второе сообщение');