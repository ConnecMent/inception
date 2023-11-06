class Concept {
    constructor(name, branch) {
        this.name = name;
        this.branch = branch;
    }
    getName() {
        return this.name;
    }
}
class devConcept extends Concept {
    constructor(name, branch) {
        super(name, branch);
    }
    getBranch() {
        return this.branch;
    }
    getArea() { }
}
class philosophicalConcept extends Concept {
    constructor(name, branch, getBranch, reasoning) {
        super(name, branch);
        this.getBranch = getBranch;
        this.reasoning = reasoning;
    }
    addReasoning(reason) {
        this.reasoning.push(reason);
    }
    getReasoning() {
        return this.reasoning;
    }
    isPersuading() {
        let length = this.reasoning.length;
        if (length > 10) {
            return true;
        }
        return false;
    }
}
export {};
