true == function () {

    // darsad kharid haghighi = hajme_kharid_haghighi / hajme_kol
    // darsad foroush haghighi = hajme_foroush_haghighi / hajme_kol
    var darsad_kharid__haghighi = (ct).Buy_I_Volume / (tvol);
    var darsad_foroush_haghighi = (ct).Sell_I_Volume / (tvol);

    // pool kharid haghighi = darsad_kharid_haghighi * arzesh_moamelat_rooz
    // pool foroush haghighi = darsad_foroush_haghighi * arzesh_moamelat_rooz
    var pool_kharid__haghighi = darsad_kharid__haghighi * (tval);
    var pool_foroush_haghighi = darsad_foroush_haghighi * (tval);

    // sarane_kharid_haghighi = pool_kharid_haghighi * tedad_kharid_haghighi
    // sarane_foroush_haghighi = pool_foroush_haghighi * tedad_foroush_haghighi
    var sarane_kharid__haghighi_rial = pool_kharid__haghighi / (ct).Buy_CountI;
    var sarane_foroush_haghighi_rial = pool_foroush_haghighi / (ct).Sell_CountI;


    var sarane_kharid__haghighi_milion_toman = Math.round(sarane_kharid__haghighi_rial / 100000) / 100;
    var sarane_foroush_haghighi_milion_toman = Math.round(sarane_foroush_haghighi_rial / 100000) / 100;


    var ghodrat_kharidar_be_foroushande = sarane_kharid__haghighi_rial / sarane_foroush_haghighi_rial;
    var ghodrat_khoshgel = Math.round(ghodrat_kharidar_be_foroushande * 100) / 100;

    if (sarane_kharid__haghighi_milion_toman > 30 && ghodrat_khoshgel > 2) {

        return true;
    }

}()