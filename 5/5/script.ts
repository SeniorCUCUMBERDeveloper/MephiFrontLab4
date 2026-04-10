class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null = null;
    right: TreeNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

type CompareFn<T> = (a: T, b: T) => number;

class BinarySearchTree<T> {
    private root: TreeNode<T> | null = null;
    private readonly compare: CompareFn<T>;

    constructor(compareFn: CompareFn<T>) {
        this.compare = compareFn;
    }

    insert(value: T): void {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        this.insertNode(this.root, newNode);
    }

    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
        const cmp = this.compare(newNode.value, node.value);
        if (cmp < 0) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else if (cmp > 0) {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        } else {
            return;
        }
    }

    search(value: T): boolean {
        return this.searchNode(this.root, value);
    }

    private searchNode(node: TreeNode<T> | null, value: T): boolean {
        if (node === null) {
            return false;
        }
        const cmp = this.compare(value, node.value);
        if (cmp < 0) {
            return this.searchNode(node.left, value);
        } else if (cmp > 0) {
            return this.searchNode(node.right, value);
        } else {
            return true;
        }
    }

    delete(value: T): void {
        this.root = this.deleteNode(this.root, value);
    }

    private deleteNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
        if (node === null) {
            return null;
        }
        const cmp = this.compare(value, node.value);
        if (cmp < 0) {
            node.left = this.deleteNode(node.left, value);
            return node;
        } else if (cmp > 0) {
            node.right = this.deleteNode(node.right, value);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                return null;
            }
            if (node.left === null) {
                return node.right;
            }
            if (node.right === null) {
                return node.left;
            }
            const minRight = this.findMinNode(node.right);
            node.value = minRight.value;
            node.right = this.deleteNode(node.right, minRight.value);
            return node;
        }
    }

    private findMinNode(node: TreeNode<T>): TreeNode<T> {
        let current = node;
        while (current.left !== null) {
            current = current.left;
        }
        return current;
    }

    update(oldValue: T, newValue: T): void {
        if (!this.search(oldValue)) {
            return;
        }
        this.delete(oldValue);
        this.insert(newValue);
    }

    height(): number {
        return this.calcHeight(this.root);
    }

    private calcHeight(node: TreeNode<T> | null): number {
        if (node === null) {
            return 0;
        }
        const leftHeight = this.calcHeight(node.left);
        const rightHeight = this.calcHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
    printLevelOrder(): void {
        if (this.root === null) {
            console.log("Дерево пустое");
            return;
        }
        const queue: TreeNode<T>[] = [this.root];
        let result = "";
        while (queue.length > 0) {
            const node = queue.shift()!;
            result += node.value + " ";
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        console.log("Обход по уровням:", result.trim());
    }
}

const numberTree = new BinarySearchTree<number>((a, b) => a - b);
numberTree.insert(10);
numberTree.insert(5);
numberTree.insert(15);
numberTree.insert(3);
numberTree.insert(7);
numberTree.printLevelOrder();
console.log('Поиск 7:', numberTree.search(7));
console.log('Высота дерева:', numberTree.height());

numberTree.delete(5);
console.log('Поиск 5 после удаления:', numberTree.search(5));
numberTree.printLevelOrder();

numberTree.update(7, 8);
console.log('Поиск 7 после замены:', numberTree.search(7));
console.log('Поиск 8:', numberTree.search(8));
numberTree.printLevelOrder();