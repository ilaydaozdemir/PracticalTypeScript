let book = { title: "a day", cost: 23 };
let pen = { title: "pen", cost: 12 };
let notebook = { title: "notebook" };

let mixed: { title: string; cost?: number }[] = [book, pen, notebook];

console.log(mixed);
