//movie

class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        if(this.rating===undefined){this.rating="PG"}
    }
    display (){
        console.log(`${this.title},${this.studio},${this.rating}`);
    }
   movieobject(){
    return ({title:this.title,
        studio:this.studio,
        rating:this.rating});

   }
  }
   let Movie1=new movie("Leo","7 green studio");
   Movie1.display();
  let Movie2=new movie("theri","sun picture","PG");
  let Movie3=new movie("singam","2 d ","PG");
  let Movie4=new movie("master","sun picture","PG");
  let movie5=new movie("Casino Royale","Eon Productions","PG13");
 movie5.display();
  let arr=[];
   arr.push(Movie1.movieobject());
   arr.push(Movie2.movieobject());
   arr.push(Movie3.movieobject());
   arr.push(Movie4.movieobject());
   console.log(arr);

//2)circle
   class Circle{
    constructor(color,radius){
        this.color=color;
        this.radius=radius;
    }
    setColor(color){
        this.color=color;
    }
    setRadius(radius){
        this.radius=radius;
    }
    getColor(){
        return this.color;
    }
    getRadius(){
        return this.radius;
    }
    getArea(){
        let area=(3.14*this.getRadius()*this.getRadius()).toFixed(2);
        return `"Area of circle is" ${area}`;
    }
   getCircumference(){
       let circum=(2*3.14*this.getRadius()).toFixed(2);
       return `"Circumference of circle is" ${circum}`;
   }
   display(){
       let str =  `[ radius : ${this.getRadius()} , color : ${this.getColor()}]`;
       return str;
   }
}
let circle1=new Circle();
let circle2=new Circle("red");
let circle3=new Circle("green",5);
circle1.setRadius(6);
circle1.setColor("white");
circle2.setRadius(9);
console.log(circle1.display());
console.log(circle2.display());
console.log(circle3.getArea());
console.log(circle3.getCircumference());

//3) person class hold all detail:
class Person{
    constructor(name,heigth,weigth,age,qualification,city, state){
        this.name=name;
        this.heigth=heigth;
        this.weigth=weigth;
        this.age=age;
        this.qualification=qualification;
        this.city=city;
        this.state=state;
    }
    details(){
        console.log(`
        name:${this.name}
        height:${this.heigth}
        weight:${this.weigth}
        age:${this.age}
        qualification:${this.qualification}
        city:${this.city}
        state:${this.state}`);
    }
}
let Person1=new Person("pavithran","5.6","75","24","B.E","civil","TamilNadu");
Person1.details();

//4)uber car price
class UberCarPrice {
    constructor(distance) {
      this.distance = distance;
      
    }
    getPrice() {
      return (this.distance ) *20;
    }
  }
  
  let uber = new UberCarPrice(20);
  console.log(uber.getPrice());

