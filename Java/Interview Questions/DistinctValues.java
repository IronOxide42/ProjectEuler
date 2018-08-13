import java.util.ArrayList;

public class DistinctValues {

    public static void main(String[] args) {
        int[] values = new int[]{1, 3, 5, 3, 7, 3, 1, 1, 5};
        ArrayList distinct = new ArrayList();

        for(int value : values) {
            if(!distinct.contains(value)) {
                distinct.add(value);
            }
        }

        System.out.println(distinct);
    }
}