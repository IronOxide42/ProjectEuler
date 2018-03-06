let LatticePathCount = (width, height) => {
    if (width < 0 || height < 0) {
        return -1;
    } else if (width === 0 || height === 0) {
        return 1;
    } else {
        return LatticePathCount(width - 1, height) + LatticePathCount(width, height - 1);
    }
};
