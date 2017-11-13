let rec LatticePath width height =
    if width = 0L || height = 0L then 1L
    else (LatticePath (width-1L) height) + (LatticePath width (height-1L))

printf "%i" (LatticePath 20L 20L)
//137846528820