type Branch = "architecture" | "clean-code" | "languages";

abstract class Concept {
  constructor(private name: string, protected branch: string) {}

  getName() {
    return this.name;
  }

  abstract getBranch(): string;
}

class devConcept extends Concept {
  constructor(name: string, branch: Branch) {
    super(name, branch);
  }

  getBranch() {
    return this.branch as Branch;
  }

  getArea() {}
}

class philosophicalConcept extends Concept {
  constructor(
    name: string,
    branch: string,
    public getBranch: () => string,
    private reasoning: string[]
  ) {
    super(name, branch);
  }

  addReasoning(reason: string): void {
    this.reasoning.push(reason);
  }

  getReasoning(): string[] {
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
