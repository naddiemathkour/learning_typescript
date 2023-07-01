export class BinarySearchTreeNode<d> {
    data: d;
    left_node?: BinarySearchTreeNode<d> | null;
    right_node?: BinarySearchTreeNode<d> | null;

    constructor (data: d) {
        this.data = data;
        this.right_node = null;
        this.left_node = null;
    }
}

export class BinarySearchTree<d> {
    root?: BinarySearchTreeNode<d>;
    comparator: (a: d, b: d) => number;

    constructor(comparator: (a: d, b: d) => number) {
        this.comparator = comparator;
    }

    insert(data: d) : BinarySearchTreeNode<d> | undefined {
        if (!this.root) {
            this.root = new BinarySearchTreeNode(data);
            return this.root;
        }

        let curr_node = this.root;

        while (true){
            if (this.comparator(data, curr_node.data) === 1) {
                if (curr_node.right_node) {
                    curr_node = curr_node.right_node;
                } else {
                    curr_node.right_node = new BinarySearchTreeNode(data);
                }
            }
        }
    }
}