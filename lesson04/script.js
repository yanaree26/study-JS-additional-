function kakayaToFunction (parametr) {
    if((typeof parametr) != 'string' ) {
        return 'Not a string';
    } else {
        parametr = parametr.trim();
        if (parametr.length > 30) {
            parametr = parametr.substr(0, 29) + "...";
        }
        return parametr;
    }
}

console.log(kakayaToFunction('  123456789012345678901234567890erty   '))