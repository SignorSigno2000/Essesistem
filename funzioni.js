function change_language(variable)
{
    var exdays=10;
    var date = new Date();
    date.setTime(date.getTime()+(exdays*24*60*60*1000));
    var expires = "; expires=" + date.toGMTString();
    if(variable == 'ITA')
    {
    //italiano
    document.cookie = 'language=ITA; path=/';
    }
    else
    {
    //inglese
    document.cookie = 'language=ENG; path=/';
    document.cookie = 'page=ph; path=/';
    location.href = "../index.html";
    }
}

function connectDB(){
    const MongoClient = require(‘mongodb’).MongoClient;
    const uri = "mongodb+srv://Essesistem:Mattiasigno1@cluster0-j1j7d.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        alert("I made it!");
        client.close();
    });
}