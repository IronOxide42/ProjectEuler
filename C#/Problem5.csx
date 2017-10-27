//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ?

//Brute-force method
bool isDivisibleBy(int dividend, int divisor)
{
    return dividend % divisor == 0;
}

int SmallestMultiple(int[] values)
{
    for(int i=20; true; i+=20)
    {
        bool found = true;
        foreach(int value in values)
        {
            if(!isDivisibleBy(i,value))
            {
                found = false;
                continue;
            }
        }
        if(found)
        {
            return i;
        }
    }
}

int[] values = new int[]{2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20};
int smallestMultiple = SmallestMultiple(values);

Console.WriteLine(smallestMultiple);
//232792560

