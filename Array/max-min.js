import fs from "fs";

const input = fs.readFileSync(0, "utf8");

function processData(input) {
    const data = input.trim().split(/\s+/).map(Number);

    const n = data[0];
    const arr = data.slice(1, n + 1);

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < n; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }

        if (arr[i] > max) {
            max = arr[i];
        }
    }

    console.log(min, max);
}

processData(input);