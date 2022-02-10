const transformNumberToCurrency = (value: number) => {
    const formatNumber = (numberToFormat: number) =>
        numberToFormat
            .toFixed(2)
            .replace('.', ',')
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

    if (value >= 0) {
        return `$${formatNumber(value)}`;
    } else {
        return `-$${formatNumber(value * -1)}`;
    }
};

export default transformNumberToCurrency;