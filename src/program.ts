"use strict";

import { Request, Response } from "express";

const FizzBuzz = (req: Request, res: Response) => {
    const number: number = req?.body?.check;
    if (!number) return res.send({result: 'Check is required!'});
    if (isNaN(Number(number))) return res.send({result: 'Check must be number!'});

    let output: string[] = [];
    for (let i: number = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) output.push('FizzBuzz');
        else if (i % 3 === 0) output.push('Fizz');
        else if (i % 5 === 0) output.push('Buzz');
        else output.push(i.toString())
    }
    return res.send({result: output.join(', ')});
};

const Palindrome = (req: Request, res: Response) => {
    const string: string = req?.body?.check;
    if (!string) return res.send({result: 'Check is required!'});

    const len: number = string?.length;
    let output: string = 'A Palindrome';
    for (let i: number = 0; i < len/2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            output = 'Not a Palindrome';
        }
    };
    return res.send({result: output});
};

export default {
    FizzBuzz,
    Palindrome,
}