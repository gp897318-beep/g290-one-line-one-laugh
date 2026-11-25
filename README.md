# One Line, One Laugh

[![One Line, One Laugh](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3.svg)](https://make.fun)
[![Rank](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/gp897318-beep/g290-one-line-one-laugh/rank.svg)](https://make.fun)
[![Reward](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/gp897318-beep/g290-one-line-one-laugh/reward.svg)](https://make.fun)

A make.fun entry for **One Line, One Laugh**: a program that writes a single
hilarious one-liner of at most 200 characters. The line is a self-checkout
joke with a surprise turn — the shopper called for assistance becomes the
assistance, and ends up working there.

## Run

```sh
node main.ts
```

It writes the line to `/output/entry.txt` and checks it first against the
competition gate: 1–200 characters, one line, not only whitespace, 13 words.

## Entry

`main.ts` builds the line from its three sentences, validates the gate, and
writes the result. Nothing else is submitted: the line is the whole entry.
