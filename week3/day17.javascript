<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript Operators</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">

    <h1>JavaScript Operators</h1>
    <p>
        Arithmetic operators do the math you'd expect. Assignment operators are
        shortcuts that combine "do the math" + "save the result back into the same variable".
    </p>

    <h2>ARITHMETIC</h2>
    <div class="operators">
        <div class="box">10 + 3 → 13</div>
        <div class="box">10 - 3 → 7</div>
        <div class="box">10 * 3 → 30</div>
        <div class="box">10 / 3 → 3.33</div>
        <div class="box">10 % 3 → 1</div>
        <div class="box">10 ** 2 → 100</div>
    </div>

    <h2>ASSIGNMENT SHORTCUTS</h2>
    <div class="operators">
        <div class="box">x += 5 → x = x + 5</div>
        <div class="box">x -= 5 → x = x - 5</div>
        <div class="box">x *= 2 → x = x × 2</div>
        <div class="box">x /= 2 → x = x / 2</div>
        <div class="box">x++ → x = x + 1</div>
        <div class="box">x-- → x = x - 1</div>
    </div>

    <div class="code-section">
<pre>
let cartTotal = 0;

const itemPrice = 499;
const quantity = 3;
const gstRate = 0.18; // 18% GST

cartTotal += itemPrice * quantity;

const gstAmount = cartTotal * gstRate;
const finalTotal = cartTotal + gstAmount;

console.log(
`Cart total: ₹${cartTotal},
GST: ₹${gstAmount.toFixed(2)},
Final: ₹${finalTotal.toFixed(2)}`
);

// Cart total: ₹1497
// GST: ₹269.46
// Final: ₹1766.46
</pre>
    </div>

</div>

</body>
</html>