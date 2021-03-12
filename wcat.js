let input =process.argv.slice(2);
var fs=reqire('fs');
const bigLinebreak=reqire('./commands/bigLinebreak');
const defaultShowData=require('./commands/defaultShowData');
const giveNumbers=require('./commands/giveNumbers');
const nonEmptyNumber=require('./commands/nonEmptyNumber');
let val=0;
let options =input[0];
let showContent =require('./commands/showContent');
if(options=='-s'||options=='-n'||options=='-b'){
    let dirpath=input[1];
    if(input.length<=2){
        witch(options){
            const fs = require('fs');

            case '-s':
                bigLinebreak(dirpath);
                break;
            case '-n' :
                giveNumbers(dirpath);
                break;
            case '-b':
                giveNumbers(dirpath);
                break;
            default :
                console.log("enter a valid options");
                break;
        }
    
    }
    else{
        if(input.length==3&&input[0]=='-n'&&input[1]=='s'){
            let path=input[2];
            bigLinebreak(path)
            giveNumbers(path);
        }
        else if(input.length==3 && input[0]=='-n'&&input[1]=='-b'){
            let path=input[2];
            giveNumbers(path);
        }
        else if(input.length==3&& input[0]=='-b'&&input[1]=='-b'){
            let path=input[2];
            nonEmptyNumber(path);
        }
        else{
            console.log('enter A valid Option');
        }
    }
}
else{
    defaultShowData(input);
}
function funname(){
const fs = require('fs'); 
const data = fs.readFileSync('./wcat.js', 
); 
console.log(data); 
}
module.exports = {
    
}