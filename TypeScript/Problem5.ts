//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ?

const MaxValueIn = values =>
{
	let max = values[0]
	values.forEach(value => {
		if(value > max)
		{
			max = value
		}
	})
	return max
}

const SmallestMultiple = values =>
{
	for(let i = MaxValueIn(values); true; i+=MaxValueIn(values))
	{
		let found = true
		values.forEach(value => {
			if(i % value != 0)
			{
				found = false
			}
		})
		if(found)
		{
			return i
		}
	}
}

const values = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let smallestMultiple = SmallestMultiple(values)

console.log(smallestMultiple)
//232792560