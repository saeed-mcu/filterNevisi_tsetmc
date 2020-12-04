# filter tsetmc

### اطلاعات حقیقی و حقوقی در فیلتر

```
(ct).Buy_CountI             تعداد خریدار حقیقی
(ct).Buy_CountN             تعداد خریدار حقوقی
(ct).Buy_I_Volume           حجم خرید حقیقی
(ct).Buy_N_Volume           حجم خرید حقوقی
(ct).Sell_CountI            تعداد فروشنده حقیقی
(ct).Sell_CountN            تعداد فروشنده حقوقی
(ct).Sell_I_Volume          حجم فروش حقیقی
(ct).Sell_N_Volume          حجم فروش حقوقی
```

### توابع از پیش آماده در فیلتر

```
Math.abs(x)                 Returns the absolute value of x
Math.ceil(x)                Returns x, rounded upwards to the nearest integer
Math.exp(x)                 Returns the value of E^x
Math.floor(x)               Returns x, rounded downwards to the nearest integer
Math.log(x)                 Returns the natural logarithm (base E) of x
Math.max(x,y,z,...,n)       Returns the number with the highest value
Math.min(x,y,z,...,n)       Returns the number with the lowest value
Math.pow(x,y)               Returns the value of x to the power of y
Math.round(x)               Rounds x to the nearest integer
Math.sqrt(x)                Returns the square root of x
```

#### نمایش با ۲ رقم اعشار

```
(Milion Rial ) = (Rial) / 1,000,000
(Milion Toman) = (Milion Rial) / 10 [ 1 Toman = 10 Rial ]

Number = Number * 100
Number = round(Number)
Number = Number * 100
```
