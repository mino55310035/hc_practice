while True:
    try:
        line1 = input().split(",")
        list_x = [int(x) for x in line1]
        if all(3 <= x <= 5 for x in list_x) and len(list_x) == 18:
            break
        else:
            print("正しく入力してください")
    except:
        print("正しく入力してください")

while True:
    try:
        line2 = input().split(",")
        list_y = [int(y) for y in line2]
        if all(1 <= y for y in list_y) and len(list_y) == 18:
            break
        else:
            print("正しく入力してください")
    except:
        print("正しく入力してください")

result = []
for i in range(18):
    if list_x[i] == 3:
        if list_x[i] < list_y[i] and list_y[i] - list_x[i] == 1:
            result.append("ボギー")
        elif list_x[i] < list_y[i]:
            result.append(f"{list_y[i]-list_x[i]}ボギー")
        elif list_x[i] - list_y[i] == 0:
            result.append("パー")
        elif list_x[i] - list_y[i] == 1:
            result.append("バーディ")
        elif list_x[i] - list_y[i] == 2:
            result.append("ホールインワン")
    elif list_x[i] == 4:
        if list_x[i] < list_y[i] and list_y[i] - list_x[i] == 1:
            result.append("ボギー")
        elif list_x[i] < list_y[i]:
            result.append(f"{list_y[i]-list_x[i]}ボギー")
        elif list_x[i] - list_y[i] == 0:
            result.append("パー")
        elif list_x[i] - list_y[i] == 1:
            result.append("バーディ")
        elif list_x[i] - list_y[i] == 2:
            result.append("イーグル")
        elif list_x[i] - list_y[i] == 3:
            result.append("ホールインワン")
    elif list_x[i] == 5:
        if list_x[i] < list_y[i] and list_y[i] - list_x[i] == 1:
            result.append("ボギー")
        elif list_x[i] < list_y[i]:
            result.append(f"{list_y[i]-list_x[i]}ボギー")
        elif list_x[i] - list_y[i] == 0:
            result.append("パー")
        elif list_x[i] - list_y[i] == 1:
            result.append("バーディ")
        elif list_x[i] - list_y[i] == 2:
            result.append("イーグル")
        elif list_x[i] - list_y[i] == 3:
            result.append("アルバトロス")
        elif list_x[i] - list_y[i] == 4:
            result.append("コンドル")
print(", ".join(result))