let rec GetTriangleNumber index =
    if index = 1 then 1
    else index + (GetTriangleNumber (index-1))

