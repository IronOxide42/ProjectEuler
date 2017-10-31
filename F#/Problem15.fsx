let LatticePath width height =
    let rec latticePathHelper width height curValue =
        if (width <= 0L) && (height = 0L) then 1L
        elif (width <= 0L) then (latticePathHelper width (height-1L) (curValue+1L))
        elif (height <= 0L) then (latticePathHelper (width-1L) height (curValue+1L))
        else (latticePathHelper (width-1L) height (curValue+1L)) + (latticePathHelper width (height-1L) (curValue+1L))
    latticePathHelper width height 0L

LatticePath 20L 20L;;