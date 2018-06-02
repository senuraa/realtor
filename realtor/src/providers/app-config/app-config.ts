import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AppConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
// @Injectable()
// export class AppConfigProvider {

//   constructor(public http: HttpClient) {
//     console.log('Hello AppConfigProvider Provider');
//   }

// }
export let CONFIG = {
  cities: ['Agalawatta', 'Ahungalla', 'Akaravita', 'Akuregoda', 'Alawwa', 'Algama', 'Alubomulla', 'Aluthgama', 'Aluthmawatha', 'Ambagaha Junction', 'Ambagolla', 'Ambalangoda', 'Ambalantota', 'Ambathale', 'Ambepussa', 'Ambillawatta', 'Ambuldeniya', 'Andiambalama', 'Angoda', 'Angulana', 'Anguruwatota', 'Arachchikattuwa', 'Arangala', 'Arawwala', 'Armour Street', 'Artigala', 'Aruggoda', 'Asgiriya', 'Athul Kotte', 'Athurugiriya', 'Attanagalla', 'Attidiya', 'Avissawella', 'Badalgama', 'Baddegana', 'Badulla', 'Bakmegolla', 'Balalla', 'Balangoda', 'Balapitiya', 'Ballapana', 'Balummahara', 'Bambalapitiya', 'Bandaragama', 'Banduragoda', 'Batagama', 'Batapotha', 'Battaramulla', 'Batuwandara', 'Batuwatha', 'Beliatta', 'Bellantota', 'Bellanvila', 'Bellapitiya', 'Bemmulla', 'Beruwela', 'Biyagama', 'Bokkawala', 'Bokundara', 'Bollegala', 'Bombuwela', 'Bomiriya', 'Bopagama', 'Bopitiya', 'Boralasgamuwa', 'Borella', 'Brahmanagama', 'Bulathkohupitiya', 'Bulugahagoda', 'Buthpitiya', 'Chilaw', 'CMB Kochchikade', 'Colombo - 02', 'Colombo - 03', 'Colombo - 04', 'Colombo - 05', 'Colombo - 06', 'Colombo - 07', 'Colombo - 15', 'Colpetty', 'Dagonna', 'Dahapla mawatha', 'Dalugama', 'Dalupotha', 'Dalupotha - Negombo', 'Dambadeniya', 'Dambara', 'dambulla', 'Dandugama', 'Dankotuwa', 'Danovita', 'Dehiowita', 'Dehiwela', 'Dekatana', 'Delatura', 'Delgoda', 'Delkande', 'Delpe', 'Dematagoda', 'Depanama', 'Dewalapola', 'Divulapitiya', 'Diyagama', 'Dodangoda', 'Dompe', 'Doranagoda', 'Dungalpitiya', 'E - kala', 'Eheliyagoda', 'Ekala Millenium City', 'Elakanda', 'Eldeniya', 'Elvitigala', 'Embuldeniya', 'Enderamulla', 'Epitawala', 'Erawalla', 'Eriyawetiya', 'Eswatta', 'Ethagama', 'Ethul Kotte', 'Fort', 'Galagedara', 'Galkanda', 'Galle', 'Galwana', 'Gampaha', 'Gampola', 'Ganemulla', 'Gatahaththa', 'Gemunupura', 'Getaheththa', 'Giriulla', 'Godagama', 'Gonaduwa', 'Gonahena', 'Gonapola', 'Gonawala', 'Gorakadeniya', 'Gorakana', 'Gorakapitiya', 'Gorakapola', 'Gorokgoda', 'Gothami Road', 'Gothatuwa', 'Grandpass', 'Habarakada', 'Hadapangoda', 'Haggalla', 'Halpita', 'Hanguranketha', 'Hanwella', 'Havlock Place', 'Hedigama', 'Hemathgama', 'Hemmathagama', 'Henagama', 'Hendala', 'Hettirippuwa', 'Hikkaduwa', 'Himbutana', 'Hirana', 'Hiripitiya', 'Hokandara', 'Homagama', 'Hondella', 'Honnattara', 'Horana', 'Horape', 'Hunupitiya', 'IDH', 'Imbulgoda', 'Induruwa', 'Ingiriya', 'Ja - ela', 'Jaburaliya', 'Jalthara', 'Jawatte', 'Kadawatha', 'Kadirana', 'Kadugannawa', 'Kaduwela', 'Kahanthota', 'Kahathuduwa', 'Kalagedihena', 'Kalalgoda', 'Kalamulla', 'Kalapaluwawa', 'Kaleliya', 'Kaluaggala', 'Kalubowila', 'Kaludawela', 'Kalutara', 'Kandana', 'Kanduboda', 'Kandy', 'Karagampitiya', 'Karandeniya', 'Karawanella', 'Katana', 'Kataragama', 'Kattuwa', 'Katubedda', 'katugastota', 'Katukurunda', 'Katunayaka', 'katuneriya', 'Katuwawala', 'Kawdana', 'Kegalle', 'Kelanimulla', 'Kelaniya', 'Keragala', 'Kerawalapitiya', 'Kesbewa', 'Keselhenawa', 'Keselwatta', 'Kimbulapitiya', 'Kindelpitiya', 'Kinigama', 'Kiribathgoda', 'Kirillawela', 'Kirimatiyana', 'Kirindiwela', 'Kiriwattuduwa', 'Kirulapona', 'Kochchikade', 'Kohilawatta', 'Kohuwala', 'Kolonnawa', 'Koralaima', 'Koralawella', 'Korase', 'Korathota', 'Kosetedeniya', 'Kosgama', 'Koswatha', 'Kotadeniyawa', 'Kotahena', 'Kothalawala', 'Kotikawatta', 'Kottawa', 'Kotte', 'Kotugoda', 'Kudamaduwa', 'Kuliyapitiya', 'Kurana', 'Kurunegala', 'Liyanagemulla', 'Liyenagoda', 'Lunuwila', 'Mabima', 'Mabola', 'Madagampitiya', 'Madampe', 'madamulla', 'Madapatha', 'Madelgamuwa', 'Madinnagoda', 'Madiwela', 'Magalegoda', 'Magammana', 'Maggona', 'MahaInduruwa', 'Mahabage', 'Mahakanda', 'Mahara', 'Maharachchimulla', 'Maharagama', 'Mahawewa', 'Mahena', 'Makandana', 'Makandura', 'Makewita', 'Makola', 'Makuludoowa', 'Makumbura', 'Malabe', 'Mallehewa', 'Malwana', 'Mambulgoda', 'Mandawala', 'Maradagahamulla', 'Maradana', 'Marassana', 'Marawila', 'Matale', 'Matara', 'Mathammana', 'Maththegama', 'Matiyagane', 'Mattakkuliya', 'Mattegoda', 'Matugama', 'Mawanella', 'Mawaramandiya', 'Mawathagama', 'Mawathgama', 'Medamahanuwara', 'Meegahawatte', 'Meegoda', 'Meepa', 'Meethotamulla', 'Minuwangoda', 'Mirigama', 'Mirihana', 'Miriswatta', 'Modara', 'Molagoda', 'Moragahahena', 'Moragasmulla', 'Moraketiya', 'Moratuwa', 'Moronthuduwa', 'Mt.Lavinia', 'Muddaragama', 'Mulleriyawa', 'Munnessaram', 'Naiwala', 'Nakandapola', 'Nakkawatta', 'Nalluruwa', 'Narahenpita', 'Narammala', 'Naranwala', 'Nattandiya', 'Navinna', 'Nawagamuwa', 'Nawala', 'Nawalamulla', 'Nawalapitiya', 'Nedagamuwa', 'Nedimala', 'Neelammahara', 'Negombo', 'Nelundeniya', 'Neluwa', 'Nikaweratiya', 'Nilpanagoda', 'Nitambuwa', 'Niwandama', 'Nugegoda', 'Opatha', 'Oruwala', 'Padukka', 'Pagoda', 'Palanwatta', 'Palathota', 'Pallewela', 'Pamankada', 'Pamunugama', 'Pamunuwa', 'Panadura', 'Panagoda', 'Pannala', 'Pannipitiya', 'Papiliyawala', 'Park Road', 'Pasyala', 'Pattiya Junction', 'Payagala', 'Peellawatta', 'Pelawatte', 'Peliyagoda', 'Pepiliyana', 'Periyamulla', ' Negombo', 'Pethiyagoda', 'Pettah', 'Pilimathalawa', 'Piliyandala', 'Pinwatta', 'Pirivan Junction', 'Pitadeniya', 'Pitipana', 'Pitipana', 'Pitta Kotte', 'Pittugala', 'Polgahawela', 'Polgasowita', 'Polgolla', 'Polhengoda', 'Polwatta', 'Poruwadanda', 'Pothupitiya', 'Pugoda', 'Punchi Borella', 'Puwakwatiya', 'Radawana', 'Raddoluwa', 'Ragalkanda', 'Ragama', 'Raigama', 'Rajagiriya', 'Rambukkana', 'Ranala', 'Ranmuthugala', 'Ranpokunagama', 'Rathambale', 'Rathnapura', 'Rathupaswala', 'Ratmalana', 'Rattanapitiya', 'Renuka hotel', 'Ruhunupura', 'Rukattana', 'Rukmalgama', 'Ruwanwella', 'Sapugaskande', 'Seeduwa', 'Siddamulla', 'Siyambalagoda', 'Siyambalape', 'Soysapura', 'Teldeniya', 'Thalagala', 'Thalagama', 'Thalahena', 'Thalapathpitiya', 'Thalawathugoda', 'Thalwilla', 'Thanthirimulla', 'Thibbotugoda', 'Thihariya', 'Thimbirigasyaya', 'Thorana Junction', 'Thummodara', 'Thuththiripitiya', 'Torrington', 'Tudella', 'Udahamulla', 'Udammita', 'Udugampola', 'Udupila', 'Uduwana', 'Uggalboda', 'Unawatuna', 'Urapola', 'Uswetakeiyawa', 'Valipillawa', 'Veyangoda', 'Vihara Mawatha', 'Wadduwa', 'Waga', 'Walasgala', 'Walipillawa', 'Walpitamulla', 'Walpola', 'Wanawasala', 'Wandurawa', 'Waragoda', 'Warakapola', 'Waskaduwa', 'Watareka', 'Wathupitiwala', 'Wathurugama', 'Wattala', 'Wattegama', 'Weboda', 'Welikanna', 'Welimada', 'Welipenna', 'Welipillewe', 'Welisara', 'Welivita', 'Weliweriya', 'Wellampitiya', 'Wellawatte', 'Wennappuwa', 'Werahara', 'Weuda', 'Wewalduwa', 'Weweldeniya', 'Wigoda', 'Wijerama', 'Yagodamulla', 'Yakkaduwa', 'Yakkala', 'Yalagala', 'Yatiyana', 'Yogiyana']
}
