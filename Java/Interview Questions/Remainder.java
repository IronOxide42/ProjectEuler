public class Remainder {

    public static void main(String[] args) {
        int numerator = 26;
        int denominator = 5;

        while(numerator > denominator) {
            numerator -= denominator;
        }

        System.out.println(numerator);
    }
}