const analyse = (cb, ...args) => {
    // console.log(cb, args)
    const hrstart = process.hrtime();
    const result = cb(...args);
    const hrend = process.hrtime(hrstart);
    console.info('%s, Execution time (hr): %ds %dms', cb.name, hrend[0], hrend[1] / 1000000);
    return result;
};

module.exports = {
    analyse
};