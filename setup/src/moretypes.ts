let res: any = "56";
let numeric: number = (res as string).length;
type Book = {
  name: string;
};

let bookString = '{"name":"chai"}';
let bookObject = JSON.parse(bookString) as Book;
console.log(bookObject.name);
// type assertation
const inputElement = document.getElementById("usname") as HTMLInputElement;
try {
  console.log(``);
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
  }
}
// never
type Role = "admin" | "user";

function redirectAsRole(role: Role): void {
  if (role == "admin") {
    console.log(`redirecting to admin dashboard`);
  } else if (role == "user") {
    console.log(`redirecting to user dashboard`);
  }
}
function never(): never {
  while (true) {}
}
