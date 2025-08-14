import sys

line1 = input().split(",")
par_list = [int(x) for x in line1]
if not all(3 <= x <= 5 for x in par_list) or len(par_list) != 18:
    sys.exit("一行目に誤りがあります")

line2 = input().split(",")
score_list = [int(y) for y in line2]
if not all(1 <= y for y in score_list) or len(score_list) != 18:
    sys.exit("二行目に誤りがあります")

result = []
SCORE_MAP = {
    -4: "コンドル",
    -3: "アルバトロス",
    -2: "イーグル",
    -1: "バーディ",
    0: "パー",
    1: "ボギー"
}

for i in range(18):
    score = score_list[i] - par_list[i]
    if score_list[i] == 1:
        result.append("ホールインワン")
    elif score >= 2:
        result.append(f"{score}ボギー")
    else:
        result.append(SCORE_MAP[score])

print(", ".join(result))
