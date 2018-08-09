public class Problem002 {
    private static boolean isEven(int n) {
        return (n % 2 == 0);
    }

    public static void main(String[] args) {
        int prev = 1;
        int curr = 2;
        int sum = 0;

        while(curr < 4000000) {
            if(isEven(curr)) {
                sum += curr;
            }

            int temp = curr;
            curr = prev + curr;
            prev = temp;
        }

        System.out.println(sum);
    }
}