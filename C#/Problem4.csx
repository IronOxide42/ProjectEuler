//A palindromic number reads the same both ways.The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.

using System.Linq;

bool IsPalindromic(string value)
{
    string reverse = new string(value.ToCharArray().Reverse().ToArray());
    return value == reverse;
}

int max;

int[] xaxis = new int[1000];
int[] yaxis = new int[1000];
for(int i=0; i < 1000; ++i)
{
    xaxis[i] = i;
    yaxis[i] = i;
}

int[,] products = new int[1000,1000];

//i = xaxis
for (int i = 0; i < 1000; ++i)
{
    //j = yaxis
    for (int j = 0; j < 1000; ++j)
    {
        products[i,j] = xaxis[i] * yaxis[j];
    }
}

foreach(int candidate in products)
{
    if(candidate > max && IsPalindromic(candidate.ToString()))
    {
        max = candidate;
    }
}

Console.WriteLine(max);
//906609