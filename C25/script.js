let checkPalindrome = string => {

}

/*TESTS FOR AVALIATIONS*/

checkPalindrome('aabaa');
checkPalindrome('abac');
checkPalindrome('a');
checkPalindrome('az');
checkPalindrome('abacaba');
checkPalindrome('z');
checkPalindrome('aaabaaaa');
checkPalindrome('zzzazzazz');

document.addEventListener('mousemove', function(e) {
    const square = document.getElementById('square');
    square.style.left = e.pageX + 'px';
    square.style.top = e.pageY + 'px';
});
