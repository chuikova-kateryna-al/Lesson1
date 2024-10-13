var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
]

function validEmailsArray(arr){
var reg = /^[a-z0-9]+[.]?[a-z0-9]*@(gmail.com|yahoo.com)$/i;

for (i = 0; i < arr.length; i++) {
for (const [key, value] of Object.entries(arr[i])){
    var arrayWithEmails =[];
    if (key === 'email'){
        email = value;
        if (reg.test(email)){
        arrayWithEmails.push(email);
            } 
        }  
    }
    var res = console.log(arrayWithEmails);
    }
    return res;
}
(validEmailsArray(arr));
