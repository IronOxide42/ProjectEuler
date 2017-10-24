//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ?


using System;
using System.Linq;

//https://www.codeproject.com/Articles/465041/Primality-Test
static bool isPrime(this int n)
{
    if (n < 2)
        return false;
    if (n == 2)
        return true;
    if (n % 2 == 0)
        return false;
    for (int i = 3; i < Math.Sqrt(n); i += 2)
    {
        //A number "number" is divisible by another number "i"
        //if the rest of the division of number divided i equals to zero
        if (n % i == 0)
            return false;
    }
    //If no exist a number between 2 and sqrt(number) that divides number
    return true;
}

int[] factors = new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };//,11,12,13,14,15,16,17,18,19,20};


//We do not want primes. We want composites, and primes that divisors of those composites
int[] PrimesIn(int[] values)
{
    return (values.Where(v => isPrime(v))).ToArray();
}

static bool ContainsDivisorFor(this int[] values, int value)
{
    foreach(int v in values)
    {
        if (v % value == 0)
            return true;
    }
    return false;
}

int[] CompositesAndDivisors(int[] values)
{
    return (values.Where(v => (!isPrime(v) || !values.ContainsDivisorFor(v)))).ToArray();
}

int CompositeProduct(int[] values)
{
    int[] QualifiedValues = CompositesAndDivisors(values);
    int product = 1;

    foreach(int value in QualifiedValues)
    {
        product *= value;
    }

    return product;
}

Console.WriteLine(CompositeProduct(factors));