export const findWeeksFromPresentDate = (date) => {
    const d1 = Date.parse(date);
    const d2 = new Date();
    const days = Math.round((d2 - d1) / (24 * 60 * 60 * 1000));
    const weeks = Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));


    if(days >= 0 && days <= 1)
        return "Today";
    else if(days > 1 && days <= 2)
        return "Yesterday";
    else if(days > 2 && days < 7)
        return parseInt(days) + "d";
    else if(days >= 7)
        return parseInt(weeks)+"w";
}

export const getFormattedDate = (date) => {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return month + '/' + day + '/' + year;
}
