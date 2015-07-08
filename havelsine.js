
    function findDistance(plat1, plon1,plat2, plon2 )
    {
        var Rm = 3961;
        var Rk = 6373;
        var lat1, lon1, lat2, lon2, dlat, dlon, a, c, dm, dk, mi, km;
 
        lat1 = plat1 * Math.PI / 180;
        lon1 = plon1 * Math.PI / 180;
        lat2 = plat2 * Math.PI / 180;
        lon2 = plon2 * Math.PI / 180;
 
        dlat = lat2 - lat1;
        dlon = lon2 - lon1;
 
        a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);
        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
 
        dm = c * Rm; // mil cinsinden
        dk = c * Rk; // kilometre cinsinden
 
        km = Math.round(dk*Math.pow(10,3))/Math.pow(10,3);
        return(km);
    }
