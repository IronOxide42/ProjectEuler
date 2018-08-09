public class Problem004 {
    public static boolean isPalindromicNumber(int n) {
        String forward = Integer.toString(n);
        String reverse = "";
        for(int i = forward.length()-1; i >= 0; --i) {
            reverse += forward.charAt(i);
        }
        
        return (forward.equals(reverse));
    }

    public static void main(String[] args) {
        int max = 999;
        int curN = max;
        int curM;
        int product;
        int answer = 0;

        while( curN > 0 ) {
            curM = max;
            while(curM > curN) {
                product = curM * curN;

                if(isPalindromicNumber(product) && product > answer) {
                    answer = product;
                }

                --curM;
            }
            --curN;
        }

        System.out.print(answer);
    }
}