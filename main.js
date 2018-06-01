
// Objects to represent my previous 3 jobs
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
    value: ["Difficult schedule", "Nasty customers", "Too much sales", "Not much career advancement", "Not paid very well"],
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
    value: ["Toxic work environment", "Unethical managers", "Unclear job role", "No career advancement", "Disorganized company", "Paid far below market rate", "No follow-through on promises"],
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


// Function to create a new job
const jobCreator = (companyName, jobTitle, startDate, endDate, goodThings, badThings) => {
  Object.create({}, {
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
}

jobCreator("Nashville Software School", "Student", "May 2018", "Nov 2018", ["Fun", "Interesting", "Engaging", "Great hours"], ["Not making any money"]);