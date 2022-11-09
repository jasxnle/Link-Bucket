
//using map to store i value and its corresponding key value
map ={};
map['0'] = 'firstLink';
map['1'] = 'secondLink'; 
map['2'] = 'thirdLink';
map['3'] = 'fourthLink';
map['4'] = 'fifthLink';

urls = {};

//chrome.alarms.create("myAlarm", {delayInMinutes:0.1, periodInMinutes: 0.2});

//retrieves last 5 pages visited
chrome.history.search({text: '', maxResults: 5}, function(d){
    var i = 0;
    d.forEach(function(page) {
        //setting text that will be displayed
        let text = page.title;
        //let result = text.link(page.url); // should be imbedding link into the title

        //settting it equal to the ID in .html file
        document.getElementById(map[i]).innerHTML = text;

        //just checking if api works in console
        console.log(page.title);

        urls[i] = page.url;

        i +=1;
    });
});

//on click of the button the link will open
document.getElementById('link1').addEventListener('click', ()=>{
    window.open(urls[0], '_blank');});

document.getElementById('link2').addEventListener('click', ()=>{
    window.open(urls[1], '_blank');});

document.getElementById('link3').addEventListener('click', ()=>{
    window.open(urls[2], '_blank');});

document.getElementById('link4').addEventListener('click', ()=>{
    window.open(urls[3], '_blank');});

document.getElementById('link5').addEventListener('click', ()=>{
    window.open(urls[5], '_blank');});

