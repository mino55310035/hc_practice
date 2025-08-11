import  sys
import datetime

today = datetime.date.today()
today_year = today.year
today_month = today.month

def create_calender(year, month):
    """
　　 Create and display a calendar for the specified year and month.
    :param year: The year for the calendar
    :param month: The month for the calendar
    :return:
    """

    print(f"{month}月　{year}")
    print("月  火  水  木  金  土  日")
    first_day = datetime.date(year, month, 1)
    if month == 12:
        last_day = datetime.date(year + 1, 1, 1) - datetime.timedelta(days=1)
    else:
        last_day = datetime.date(year, month + 1, 1) - datetime.timedelta(days=1)

    week_start = first_day - datetime.timedelta(days=first_day.weekday())
    week_end = last_day + datetime.timedelta(days=6-last_day.weekday())

    current_day = week_start

    while current_day <= week_end:
        for _ in range(7):
            if current_day.month == month:
                print(f"{current_day.day:2d}", end="　")
            else:
                print("  ", end="　")
            current_day += datetime.timedelta(days=1)
        print()



def main():
    if len(sys.argv) == 2 and sys.argv[1] == "-m":
        create_calender(today_year, today_month)
    elif len(sys.argv) == 3 and sys.argv[1] == "-m":
        try:
            current_month = int(sys.argv[2])
            if 1 <= current_month <= 12:
                create_calender(today_year, current_month)
            else:
                print(f"{current_month} is neither a month number (1..12) nor a name")
        except ValueError:
            print(f"{current_month} is neither a month number (1..12) nor a name")

if __name__ == "__main__":
    main()