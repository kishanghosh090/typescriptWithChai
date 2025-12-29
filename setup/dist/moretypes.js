let res = "56";
let numeric = res.length;
let bookString = '{"name":"chai"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject.name);
// type assertation
const inputElement = document.getElementById("usname");
try {
    console.log(``);
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    else {
        console.log(error);
    }
}
function redirectAsRole(role) {
    if (role == "admin") {
        console.log(`redirecting to admin dashboard`);
    }
    else if (role == "user") {
        console.log(`redirecting to user dashboard`);
    }
}
function never() {
    while (true) { }
}
export {};
//# sourceMappingURL=moretypes.js.map