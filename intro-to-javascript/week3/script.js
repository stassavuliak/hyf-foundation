//Item array removal

/*
 * Remove the item in names that is equal to nameToRemove
 */

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Bob";

// Write some code here
const removeArrayElement = (nameToRemove, array) => {
  const indexOfRemovalValue = array.indexOf(nameToRemove);
  if (indexOfRemovalValue === -1) return "That name doesn't exist";
  array.splice(indexOfRemovalValue, 1);
  return array;
};
// Code done

console.log(removeArrayElement(nameToRemove, names)); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala']

// When will we be there??

/**
 * Write a function where you specify your speed in km/h and how far you have to go in km.
 * The function has to return the time it will take to arrive at your destination.
 * The time should be formatted like this: 3 hours and 34 minutes.
 * Hint: For formatting your best friend is Google!
 */

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const getTimeToDestination = (travelInformation) => {
  const number =
    travelInformation.destinationDistance / travelInformation.speed;

  const hour = Math.floor(number);

  let decimalPart = number - hour;
  const min = 1 / 60;
  const roundedDecimalPart = min * Math.round(decimalPart / min);

  const minute = Math.floor(roundedDecimalPart * 60);

  const time = `${hour} hours and ${minute} minutes`;

  return time;
};

const travelTime = getTimeToDestination(travelInformation);
console.log(travelTime);

/**
 * Series duration of my life
 */

const seriesDurations = [
  {
    title: "Breaking Bad",
    days: 2,
    hours: 1,
    minutes: 14,
  },
  {
    title: "Lupin",
    days: 0,
    hours: 13,
    minutes: 11,
  },
  {
    title: "Chernobyl",
    days: 0,
    hours: 5,
    minutes: 30,
  },
];

const averageLifeSpan = 80;

// convert years to minutes
const convertYearsToMinutes = (number) => {
  return number * 365 * 24 * 60;
};

// convert series duration to minutes
const convertSeriesDurationToMinutes = (arr) => {
  return arr.map(
    (item) => item.days * 24 * 60 + item.hours * 60 + item.minutes,
  );
};

// get percentage between years and series duration
const getPercentage = (part, total) => {
  return (part / total) * 100;
};

// log out the result
const logOutSeriesText = (seriesList) => {
  const seriesInMinutes = convertSeriesDurationToMinutes(seriesList);

  const arrayOfSeries = seriesList.map((seriesItem, index) => {
    return `${seriesItem.title} took ${getPercentage(
      seriesInMinutes[index],
      convertYearsToMinutes(averageLifeSpan),
    ).toFixed(4)}% of my life`;
  });

  const totalSum = seriesInMinutes.reduce(
    (acc, currentItem) => acc + currentItem,
    0,
  );

  const totalPercentage = getPercentage(
    totalSum,
    convertYearsToMinutes(averageLifeSpan),
  ).toFixed(4);
  const totalText = `In total that is ${totalPercentage}% of my life`;
  return `${arrayOfSeries.join("\n")}\n\n${totalText}`;
};

console.log(logOutSeriesText(seriesDurations));

/*
 * NOnoN0nOYes (Note taking app)
 */

// Save a note
const notes = [];
const saveNote = (content, id) => {
  notes.push({ content, id, date: new Date() });
  // notes.push(Date());
};

saveNote("Prepare HYF assignment", 7);
saveNote("Do laundry", 5);
saveNote("Do laundry", 9);
saveNote("Pick up groceries", 1);
saveNote("Do homework", 3);
saveNote("Do Work", 4);

console.log(notes);

// Get a note
/*
 * Why we can not pass the array (note) as a second parameter of a function?
  like this:
  const getNote = (id, arr) => {
    return arr[id];
  };
 */
const getNote = (id) => {
  if (!Number.isInteger(id) || id < 0) return "Error: try another ID";

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) return notes[i];
  }

  return "Error: try another ID";
};

console.log("here", getNote(8));

//Log out notes
const logOutNotesFormatted = (notes) => {
  const sortedList = [...notes].sort((a, b) => a.id - b.id);
  return sortedList
    .map((item) => {
      return `The note with id: ${item.id}, has the following note text: ${item.content} \n`;
    })
    .join("");
};

console.log(logOutNotesFormatted(notes));

// Unique feature ???

//CactusIO-interactive (Smart phone usage app) optional
/**
 * After a long day you come home to relax. The first thing you do is find your phone and start watching some youtube. 
 * Then check facebook, and then reading some news. Suddenly a hour has passed. What happened to all that time you think to yourself. 
 * Maybe we can create some program to help with this problem! What if we could help users manage their smart phone usage? 
  It's going to work like this: A user can add smartphone activities. Then they can see a status on how their smartphone usage is going.

  Adding an activity
  Let's create the first part of the functionality that is adding activities.
  Create a variable called activities that stores all activities of the day. 
  What type of variable would you think would make sense? Create a function called addActivity. 
  It should have three parameters: date, activity and duration. The date should be a string, the activity a string and the duration a number. 
  To save the activity push an object that contains the date, the activity and the duration to the activities variable.
  Now a user can add an activity by writing:
 */

const activities = [];
const getAutomaticDate = () => {
  const today = new Date();
  const formatDate = `${today.getDate()}/${today.getMonth() + 1}-${today.toLocaleDateString("en", { year: "2-digit" })}`;
  return formatDate;
};

const addActivity = (activity, duration) => {
  const date = getAutomaticDate();
  activities.push({
    date,
    activity,
    duration,
  });
};

addActivity("Youtube", 30);
addActivity("Youtube", 30);
addActivity("Youtube", 30);
addActivity("Youtube", 30);
addActivity("Movies", 20);
addActivity("Movies", 20);
console.log(activities);

const showStatus = (activities, date, limit) => {
  if (!activities.length) {
    return "Add some activities before calling showStatus";
  }

  let totalDuration = 0;
  let totalActivitiesForDay = 0;
  let totalDurationForDay = 0;
  const totalActivities = activities.length;

  for (let i = 0; i < activities.length; i++) {
    totalDuration += activities[i].duration;

    if (activities[i].date === date) {
      totalActivitiesForDay += 1;
      totalDurationForDay += activities[i].duration;
    }
  }

  if (!totalActivitiesForDay) {
    return "Please choose another date";
  }

  if (totalDurationForDay > limit) {
    return "You have reached your limit, no more smartphoning for you!";
  }
  // return `You have added ${totalActivities} activities. They amount to ${totalDuration} min. of usage`;
  return `You have added ${totalActivitiesForDay} activities for ${date}. They amount to ${totalDurationForDay} min. of usage`;
};

console.log(showStatus(activities, "23/10-26", 130));

const getMostActivity = (activities) => {
  const sortedActivities = [];

  for (let i = 0; i < activities.length; i++) {
    if (
      sortedActivities.find((item) => item.activity === activities[i].activity)
    ) {
      const item = sortedActivities.find(
        (item) => item.activity === activities[i].activity,
      );
      item.duration += activities[i].duration;
    } else {
      sortedActivities.push({ ...activities[i] });
    }
  }

  const maxDurationActivity = sortedActivities.reduce(
    (acc, currentActivity) => {
      if (currentActivity.duration > acc.duration) {
        return currentActivity;
      }
      return acc;
    },
    sortedActivities[0],
  );

  return `The most popular activity is ${maxDurationActivity.activity}, and you spent ${maxDurationActivity.duration} min watching it`;
};

console.log(getMostActivity(activities));
