class Repository<T> {
  private items: T[] = [];
  add(item: T): void { this.items.push(item); }
  getAll(): T[] { return this.items; }
}

const repo = new Repository<string>();
repo.add("Item1");
repo.add("Item2");
console.log(repo.getAll());