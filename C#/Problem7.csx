/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

//https://stackoverflow.com/a/15743238
bool IsPrime(long number)
{
    if (number <= 1) return false;
    if (number == 2) return true;
    if (number % 2 == 0) return false;

    var boundary = (long)Math.Floor(Math.Sqrt(number));

    for (int i = 3; i <= boundary; i += 2)
    {
        if (number % i == 0) return false;
    }

    return true;
}

int index = 0;
for(int i = 0; true; ++i)
{
    if(IsPrime(i))
    {
        ++index;
    }
    if(index == 10001)
    {
        Console.WriteLine(i);
        break;
    }
}

//104743