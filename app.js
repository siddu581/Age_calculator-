function calculate(){
    const dob = document.getElementById('age').value;
    const birthDate = new Date(dob);
    const present = new Date();

    let age = present.getFullYear() - birthDate.getFullYear();
    const monthDiff = present.getMonth() -birthDate.getMonth();

    if(monthDiff < 0  || (monthDiff === 0 && present.getDate() << birthDate.getDate())){
        document.getElementById('rst').innerText = `Your are entering invalid year`
    }  else{  
    document.getElementById('rst').innerText = `Your age is ${age} years`
    }
}