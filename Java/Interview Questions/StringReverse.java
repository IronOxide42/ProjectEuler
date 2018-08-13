public class StringReverse {


    public static void main(String[] args) {
        String input = "string";
        String output = new String();

        for(int i = input.length() - 1; i >= 0; --i) {
            char cur = input.charAt(i);
            output += cur;
        }

        System.out.println(output);
    }
}