function formatDate(date) {
    var date_regex = /^\d{4}\-\d{1,2}\-\d{1,2}$/;

        if (!(date_regex.test(date))) {
            return null;
    }
    else{
    let d = new Date(date),
         month = '' + (d.getMonth() + 1),
         day = '' + d.getDate(),
         year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year,].join('-');
}
}
console.log(formatDate('2014-12-14'));

module.exports= formatDate;