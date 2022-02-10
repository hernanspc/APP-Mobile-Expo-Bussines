const transformDateFormat = (date: string) => {
    if (date) {
        const dateFormat = date.split('T')[0].split('-').reverse().join('/');
        return dateFormat;
    } else {
        return 'dateInvalid';
    }
};

export default transformDateFormat;
