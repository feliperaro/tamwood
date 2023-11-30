var looping = function(n) {
    var a = 0, b = 1, f = 1;
    for (var i = 0; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
}

looping(10);