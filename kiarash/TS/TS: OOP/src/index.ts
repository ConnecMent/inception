type Branch = "architecture" | "clean-code" | "languages";

abstract class Concept {
  constructor(protected branch: string, private name: string) {}

  getName() {
    return this.name;
  }

  getBranch() {
    return this.branch;
  }
}

class DevConcept extends Concept {
  constructor(branch: Branch) {
    super(branch, "DevConcept");
  }
}

class PhilosophicalConcept extends Concept {
  private reasoning_list: string[] = [];
  constructor(branch: string, reasoning?: string[]) {
    super(branch, "PhilosophicalConcept");
    if (reasoning) {
      this.reasoning_list = [...this.reasoning_list, ...reasoning];
    }
  }

  getBranch() {
    return this.branch;
  }

  addReasoning(reason: string) {
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

let devInstance = new DevConcept("architecture");

console.log(devInstance.getBranch());

let philosophical_instance = new PhilosophicalConcept("main", [
  "life is too short",
]);

for (let i = 0; i < 10; i++) {
  philosophical_instance.addReasoning("life is too short");
}

console.log(philosophical_instance.isPersuading());
console.log(philosophical_instance.getBranch());

export { DevConcept, PhilosophicalConcept };
