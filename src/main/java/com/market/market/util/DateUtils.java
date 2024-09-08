import java.time.Duration;
import java.time.LocalDateTime;
import java.time.Period;

public class DateUtils {

    public static String calculateTimeAgo(LocalDateTime dateTime) {
        LocalDateTime now = LocalDateTime.now();

        Period period = Period.between(dateTime.toLocalDate(), now.toLocalDate());
        if (period.getYears() > 0) {
            return period.getYears() + "년 전";
        }
        if (period.getMonths() > 0) {
            return period.getMonths() + "달 전";
        }
        if (period.getDays() > 0) {
            return period.getDays() + "일 전";
        }

        Duration duration = Duration.between(dateTime, now);
        if (duration.toHours() > 0) {
            return duration.toHours() + "시간 전";
        }
        if (duration.toMinutes() > 0) {
            return duration.toMinutes() + "분 전";
        }

        return "방금 전";
    }
}
