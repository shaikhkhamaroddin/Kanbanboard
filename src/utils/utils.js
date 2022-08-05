export function isAlphaNumeric(str){
    const regex = new RegExp('^[A-Za-z0-9? ,_-]*$', 'g');
    return regex.test(str);
}