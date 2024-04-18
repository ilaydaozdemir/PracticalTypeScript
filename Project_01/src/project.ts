const names: string[] = ["ali", "ahmet", "fatma"];

function isNameList(name: string): boolean {
  return names.includes(name);
}

let nameCheck = "ali";
if (isNameList(nameCheck)) {
  console.log(`${nameCheck} is in the list`);
} else console.log(`${nameCheck} is not the list`);
