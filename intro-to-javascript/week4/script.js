// Voice assistant

const user = {
  name: "",
  todos: [],
};

const getReply = (command) => {
  if (!command.trim()) return "Provide a command please";
  const loweredCommand = command.toLowerCase();

  // Hello my name is Benjamin
  if (loweredCommand.includes("my name is")) {
    if (user.name) {
      return "The name is already saved";
    }
    const splitted = loweredCommand.split(" ");
    user.name = splitted[splitted.length - 1];
    return `nice to meet you ${user.name[0].toUpperCase()}${user.name.slice(1)}`;
  }

  // if user.name doesn't provided
  if (loweredCommand.includes("what is my name?") && !user.name) {
    return "Please tell your name";
  }

  // What is my name
  if (loweredCommand.includes("what is my name?")) {
    return user.name;
  }

  //Add new todo item
  if (loweredCommand.includes("add") && loweredCommand.includes("to my todo")) {
    const todo = loweredCommand
      .replace("add", "")
      .replace("to my todo", "")
      .trim();
    user.todos.push(todo);
    return `${todo} added to your todo`;
  }

  // Remove todo item
  if (
    loweredCommand.includes("remove") &&
    loweredCommand.includes("from my todo")
  ) {
    const todo = loweredCommand
      .replace("remove", "")
      .replace("from my todo", "")
      .trim();
    const index = user.todos.indexOf(todo);
    if (index > -1) {
      user.todos.splice(index, 1);
    }
    return `Removed ${todo} from your todo`;
  }

  // What is on my todo?
  if (loweredCommand.includes("what is on my todo?")) {
    const listOfTasks = user.todos.join(" and ");
    const result =
      user.todos.length === 1
        ? `You have ${user.todos.length} todo - ${listOfTasks}`
        : `You have ${user.todos.length} user.todos - ${listOfTasks}`;
    return result;
  }

  // What day is it today?
  if (loweredCommand.includes("what day is it today?")) {
    const today = new Date();
    return `${today.getDate()} of ${today.toLocaleString("default", { month: "long" })} ${today.getFullYear()}`;
  }

  // what is (math expression)?
  if (loweredCommand.includes("what is")) {
    const expression = loweredCommand
      .replace("what is", "")
      .trim()
      .replaceAll(" ", "");

    const operators = "+-/*%";
    for (let i = 0; i < expression.length; i++) {
      if (operators.includes(expression[i])) {
        const operator = expression[i];
        const numbers = expression.split(operator);

        return operation(numbers[0], numbers[1], operator);
      }
    }
  }

  function operation(numberOne, numberTwo, operator) {
    const first = Number(numberOne);
    const second = Number(numberTwo);
    if (operator === "+") return first + second;
    if (operator === "-") return first - second;
    if (operator === "*") return first * second;
    if (operator === "/") return first / second;
    if (operator === "%") return first % second;
  }

  // Set a timer for 4 minutes
  if (loweredCommand.includes("set a timer for")) {
    const arr = loweredCommand.split(" ");
    const minutes = +arr[4];
    setTimeout(() => {
      console.log("Timer done");
    }, minutes * 60000);
    return `Timer set for ${minutes} minutes`;
  }

  // Flip a coin
  if (loweredCommand.includes("flip a coil")) {
    const randomNumber = Math.random();
    return randomNumber <= 0.5 ? "Heads" : "Tails";
  }
};

console.log(getReply("Oh, Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 4 * 12"));
console.log(getReply("Set a timer for 4 minutes"));
console.log(getReply("Flip a coil"));
console.log(getReply(""));
