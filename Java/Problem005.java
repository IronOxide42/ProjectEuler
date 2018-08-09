public class Problem005 {
    public static boolean isPrime(int n) {
        if(n == 1) return false;
        if(n == 2) return true;
        for(int i = 2; i < Math.sqrt(n); ++i) {
            if(n % i == 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        int max = 20;
        int cur = 1;

        for(int i = 1; i <= max; ++i) {
            if(!isPrime(i)) {
                cur *= i;
            }
        }

        System.out.println(cur);
    }
}