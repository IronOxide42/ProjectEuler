//Problem 1 -- Multiples of 3 and 5
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

static bool IsMultipleOf(this int value, int divisor) => (value % divisor == 0);

int sum = 0;
int max = 1000;
List<int> divisors = new List<int>() { 3, 5 };

for(int i = 0; i < max; ++i)
{
    bool qualifies = false;
    foreach(int j in divisors)
    {
        if(i.IsMultipleOf(j))
        {
            qualifies = true;
        }
    }
    if (qualifies)
    {
        sum += i;
    }
    
}

Console.WriteLine(sum);