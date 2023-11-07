class Concept {
    constructor(branch, name) {
        this.branch = branch;
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getBranch() {
        return this.branch;
    }
}
class DevConcept extends Concept {
    constructor(branch) {
        super(branch);
    }
}
class PhilosophicalConcept extends Concept {
    constructor(branch, reasoning, getBranch) {
        super(branch);
        this.reasoning_list = [];
        if (reasoning) {
            this.reasoning_list = [...this.reasoning_list, ...reasoning];
        }
        if (getBranch) {
            this.getBranch = getBranch;
        }
    }
    addReasoning(reason) {
        this.reasoning_list.push(reason);
    }
    isPersuading() {
        let length = this.reasoning_list.length;
        if (length > 10) {
            return true;
        }
        return false;
    }
}
let dev_instance = new DevConcept("architecture");
console.log(dev_instance.getBranch());
let philosophical_instance = new PhilosophicalConcept("main", [
    "life is too short",
]);
for (let i = 0; i < 10; i++) {
    philosophical_instance.addReasoning("life is too short");
}
console.log(philosophical_instance.isPersuading());
console.log(philosophical_instance.getBranch());
export { DevConcept, PhilosophicalConcept };
