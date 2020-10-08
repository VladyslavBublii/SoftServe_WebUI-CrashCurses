function random(min, max, delay, callback) {
    setTimeout(min < max
        ? () => callback(undefined, Math.floor(Math.random() * (max - min) + min))
        : () => callback(new Error("Error: min >= max")), delay);
}
random(1, 100, 2000, function (error, data) {
    if (error)
        console.log(error.message);
    else
        console.log(data);
});
random(1000, 100, 3000, function (error, data) {
    if (error)
        console.log(error.message);
    else
        console.log(data);
});