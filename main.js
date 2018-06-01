
// Practice: Objects to represent my previous 3 jobs
const wellsFargo = Object.create({}, {
  business: {
    value: "Wells Fargo",
    enumerable: true,
    writable: false
  },
  title: {
    value: "Lead Teller",
    enumerable: true,
    writable: false
  },
  employmentStart: {
    value: "June 2015",
    enumerable: true,
    writable: true
  },
  employmentEnd: {
    value: "September 2016",
    enumerable: true,
    writable: true
  },
  pros: {
    value: ["Great coworkers and managers", "Clear responsibility chain", "Spanish speaking", "Friendships with nice customers"],
    enumerable: true,
    writable: true
  },
  cons: {
    value: ["Difficult schedule", "Nasty customers", "Too much pressure to sell products", "Not much career advancement", "Not paid very well"],
    enumerable: true,
    writable: true
  }
})

const serviceSource = Object.create({}, {
  business: {
    value: "Service Source",
    enumerable: true,
    writable: false
  },
  title: {
    value: "Customer Success Manager",
    enumerable: true,
    writable: false
  },
  employmentStart: {
    value: "September 2016",
    enumerable: true,
    writable: true
  },
  employmentEnd: {
    value: "March 2017",
    enumerable: true,
    writable: true
  },
  pros: {
    value: ["Close friends with coworkers", "Flexible schedule", "Nice location downtown"],
    enumerable: true,
    writable: true
  },
  cons: {
    value: ["Toxic work environment", "Unethical management", "Unclear job responsibilities", "No career advancement", "Disorganized company", "Paid half of standard market salary for role", "No follow-through on promises"],
    enumerable: true,
    writable: true
  }
})

const simplifyCompliance = Object.create({}, {
  business: {
    value: "Simplify Compliance",
    enumerable: true,
    writable: false
  },
  title: {
    value: "Temp Worker",
    enumerable: true,
    writable: false
  },
  employmentStart: {
    value: "April 2017",
    enumerable: true,
    writable: true
  },
  employmentEnd: {
    value: "May 2018",
    enumerable: true,
    writable: true
  },
  pros: {
    value: ["Laid back atmosphere", "Short commute", "Company genuinely seemed to care about employees"],
    enumerable: true,
    writable: true
  },
  cons: {
    value: ["Uninteresting work", "Not paid very well", "Not much career advancement", "Didn't have many friends at work"],
    enumerable: true,
    writable: true
  }
})



// Challenge: Function to create a new job
const jobCreator = (companyName, jobTitle, startDate, endDate, goodThings, badThings) => {
  const newObject = Object.create({}, {
    business: {
      value: companyName,
      enumerable: true,
      writable: false
    },
    title: {
      value: jobTitle,
      enumerable: true,
      writable: false
    },
    employmentStart: {
      value: startDate,
      enumerable: true,
      writable: true
    },
    employmentEnd: {
      value: endDate,
      enumerable: true,
      writable: true
    },
    pros: {
      value: goodThings,
      enumerable: true,
      writable: true
    },
    cons: {
      value: badThings,
      enumerable: true,
      writable: true
    }
  })
  return newObject;
}

const nss = jobCreator("Nashville Software School", "Student", "May 2018", "Nov 2018", ["Mentally stimulating", "Fun environment", "Great hours"], ["Not making any money"]);

// Shows title and business of previous job
const showOldJob = (jobObject) => {
  const oldJob = `${jobObject.title} at ${jobObject.business}`;
  return oldJob;
}

console.log(showOldJob(wellsFargo));
console.log(showOldJob(nss));


// Advanced Challenge: Function to write out all jobs to the DOM
const allJobs = [wellsFargo, serviceSource, simplifyCompliance, nss];

const createArticle = (jobToCreate) => {
  const jobOutput = document.createElement("article");
  jobOutput.innerHTML = `
  <br>
  <h2>${showOldJob(jobToCreate)}</h2>
  <h4>From ${jobToCreate.employmentStart} to ${jobToCreate.employmentEnd}</h4>
  <p><strong>Pros:</strong><em> ${jobToCreate.pros.join(", ")}</em></p>
  <p><strong>Cons:</strong><em> ${jobToCreate.cons.join(", ")}</em></p>
  `;
  return jobOutput;
}

console.log(createArticle(nss));

const writeToDOM = (newArticle) => {
  const body = document.querySelector("body");
  body.insertBefore(newArticle, body.lastElementChild);
}

// writeToDOM(createArticle(nss)); testing writeToDom function

const writeAll = () => {
  for (let i = 0; i < allJobs.length; i++) {
    writeToDOM(createArticle(allJobs[i]));
  }
}

writeAll();