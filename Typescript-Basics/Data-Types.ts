// var fn = () => "Hello World";
// console.log(fn());

//===================================Data Types========================================

//variable declaration
var a: number;
var b: boolean;
var c: string;
//var d : undefined;
//var e : null;

//variable initialization
a = 10;
b = true;
c = 'Hello';

var count = 5;
//count = '5'; //type mismatch

//===================================Array=============================================
var anyArr: any[] = [1, true, 'a', false];
var myArr: number[];
myArr = [];
myArr = [1, 2];

//myArr = ['1']; //cant assign string elemets to a number array
//myArr = 1; //cant assign a number to a number array

myArr.push(1);
//myArr.push('1'); //cant assign string elemets to a number array

//===================================Tuple=============================================

var myTuple: [number, boolean];
myTuple = [1, true];
//myTuple = [1];//Type mismatch
//myTuple = [true, 1]; //Type order mismatch

//===================================enum==============================================

//Bad way:
// const colorRed = 0;
// const colorGreen = 1;
// const colorBlue = 2;

//Best way:
enum color { Red = 0, Green = 1, Blue = 2 }
var backgroudColor = color.Blue;

enum DaysOfWeek {
    SON, MON, TUE, WED, THU, FRI, SAT
}

let day: DaysOfWeek;
day = DaysOfWeek.MON;

//===================================Type assertion===================================
var msg1 = 'abc';
var res1 = msg1.endsWith('c');

var msg2: any;
msg2 = 'abc';

// Now here we won't get intellisence to string method. Explicitly we need to tell compiler about its type.
//let res2 = msg2.  

var res2 = (<string>msg2).endsWith('c'); //Recommanded way
var res3 = (msg2 as string).endsWith('c');// Type assertion
// This type assertion does not change  type of msg2. 
//its purely a way to tell typescript compiler about the type of a varible, so we can accessthe intellisense.

//===================================Custom Types==============================================
var drawPoint1 = (x, y, z, a, b, c) => { }; //Bad approach

var drawPoint2 = (point) => { }; //wrapping all datapoints in an array of object but still bad
drawPoint2({ x: 1, y: 2 });

//Inline annotation
var drawPoint3 = (point: { x: number, y: number }) => { };

//With interface --> with this interface we defined the shape of an object 
interface Point {
    x: number;
    y: number;
    draw(): void;
}
var drawPoint4 = (point: Point) => { };

//Cohesion problem with interface: Which means things that are related should be part of one unit, they should go together.
//This is what we call cohesion.
//So for this scenario class is better approach beacause to draw points we need behavior also with properties(points).
class PointClass {
    x: number;
    y: number;

    constructor(x: number, y: number, z?: number) { //Z is optional
        this.x = x;
        this.y = y;
    }

    draw() {
        //..
    }
    getDistance() {
        //..
    }
}

var pointClass: PointClass = new PointClass(1, 2);
pointClass.draw();

//===================================Access Modifiers==============================================
//1.public 2.private 3.protected
class A {
    private x: number;
    public y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    //By default methods and variables are public.
    draw() { }

    private calculateDiatance() { }
}

class B {
    //Reducing noisy code. In constructor only we are doing declaratio
    constructor(private x?: number, public y?: number) {
        //No need repetitive assignments either.
    }

    //By default methods and variables are public.
    draw() { }

    private calculateDiatance() { }
}

var b1 = new B(1, 2);
b1.draw();
//===================================Properties=====================================================
// Properties are really a method. It is a one method which has a gette and setter or a combination of getter and setter.
class C {
    constructor(private a?: number, public b?: number) { }

    get A() {
        return this.a;
    }

    set A(value: number) {
        if (value < 0)
            throw new Error('Value can not be less than zero');

        this.a = value;
    }

    draw() { }
}

var c1 = new C(1, 2);
let x = c1.A;
c1.A = 10;
c1.draw();

//===================================Function Typing=====================================================
function add(a: number, b:number){}
var sum1 = add(1,2);
//var sum2 = add(1,'2'); //Type mismatch
//var sum3 = add(1); //An argument for 'b' is missing

function subtract(x, y){}
//subtract(1); //An argument for 'x' is missing

//optional parameters
function optionalFun(a, b, c?){
    return a+b;
}
var optionalFunc1 = add(1, 2, 3);
var optionalFunc2 = add(1, 2);
//var optionalFunc3 = add(1); //An argument for 'b' is missing

