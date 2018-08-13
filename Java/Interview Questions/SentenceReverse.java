public class SentenceReverse {


    public static void main(String[] args) {
        String input = "bob likes dog";
        String output = new String();

        int endIndex = input.length() - 1;

        for(int i = input.length() - 1; i >= 0; --i) {
            if(input.charAt(i) == ' ' || i == 0) {
                if (output.equals("")) {
                    output += input.substring(i+1, endIndex);
                }
                else if (i == 0) {
                    output += " " + input.substring(i, endIndex);
                }
                else {
                    output += input.substring(i, endIndex);
                }
                endIndex = i;
            }
        }

        System.out.println(output);
    }
}