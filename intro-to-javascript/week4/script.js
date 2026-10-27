// Voice assistant

let userName = "";
const todos = [];

const getReply = (command) => {
  // Hello my name is Benjamin
  if (command.includes("Hello my name is")) {
    if (userName) {
      return "The name is already saved";
    }
    userName = command.slice(17).toLowerCase();
    return `nice to meet you ${userName[0].toUpperCase()}${userName.slice(1)}`;
  }

  // if userName doesn't provided
  if (command.includes("What is my name?") && !userName) {
    return "Please tell your name";
  }

  // What is my name
  if (command.includes("What is my name?")) {
    return userName;
  }

  //Add fishing to my todo
  if (command.includes("Add fishing to my todo")) {
    todos.push("fishing");
    return "fishing added to your todo";
  }

  // Add singing in the shower to my todo
  if (command.includes("Add singing in the shower to my todo")) {
    todos.push("singing in the shower");
    return "singing added to your todo";
  }

  // Remove fishing from my todo
  if (command.includes("Remove fishing from my todo")) {
    const index = todos.indexOf("fishing");
    if (index > -1) {
      todos.splice(index, 1);
    }
    return "Removed fishing from your todo";
  }

  // What is on my todo?
  if (command.includes("What is on my todo?")) {
    const listOfTasks = todos.join(" and ");
    const result =
      todos.length === 1
        ? `You have ${todos.length} todo - ${listOfTasks}`
        : `You have ${todos.length} todos - ${listOfTasks}`;
    return result;
  }

  // What day is it today?
  if (command.includes("What day is it today?")) {
    const today = new Date();
    return `${today.getDate()} of ${today.toLocaleString("default", { month: "long" })} ${today.getFullYear()}`;
  }

  // what is (math expression)?
  if (command.includes("what is")) {
    const string = command.slice(7);
    const mathExp = eval(command.slice(7));
    return `The result of ${string} = ${mathExp}`;
  }

  // Set a timer for 4 minutes
  if (command.includes("Set a timer for")) {
    const arr = command.split(" ");
    const minutes = +arr[4];
    setTimeout(() => {
      console.log("Timer done");
    }, minutes * 60000);
    return `Timer set for ${minutes} minutes`;
  }

  // Flip a coin
  if (command.includes("Flip a coil")) {
    const randomNumber = Math.random();
    return randomNumber <= 0.5 ? "Heads" : "Tails";
  }
};

console.log(getReply("Hello my name is Benjamin"));
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
