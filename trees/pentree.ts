export class PentreeNode<d>{
    data: d;
    node_0?:PentreeNode<d> | null;
    node_1?:PentreeNode<d> | null;
    node_2?:PentreeNode<d> | null;
    node_3?:PentreeNode<d> | null;
    node_4?:PentreeNode<d> | null;

    constructor (data:d) {
        this.data = data;
        this.node_0 = null;
        this.node_1 = null;
        this.node_2 = null;
        this.node_3 = null;
        this.node_4 = null;
    }
}

export class Pentree<d> {
    root?: PentreeNode<d>;
    comparator: (a:d) => number;
    constructor(comparator: (a: d) => number) {
        this.comparator;
    }

    insert(data:d) : PentreeNode<d> | undefined {
        if (!this.root) {
            this.root = new PentreeNode(data);
            return this.root;
        }
        let curr_node = this.root;

        while(true){
            
        }
    }
}