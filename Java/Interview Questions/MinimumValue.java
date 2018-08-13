public class MinimumValue {


    public static void main(String[] args) {
        int[] list = new int[]{1, 2, 3, 4, 5, 6};
        int minimum = list[0];

        for(int n : list) {
            if(n < minimum) {
                minimum = n;
            }
        }

        System.out.println(minimum);
    }
}