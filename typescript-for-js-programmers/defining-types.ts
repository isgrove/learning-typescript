let helloworld: string = "Hello World";
console.log(helloworld);

// You can explicitly describe this object's shape using an interface declaration:
interface User {
  name: string;
  id: number;
};

// Since JavaScript supports classes and object-oriented programming, so does TypeScript.
// You can use an interface declartion with classes:
class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);

// You can use interfaces to annotate parameters and return values to functions:
function createAdminUser(name: string, id: number): User {
  return new UserAccount(name, id);
}