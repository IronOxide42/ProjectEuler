import java.time.LocalDateTime;

public class DateTimeToSeconds {

    public static void main(String[] args) {
        LocalDateTime dt = LocalDateTime.now();

        System.out.println(dt.getSecond());
    } 
}