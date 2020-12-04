# filter tsetmc

### قالب کد نویسی

- All TSETMC predefined variable must be enclosed in parentheses.

```
true==function()
{

    //------------write your code------------

}()

```

> if return true , found
>
> if return false, Not found

Exampel:

```
true==function()
{
    var MinPrice=function(){

        var min=[ih][0].PriceMin;
        var ipos;

        for(ipos=0;ipos<21;ipos++)
                if(min>[ih][ipos].PriceMin)
                  min=[ih][ipos].PriceMin;

        return min;
    };

    if((pl)<MinPrice())
    {
        return true;
    }
    else
    {
        return false;
    }
}()
```

### فیلدهای ساده قابل استفاده در فیلتر

```
(l18)           نماد
(l30)           نام
(tno)           تعداد معاملات
(tvol)          حجم معاملات
(tval)          ارزش معاملات
(py)            قیمت دیروز
(pf)            اولین قیمت
(pmin)          کمترین قیمت
(pl)            آخرین قیمت
(plc)           تغییر آخرین قیمت
(plp)           درصد تغییر آخرین قیمت
(pc)            قیمت پایانی
(pcc)           تغییر قیمت پایانی
(pcp)           درصد تغییر قیمت پایانی
(eps)           eps
(pe)            p/e
(tmin)          آستانه مجاز پایین
(tmax)          آستانه مجاز بالا
(z)             تعداد سهام
(mv)            ارزش بازار
(bvol)          حجم مبنا
(cs)            گروه صنعت
```

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
