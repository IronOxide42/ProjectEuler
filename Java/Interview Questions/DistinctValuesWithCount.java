import java.util.ArrayList;

public class DistinctValuesWithCount {

    public static void main(String[] args) {
        int[] values = new int[]{1, 3, 5, 3, 7, 3, 1, 1, 5};
        ArrayList distinct = new ArrayList();
        ArrayList count = new ArrayList();

        for(int value : values) {
            if(!distinct.contains(value)) {
                distinct.add(value);
                count.add(1);
            }
            else {
                for(int i = 0; i < distinct.size(); ++i) {
                    if(distinct.get(i).equals(value)) {
                        count.set(i, (int)count.get(i) + 1);
                    }
                }
            }
        }

        System.out.println(distinct);
        System.out.println(count);
    }
}