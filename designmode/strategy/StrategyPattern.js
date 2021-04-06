/*
 * @Author: your name
 * @Date: 2021-03-31 15:18:23
 * @LastEditTime: 2021-04-06 10:35:51
 * @LastEditors: Please set LastEditors
 * @Description: 策略模式
 * @FilePath: \instance-deployd:\alunchen\JavaScript\designmode\strategy\StrategyPattern.js
 */

/**
 * 策略模式: 定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换
 */

// 使用策略模式计算
(function(){
    let calculateBonus = function(performanceLevel, salary) {
        if(performanceLevel === 'S') {
            return salary * 4
        }
        if(performanceLevel === 'A') {
            return salary * 3
        }
        if(performanceLevel === 'B') {
            return salary * 2
        }
    }
    console.log(calculateBonus('B', 20000));
    console.log(calculateBonus('S', 6000))
})()


/* -------------------------------------------------- */
(function(){
    let performanceS = (salary) => {
        return salary * 4
    }
    let performanceA = (salary) => {
        return salary * 3
    }
    let performanceB = (salary) => {
        return salary * 2
    }
    let calculateBonus2 = function(performanceLevel, salary){
        if(performanceLevel === 'S') {
            return performanceS(salary)
        }
        if(performanceLevel === 'A') {
            return performanceA(salary)
        }
        if(performanceLevel === 'B') {
            return performanceB(salary)
        }
    }
})()


/* -------------------------------------------------- */

/*
        一个基于策略模式的程序至少由两部分组成，第一个部分是一组策略类，策略类封装了具体的算法
    并负责具体的计算过程，第二个部分就是环境类Context，Context接受客户的请求，随后把请求委托给
    某一个策略类
*/ 
(function(){
    let performanceS = function(){}
    performanceS.prototype.calculate = function(salary){
        return salary* 4
    }
    let performanceA = function(){}
    performanceA.prototype.calculate = function(salary){
        return salary* 3
    }
    let performanceB = function(){}
    performanceB.prototype.calculate = function(salary){
        return salary* 2
    }
    let Bonus = function() {
        this.salary = null;
        this.strategy = null;
    }
    Bonus.prototype.setSalary = function(salary){
        this.salary = salary
    }
    Bonus.prototype.setStrategy = function(strategy){
        this.strategy = strategy
    }
    Bonus.prototype.getBonus = function(){
        if(!this.strategy){
            throw new Error('未设置strategy属性')
        }
        return this.strategy.calculate(this.salary)
    }
})()