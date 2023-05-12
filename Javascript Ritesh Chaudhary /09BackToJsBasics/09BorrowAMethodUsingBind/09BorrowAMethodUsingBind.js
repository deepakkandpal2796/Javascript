// Lets disucss some of the binding properties.....we first write code on editor then bring this code to the console and then we have to understand the prototype and then we will come back here and we will understand all of this..

const deepak = {
    firstName: "Deepak",
    lastName: "Kandpal",
    role: "Admin",
    courseCount: 3,
    // to understand this there have to be 1 method inside of this function so lets create the method...
    getInfo : function() {
        console.log(
            `First Name is ${this.firstName},
             Last Name is ${this.lastName},
             His role is ${this.role}
             and he is studying ${this.courseCount}
            `);
    }
}

// there are properties that we added and we can see proto and there are properties attach to proto also but when there is a method attached to it ==> there is getInfo method inside which we can see a proto and we can see a whole lot of properties out there...as we can see in img1
//# so there are some properties which are attached to the object and there are so e properties which are attached to the method which you give inside the object...
//and this time we are going to look at the proto inside the method which we have defined... specifically the bind keyword...


const dj = {
    firstName: "The Rock",
    lastName: "DJ",
    role: "Sub-Admin",
    courseCount: 4,
}

//now there we have another object with same keys their values are different and here we can see a clear difference that the object is missing here which is """getInfo"""
//!  so if i try to run dj.getInfo();  => then this shows error as this method is not defined for this object......
deepak.getInfo();
// dj.getInfo();  // this will give error

//# If i say that we can borrow methods from other objects without ""copying""....because getInfo method is so generic it can be used anywhere where we have 4 basic properties mentioned which is used in the method that is firstName, lastName, role, courseCount....

//? what do i mean by generic => basically tumhe aise method bhi likhne hai jo ek se jayada object me as a method use ho paye to jayada se jayada this keyword use kro and keys ho sake to same rkho objects me

//here we have seen there are some proto in the method of object we have one proto property known as ""BIND"" 

// you have to pass the object in brackets that you want to bind with the method...

// deepak.getInfo.bind(dj)(); this is direct way to use the object in dj keys value pairs...

var djInfo = deepak.getInfo.bind(dj);
djInfo();


//? just like bind there are so many methods there in an method of the object and you have to read all of them from the documentation 

//===call method===
deepak.getInfo.call(dj);
// this is same as the bind method here you dont have to use brackets here to run this directily

