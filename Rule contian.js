
// Transformer must have a asset_type

if ($feature.Asset_Type == null) return false
eles 
return true


// Boundary must have a Name
 
if ($feature.Name == null) return false
eles 
return true


// Get the boundary name from the boundary feature class

var fsBoundary = featuresetbyname($datastore, "Boundary",["Name"])
var fsBoundaryIntersect = intersects(fsBoundary,$feature)
var Boundary = first(fsBoundaryIntersect)

if (Boundary == null) return {"errorMassage": "Boundary not found"}

return Boundary.Name


// calculate unique name

return $feature.Asset_Type+"-"+$feature.Name_Boundary