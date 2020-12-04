
true == function () {

    // darsad kharid haghighi = hajme_kharid_haghighi / hajme_kol
    var darsad_kharid_haghighi = (ct).Buy_I_Volume / (tvol);

    // pool kharid haghighi = darsad_kharid_haghighi * arzesh_moamelat_rooz
    var pool_haghighi = darsad_kharid_haghighi * (tval);

    // sarane_kharid_haghighi = pool_haghighi * tedad_kharid_haghighi
    var sarane_kharid_haghighi_rial = pool_haghighi / (ct).Buy_CountI;


    /* 
    ?  (Milion Rial )  =  (Rial) / 1,000,000
    ?  (Milion Toman)  =  (Milion Rial) / 10   [ 1 toma = 10 rial ]

    !  Namayesh ba 2 ragham ashar :
    *       Number = Number * 100
    *       Number = round(Number)
    *       Number = Number * 100
    */
    var sarane_kharid_haghighi_milion_toman = Math.round(sarane_kharid_haghighi_rial / 100000) / 100;

    if (sarane_kharid_haghighi_milion_toman > 15) {

        return true;
    }

}()
