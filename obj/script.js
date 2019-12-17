var person = {
  'name' : 'James',
  'age' : 19,
  'sex' : 'male',
  
}

var person2 = {
  'name': 'James',
  'age': 19,
  'sex': 'male',
  'year': function(){
    return 2019-this.age
  }
}

console.log(person)
console.log(person.sex)

console.log (person2.year());


var m = {
  "mas" : [2,6,19,53],
  "sum" : function (){
      var sum = 0;
      for(var i=0; i<this.mas.length; i++){
        sum = sum + this.mas[i];
      }
      return sum;
  }
}
console.log(m.sum())