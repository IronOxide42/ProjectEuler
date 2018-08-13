public class Problem012 {
    private static long numOfDivisors(long n) {
        int count = 1;
        for(long i = 1; i <= n / 2; ++i) {
            if(n % i == 0) {
                ++count;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        
        int index = 0;
        long cur = 0;

        while(numOfDivisors(cur) <= 500) {
            index++;
            cur += index;
        } 
        
        System.out.println(cur);
    }
}