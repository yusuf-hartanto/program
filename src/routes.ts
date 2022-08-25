"use strict";

import { Router } from "express";
import Program from './program';

const router = Router();

router.post('/fizzbuzz', Program.FizzBuzz);
router.post('/palindrome', Program.Palindrome);

export default router;