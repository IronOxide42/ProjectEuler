public class Problem007 {
    public static boolean isPrime(int n) {
        if(n == 1) return false;
        if(n == 2) return true;
        
        for(int i = 2; i <= Math.sqrt(n); ++i) {
            if(n % i == 0) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        int curValue = 2;
        int curIndex = 1;

        while(curIndex < 10001) {
            do {
                ++curValue;
            } while(!isPrime(curValue));
            ++curIndex;
        }

        System.out.println(curValue);
    }
}