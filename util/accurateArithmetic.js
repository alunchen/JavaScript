
class Util {
    accAdd(num1, num2) {
        if(isNaN(num1) || isNaN(num2))return
        let r1,r2,m;
        try {
            r1 = num1.toString().split('.')[1]
        } catch (error) {
            r1 = 0
        }
        try {
            r2 = num2.toString().split('.')[1]
        } catch (error) {
            r2 = 0
        }
        m = Math.pow(10, Math.max(r1, r2))
        return (num1 * m + num2 * m)/m
    }
}
let util = new Util();
console.log(0.1 + 0.2)
console.log(util.accAdd(0.1, 0.2))