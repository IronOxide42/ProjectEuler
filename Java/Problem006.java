public class Problem006 {
    private static int sumOfSquares(int n) {
        int sum = 0;

        for(int i = 1; i <= n; ++i) {
            sum += i*i;
        }

        return sum;
    }

    private static int squareOfSums(int n) {
        int sum = 0;

        for(int i = 1; i <= n; ++i) {
            sum += i;
        }

        return sum * sum;
    }
    
    public static void main(String[] args) {
        System.out.println(Math.abs(sumOfSquares(100) - squareOfSums(100)));
    }
}