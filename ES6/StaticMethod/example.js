// BEFORE ES6

class MathUtilOld {

    processCube(x)
    {
        console.log(x*x*x);
    }

}

const m = new MathUtilOld();
m.processCube(3);

// ES6

class MathUtilNew {

    static processCube(x)
    {
        console.log(x*x*x);
    }
}

MathUtilNew.cube(3);