//A palindromic number reads the same both ways.The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.

using System.Linq;

bool IsPalindromic(string value)
{
    string reverse = new string(value.ToCharArray().Reverse().ToArray());
    return value == reverse;
}

int max = 0;

for(int i = 100; i < 1000; i++)
{
	for(int j = 100; j < 1000; j++)
	{
		if(i * j > max && IsPalindromic((i * j).ToString()))
		{
			max = i * j;
		}
	}
}

Console.WriteLine(max);
//906609