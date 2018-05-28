const User = require("./models/user");
const LocationBlog = require("./models/locationBlog");
const Position = require("./models/position");

function userCreate(fname,lname,userName,password,type,company,companyUrl){
    const job = [{type,company,companyUrl},{type,company,companyUrl}];
    const userInfo = {fname,lname,userName,password,job};
    const user = new User(userInfo);
    console.log("A new user was created!");
    return user.save();
} 

function positionCreator(lon,lat,userId){
    const posDetail = {user:userId,loc:{coordinates:[lon,lat]}};
    const position = new Position(posDetail);
    console.log("A new position was created!");  
    return position.save();
}

function LocationBlogCreator(info, author, longitude, latitude) {
    const LocationBlogDetail = { info, pos: { longitude, latitude }, author };
    const blog = new LocationBlog(LocationBlogDetail);
    console.log("a new LocationBlog was created!");  
    return blog.save()
}

async function createUsers(){
    await User.remove({}); //Means delete everything
    await Position.remove({});
    await LocationBlog.remove({});
    const userPromises = [
        userCreate("Sven","Holmager","sholmager","1234","IT","CPHBusiness Academy","Academy.dk"),
        userCreate("Anders","Birkelund","abirke","password","IT","Google","google.dk"),
        userCreate("Peter","Thorhus","pthor","pass1234","IT","Microsoft","microsoft.dk"),
        userCreate("Thomas","Nellemann","Thonel","1234pass","IT","BRF kredit","brf.dk"),
        userCreate("Rasmus","Friis","rasfri","word1234","IT","Danske Bank","db.dk"),
        
    ];

    const users = await Promise.all(userPromises);

    const positionPromises = [
    positionCreator(512,1234123,users[0]._id),
    positionCreator(234,41261,users[1]._id),
    positionCreator(86,45,users[2]._id),
    positionCreator(1234,84,users[3]._id),
    positionCreator(22,12,users[4]._id)
    ];
    const positions = await Promise.all(positionPromises);

    const blogPromises = [
        LocationBlogCreator("Nice tree", users[0]._id, 41, 91),
        LocationBlogCreator("A house", users[0]._id, 1, 541),
        LocationBlogCreator("A great house", users[1]._id, 234, 91),
        LocationBlogCreator("Lake view", users[2]._id, 64, 84),
    ];

    const blogs = await Promise.all(blogPromises);

    //console.log(users);
    //console.log(positions);
    console.log(blogs);
};

createUsers();