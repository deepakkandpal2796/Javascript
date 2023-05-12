/* Define a function that can answer the role of a user.
A user can be on the following roles:
    admin : With all access.
    subadmin : with access to create and delete course.
    testprep : with access to create and delete courses.
    user : consume all content.
    other : trial user.

    Input getUserRole(name, role;
*/

function getUserRole(name, role){

    switch (role) {
        case "admin":
        case "Admin":
            return `${name} is admin with all access`;
            break; //! you can see here break is a bit dark because break is not working whenever you use return break is not needed to be write anymore because when we return something then the rest code will stop working so return have functions of break......
        case "subadmin":
        case "Subadmin":
            return `${name} is sub-admin with access to create and delete courses`;
            break;
        case "testprep":
        case "Testprep":
            return `${name} is a test prep with access to create and delete courses`;
            break;
        case "user":
        case "User":
            return `${name} is a user to consume content `;
            break;
        default:
            return `${name} is a trial user`
            break;
    }
}

console.log(getUserRole("Deepak", "Admin"));
var getRole = getUserRole("Tushar", "user");
console.log(getRole);


// ====================================================================================

//* now you can use the variable and assign the function to that variable insted of giving the function name.  But if you are using this variable stuff then all u can call the function by variable name. basically bs name ki jagah variable bn gya or kuch nhi call krne ke liye bhi same hai u can use the name to call function.....

var  getUserRole = function (name, role){

    switch (role) {
        case "admin":
        case "Admin":
            return `${name} is admin with all access`;
            break; //! you can see here break is a bit dark because break is not working whenever you use return break is not needed to be write anymore because when we return something then the rest code will stop working so return have functions of break......
        case "subadmin":
        case "Subadmin":
            return `${name} is sub-admin with access to create and delete courses`;
            break;
        case "testprep":
        case "Testprep":
            return `${name} is a test prep with access to create and delete courses`;
            break;
        case "user":
        case "User":
            return `${name} is a user to consume content `;
            break;
        default:
            return `${name} is a trial user`
            break;
    }
}

console.log(getUserRole("Deepak", "Admin"));
var getRole = getUserRole("Tushar", "user");
console.log(getRole);




// this code run same as it is just name ki jagah ye variable bna diya hai....


//just a glimphs of arrow function you can also remove the keyword function.


var  getUserRole = (name, role) => {

    switch (role) {
        case "admin":
        case "Admin":
            return `${name} is admin with all access`;
            break; //! you can see here break is a bit dark because break is not working whenever you use return break is not needed to be write anymore because when we return something then the rest code will stop working so return have functions of break......
        case "subadmin":
        case "Subadmin":
            return `${name} is sub-admin with access to create and delete courses`;
            break;
        case "testprep":
        case "Testprep":
            return `${name} is a test prep with access to create and delete courses`;
            break;
        case "user":
        case "User":
            return `${name} is a user to consume content `;
            break;
        default:
            return `${name} is a trial user`
            break;
    }
}

console.log(getUserRole("Deepak", "Admin"));
var getRole = getUserRole("Tushar", "user");
console.log(getRole);