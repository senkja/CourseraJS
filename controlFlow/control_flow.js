let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);

let organisationRole = "Subscriber";
let dietMessage = ""

switch (organisationRole) {
    case "Employee":
        dietMessage = "You have FULL access to Dietary Service";
        break;
    case "Enrolled Membeg":
        dietMessage = "You have access to Dietary Service, and one-on-one interction to dietician";
        break;
    case "Subscriber":
        dietMessage = "You have partial access to Dietary Service";
        break;
    case "Non-Subscriber":
        dietMessage = "You need to enroll or subscribe to have access to Dietary Service";
        break;
}

console.log(dietMessage);

