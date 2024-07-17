let result = [];
for (i = 1; i < 51; i++) {
    let stringValue = i.toString();
    if (stringValue == '3') {
        console.log('짝');
    } else if (stringValue == '6') console.log('짝');
    else {
        console.log(i);
    }
}
