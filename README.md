# Minimum Rupiahs

This repo contains mini application that was bootstrapped with Create React App.

Minimum Rupiah is a mini app to calculate the minimum number of rupiahs needed to make that amount.


    15000 = 1 x Rp10000, 1x Rp5000
    Rp3900 = 1x Rp2000, 1x Rp1000, 1x Rp500, 4x Rp100
    12510 = 1 x Rp10000, 1x Rp2000, 1x Rp500, left Rp10 (no available fraction)


# Features!

  - Account for only available current rupiah fractions 100000, 50000, 20000, 10000, 5000, 1000, 500, 100 and 50. 
  - can run calculation just for 8 digits input
  
Validation Rules:
  - 17,500 (invalid separator)
  - 2 500(invalid separator)
  - 3000 Rp (valid character in wrong position)
  - Rp (missing value)

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v6+ to run.

First clone the repo, then:
Install the dependencies and start the server.

```sh
$ cd minimum_rupiahs
$ npm install
$ npm start
```

### Running tests

```sh
$ npm test
```
