public class Problem003 {
    public static boolean IsPrime(long n) {
        if (n == 1) return false;
        if (n == 2) return true;
        if (n % 2 == 0) return false;

        long boundary = (long)Math.floor((Math.sqrt(n)));

        for( long i = 3; i <= boundary; i += 2) {
            if(n % i == 0) return false;
        }

        return true;
    }

    public static void main(String[] args) {
        long value = 600851475143L;
        long currentCandidate = (long)Math.floor(Math.sqrt(value));

        while(!(value % currentCandidate == 0 && IsPrime(currentCandidate))) {
            --currentCandidate;
        }

        System.out.println(currentCandidate);
    }
}