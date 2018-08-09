public class FizzBuzz {
    public static String Play(int n) {
        return (n % 3 == 0) ? "Fizz" + PlayHelper(n/3)
            : (n % 5 == 0) ? "Buzz" + PlayHelper(n/5)
            : "";
    }

    public static void main(String[] args) {
        for(int i = 1; i <= 100; ++i) {
            System.out.println(Play(i) ?? i);
        }
    }
}

/*
public class FizzBuzz {
    public static void main(String[] args) {
        for(int i = 1; i <= 100; ++i) {
            String output = "";

            if(i % 3 == 0) output += "Fizz";
            if(i % 5 == 0) output += "Buzz";

            System.out.println(output=="" ? i : output);
        }
    }
}
*/

/*
public class FizzBuzz {
    private static boolean Divides(int n, int divisor) {
        return n % divisor == 0;
    }

    private static String FizzBuzz(int n, String[] couples) {
        String output = "";

        for(int i = 1; i <= couples.length-1; ++i) {
            if(Divides(n, i) && couples[i] != null) {
                output += couples[i];
            }
        }

        if(output == "") {
            output = Integer.toString(n);
        }

        return output;
    }

    public static void main(String[] args) {
        String[] couples = new String[10];
        couples[3] = "Fizz";
        couples[5] = "Buzz";
        couples[7] = "Quop";


        for(int i = 1; i <= 100; ++i) {
            System.out.println(FizzBuzz(i, couples));
        }
    }
}
*/