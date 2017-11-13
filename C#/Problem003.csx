//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143 ?

using System;

long value = 600851475143;
long currentCandidate = (long)Math.Floor(Math.Sqrt(value));

//https://stackoverflow.com/a/15743238
public static bool IsPrime(long number)
{
    if (number == 1) return false;
    if (number == 2) return true;
    if (number % 2 == 0) return false;

    var boundary = (long)Math.Floor(Math.Sqrt(number));

    for (int i = 3; i <= boundary; i += 2)
    {
        if (number % i == 0) return false;
    }

    return true;
}

while(!(IsPrime(currentCandidate) && value % currentCandidate == 0))
{
    --currentCandidate;
}

Console.WriteLine(currentCandidate);
//6857