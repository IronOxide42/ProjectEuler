/*
The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Let us list the factors of the first seven triangle numbers:

 1: 1
 3: 1,3
 6: 1,2,3,6
10: 1,2,5,10
15: 1,3,5,15
21: 1,3,7,21
28: 1,2,4,7,14,28
We can see that 28 is the first triangle number to have over five divisors.

What is the value of the first triangle number to have over five hundred divisors?
*/

List<long> GetDivisors(long dividend)
{
    List<long> divisors = new List<long>();
    for(long i=1; i < Math.Sqrt(dividend); ++i)
    {
        if(dividend % i == 0)
        {
            divisors.Add(i);
        }
    }
    return divisors;
}
long GetDivisorsCount(long dividend)
{
    long divisors = 0;

    for(long i=1; i < Math.Sqrt(dividend); ++i)
    {
        if(dividend % i == 0)
        {
            ++divisors;
        }
    }
    return divisors;
}

long GetTriangleNumber(long index) =>
    (index <= 1 ? 1 : (index + GetTriangleNumber(index-1)));

long GetTriangleNumberWith(long factors) =>
    GetTriangleNumberWith(factors,1);

long GetTriangleNumberWith(long factors, long index) =>
    (GetDivisorsCount(GetTriangleNumber(index)) > factors)
        ? GetTriangleNumber(index)
        : GetTriangleNumberWith(factors, index+1);

/*do
{
    ++candidateIndex;
    Console.WriteLine(candidateIndex + ": " + GetTriangleNumber(candidateIndex));
}while(GetDivisorsCount(GetTriangleNumber(candidateIndex)) <= 500);*/

Console.WriteLine(GetTriangleNumberWith(1));