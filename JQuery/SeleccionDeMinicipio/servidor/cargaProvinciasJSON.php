<?php

$provincias["1"] = "Álava/Araba";
$provincias["2"] = "Albacete";
$provincias["3"] = "Alicante/Alacant";
$provincias["4"] = "Almería";
$provincias["33"] = "Asturias";
$provincias["5"] = "Ávila";
$provincias["6"] = "Badajoz";
$provincias["7"] = "Balears (Illes)";
$provincias["8"] = "Barcelona";
$provincias["9"] = "Burgos";
$provincias["10"] = "Cáceres";
$provincias["11"] = "Cádiz";
$provincias["39"] = "Cantabria";
$provincias["12"] = "Castellón/Castelló";
$provincias["51"] = "Ceuta";
$provincias["13"] = "Ciudad Real";
$provincias["14"] = "Córdoba";
$provincias["15"] = "Coruña (A)";
$provincias["16"] = "Cuenca";
$provincias["17"] = "Girona";
$provincias["18"] = "Granada";
$provincias["19"] = "Guadalajara";
$provincias["20"] = "Guipúzcoa/Gipuzkoa";
$provincias["21"] = "Huelva";
$provincias["22"] = "Huesca";
$provincias["23"] = "Jaén";
$provincias["24"] = "León";
$provincias["27"] = "Lugo";
$provincias["25"] = "Lleida";
$provincias["28"] = "Madrid";
$provincias["29"] = "Málaga";
$provincias["52"] = "Melilla";
$provincias["30"] = "Murcia";
$provincias["31"] = "Navarra";
$provincias["32"] = "Ourense";
$provincias["34"] = "Palencia";
$provincias["35"] = "Palmas (Las)";
$provincias["36"] = "Pontevedra";
$provincias["26"] = "Rioja (La)";
$provincias["37"] = "Salamanca";
$provincias["38"] = "Santa Cruz de Tenerife";
$provincias["40"] = "Segovia";
$provincias["41"] = "Sevilla";
$provincias["42"] = "Soria";
$provincias["43"] = "Tarragona";
$provincias["44"] = "Teruel";
$provincias["45"] = "Toledo";
$provincias["46"] = "Valencia/València";
$provincias["47"] = "Valladolid";
$provincias["48"] = "Vizcaya/Bizkaia";
$provincias["49"] = "Zamora";
$provincias["50"] = "Zaragoza";



foreach($provincias as $codigo => $nombre) {
  $elementos_json[] = "\"$codigo\": \"$nombre\"";
}

echo "{".implode(",", $elementos_json)."}"

?>
