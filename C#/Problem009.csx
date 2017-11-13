/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

bool IsPythagorean(int a, int b, int c)
{
    return (a*a + b*b == c*c);
}

int value = 1000;

for(int a = 1; a <= value; ++a)
{
    for(int b = 1; b <= value; ++b)
    {
        for(int c = 1; c <= value; ++c)
        {
            if(IsPythagorean(a,b,c) && a+b+c==value)
            {
                Console.WriteLine(a*b*c);
            }
        }
    }
}
//31875000