public class Problem010 {
    private static boolean isPrime(long n) {
        if(n == 1) return false;
        if(n == 2) return true;

        for(long i = 2; i <= Math.sqrt(n); ++i) {
            if(n % i == 0) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        long sum = 0;

        for(long i = 1; i < 2000000; ++i){
            if(isPrime(i)) {
                sum += i;
            }
        }

        System.out.println(sum);
    }
}