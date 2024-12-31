let role = "editor";

if (role === "admin") {
  console.log("You have full access.");
} else if (role === "editor") {
  console.log("You can edit content.");
} else if (role === "viewer") {
  console.log("You can view content.");
} else {
  console.log("Invalid role. Please check again.");
} 

