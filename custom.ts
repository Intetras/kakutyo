
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon="\uf1b9" block="拡張機能テスト"
namespace kakutyo{
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }

    //% blockID="test1" block="引数無し戻り値無し"
    export function test1():void{

    }

    //% blockID="test2" block="引数あり戻り値無し %v"
    export function test2(value:number): void {

    }

    /*
    戻り値ありにすると丸ブロック
    */
    //% blockID="test3" block="引数なし戻り値あり"
    export function test3(): number {
        return 100;
    }

    //% blockID="test4" block="引数あり戻り値あり %v"
    export function test4(value:number): number {
        return value + 100;
    }
    //% blockID="test5" block="ずっと"
    export function zutto(a:()=>void):void{
        kakutyo.zutto(a);
        basic.pause(100);
    }

    //% blockID="test6" block="一時停止 %v 秒"
    export function pause(sec:number):void{
        basic.pause(sec * 1000);
    }

    //% blockID="test7" block="%v　より明るい"
    export function yoriakarui(akarusa:number,handler:()=>void){
        input.onButtonPressed(Button.A,body);
    }

    //% blockID="test8" block="明るい"
    export function akarui():boolean{
        if(input.lightLevel() > 100){
            return true;
        }else{
            return false;
        }
    }
}
