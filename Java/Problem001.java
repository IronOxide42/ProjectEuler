public class Problem001 {

    private static boolean isMultipleOfThree(int n) {
        return (n % 3 == 0);
    }

    private static boolean isMultipleOfFive(int n) {
        return (n % 5 == 0);
    }

    public static void main(String[] args) {

        int sum = 0;

        for(int i = 0; i < 1000; ++i) {
            if(isMultipleOfThree(i) || isMultipleOfFive(i)) {
                sum += i;
            }
        }

        System.out.println(sum);
    }
}