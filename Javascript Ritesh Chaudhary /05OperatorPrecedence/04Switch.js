// you can use either break in switch or you can just return the value.Because once the value is return then rest of the code will not work.
// if you not use break then fallthrough happen.
// ab jo switch case lagega uske bad ke sare case execute ho jayenge.
// use default at the last.

/// Create an application with following roles:
// admin  - gets full access
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests
// user - gets access to consume content

var user = "admin";

switch (user) {
  case "admin": //this do strict comparision "===" not "=="
    console.log("You get full access");
    break;
  case "subadmin":
    console.log("gets access to create/delete courses");
    break;
  case "testprep":
    console.log("gets access to create/delete tests");
    break;
  case "user1": //this means or user1 or user2 print same result
  case "user2":
    console.log("gets access to consume content");
    break;
  default:
    console.log("Trial user");
    break;
}
