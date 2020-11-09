import { HumidityLevel } from "../components/shared/humidityLevel";
import { LightRequirements } from "../components/shared/lightRequirements";
import { Misting } from "../components/shared/misting";
import { BeginnerLevel } from "../components/shared/beginnerLevel";

// maximum and minimum tempature range for a plant. Currently are set as undefined.
let minTemp: number | undefined = undefined;
let maxTemp: number | undefined = undefined;

//this interface defines each plant in our plants array below
export interface Plant {
  id: number;
  scientific_name: string; // the scientific name for this plant
  common_name: Array<string>; // all the common names for this plant
  humidity_level: HumidityLevel; //how much humidity this plant will require
  light_requirements: LightRequirements; //light that this plant requires
  temp_range: [typeof minTemp, typeof maxTemp]; // optimal tempature range for this plant
  misting: Misting; //if misting the plant is required, if so how often
  beginner_level: BeginnerLevel; // how hard this plant is to keep alive
  img: string; //an image of this plant
  water_schedule: number; //days between waterings
}

// an array of all the plants avaiable for the user to interact with
export const Plants: object = [
  {
    id: 0,
    scientific_name: "strelitzia reginae",
    common_name: ["giant white birds of paradise"],
    humidity_level: HumidityLevel.normal,
    temp_range: [(minTemp = 65), (maxTemp = 80)],
    misting: Misting.once_per_week,
    beginner_level: BeginnerLevel.meduim,
    img:
      "https://cdn.shopify.com/s/files/1/0013/3529/6118/products/Wythe-30-2970.030-WH_Bird-of-Paradise-.jpg?v=1590533419",
    water_schedule: 4,
    light_requirements: [
      LightRequirements.full_sun,
      LightRequirements.part_sun_part_shade,
    ],
  },
  {
    id: 1,
    scientific_name: "ravenea rivularis",
    common_name: ["majesty palm"],
    humidity_level: HumidityLevel.high,
    light_requirements: [
      LightRequirements.part_sun_part_shade,
      LightRequirements.shade,
    ],
    temp_range: [(minTemp = 65), (maxTemp = 80)],
    misting: Misting.once_per_week,
    beginner_level: BeginnerLevel.meduim,
    img: "https://i.ebayimg.com/images/g/hUkAAOSwhQJdA339/s-l640.png",
    water_schedule: 4,
  },
  {
    id: 2,
    scientific_name: "dracaena trifasciata",
    common_name: ["snake plant", "sansevieria", "mother-in-laws"],
    humidity_level: HumidityLevel.low,
    light_requirements: [
      LightRequirements.shade,
      LightRequirements.bight_light,
    ],
    temp_range: [(minTemp = 65), (maxTemp = 85)],
    misting: Misting.once_per_week,
    beginner_level: BeginnerLevel.easy,
    img:
      "https://cdn.shopify.com/s/files/1/0260/3037/4957/products/medium-plant-snake-white-pot_800x.jpg?v=1597702214",
    water_schedule: 14,
  },
  {
    id: 3,
    scientific_name: "ficus lyrata",
    common_name: ["fiddle leaf fig"],
    humidity_level: HumidityLevel.high,
    light_requirements: [
      LightRequirements.part_sun_part_shade,
      LightRequirements.bight_light,
    ],
    temp_range: [(minTemp = 65), (maxTemp = 75)],
    misting: Misting.once_per_week,
    beginner_level: BeginnerLevel.meduim,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSR6seHxhgA9CGL89YnsxIWBofi2mYrd4H0fMTi-hyzv0hW7RCIH3JxljgNn54V-3M7pdafok&usqp=CAc",
    water_schedule: 4,
  },
  {
    id: 4,
    scientific_name: "chlorophytum comosum",
    common_name: ["spider plant"],
    humidity_level: HumidityLevel.normal,
    light_requirements: [
      LightRequirements.part_sun_part_shade,
      LightRequirements.bight_light,
    ],
    temp_range: [(minTemp = 60), (maxTemp = 80)],
    misting: Misting.once_per_week,
    beginner_level: BeginnerLevel.easy,
    img:
      "https://www.mydomaine.com/thmb/jESW-X0scQYLt72ILH4-MJR55LU=/1370x1661/filters:no_upscale():max_bytes(150000):strip_icc()/bloomscape-product-spider-plant-stone-2-aadf20d628e04c988ba462c9b47a2abc.jpg",
    water_schedule: 7,
  },
  {
    id: 5,
    scientific_name: "aloe barbadensis miller",
    common_name: ["aloe vera"],
    humidity_level: HumidityLevel.low,
    light_requirements: [
      LightRequirements.full_sun,
      LightRequirements.part_sun_part_shade,
    ],
    temp_range: [(minTemp = 50), (maxTemp = 85)],
    misting: Misting.never,
    beginner_level: BeginnerLevel.easy,
    img:
      "https://www.trees.com/sites/default/files/field/image/Aloe-vera-in-pot.jpg",
    water_schedule: 21,
  },
  {
    id: 6,
    scientific_name: "crassula ovata",
    common_name: ["jade"],
    humidity_level: HumidityLevel.low,
    light_requirements: [
      LightRequirements.full_sun,
      LightRequirements.part_sun_part_shade,
    ],
    temp_range: [(minTemp = 55), (maxTemp = 75)],
    misting: Misting.never,
    beginner_level: BeginnerLevel.easy,
    img:
      "https://www.trees.com/sites/default/files/field/image/jade-plant_0.jpg",
    water_schedule: 24,
  },
  {
    id: 7,
    scientific_name: "hedera helix",
    common_name: ["english ivy", "common ivy"],
    humidity_level: HumidityLevel.high,
    light_requirements: [
      LightRequirements.shade,
      LightRequirements.part_sun_part_shade,
    ],
    temp_range: [(minTemp = 50), (maxTemp = 65)],
    misting: Misting.once_per_week,
    beginner_level: BeginnerLevel.meduim,
    img:
      "https://netrinoimages.s3.eu-west-2.amazonaws.com/2018/03/23/504292/274593/hedera_helix_wonder_long_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2876893_o.jpg",
    water_schedule: 4,
  },
  {
    id: 8,
    scientific_name: "scindapsus pictus",
    common_name: ["silvery ann pothos", "satin pothos"],
    humidity_level: HumidityLevel.normal,
    light_requirements: [
      LightRequirements.shade,
      LightRequirements.part_sun_part_shade,
    ],
    temp_range: [(minTemp = 65), (maxTemp = 85)],
    misting: Misting.once_per_week,
    beginner_level: BeginnerLevel.easy,
    img:
      "https://cdn.shopify.com/s/files/1/1637/3125/products/FoliaCollective-Scindapsus-pictus-argreyus-6in-detail-web_1200x1800.jpg?v=1584981419",
    water_schedule: 8,
  },
  {
    id: 9,
    scientific_name: "ficus elastica",
    common_name: ["rubber plant", "rubber bush", "rubber tree"],
    humidity_level: HumidityLevel.normal,
    light_requirements: [LightRequirements.part_sun_part_shade],
    temp_range: [(minTemp = 50), (maxTemp = 85)],
    misting: Misting.once_per_week,
    beginner_level: BeginnerLevel.easy,
    img:
      "https://cdn.shopify.com/s/files/1/0670/6853/products/IMG_6205_24x24.jpg?v=1589839772",
    water_schedule: 21,
  },
  {
    id: 10,
    scientific_name: "sedum morganianum",
    common_name: ["burro's tail", "donkey's tail"],
    humidity_level: HumidityLevel.low,
    light_requirements: [LightRequirements.part_sun_part_shade],
    temp_range: [(minTemp = 65), (maxTemp = 75)],
    misting: Misting.never,
    beginner_level: BeginnerLevel.easy,
    img:
      "https://img.crocdn.co.uk/images/products2/pl/20/00/03/44/pl2000034457.jpg?width=940&height=940",
    water_schedule: 21,
  },
  {
    id: 11,
    scientific_name: "mammillaria crinita",
    common_name: ["mexican pincushion cactus"],
    humidity_level: HumidityLevel.low,
    light_requirements: [
      LightRequirements.full_sun,
      LightRequirements.part_sun_part_shade,
    ],
    temp_range: [(minTemp = 50), (maxTemp = 75)],
    misting: Misting.never,
    beginner_level: BeginnerLevel.easy,
    img: "https://i.ebayimg.com/images/g/0lsAAOSwTQtaGIEU/s-l400.jpg",
    water_schedule: 40,
  },
  {
    id: 12,
    scientific_name: "haworthia fasciata",
    common_name: ["zebra plant"],
    humidity_level: HumidityLevel.low,
    light_requirements: [
      LightRequirements.full_sun,
      LightRequirements.part_sun_part_shade,
    ],
    temp_range: [(minTemp = 65), (maxTemp = 80)],
    misting: Misting.never,
    beginner_level: BeginnerLevel.meduim,
    img:
      "https://cdn.shopify.com/s/files/1/0350/5665/products/5N8A7534_web_c0f3f5cc-d3d0-46f5-9d99-9079daadceab_600x600.jpg?v=1575498364",
    water_schedule: 21,
  },
  {
    id: 13,
    scientific_name: "agave ovatifolia",
    common_name: ["whale’s tongue agave"],
    humidity_level: HumidityLevel.low,
    light_requirements: [
      LightRequirements.full_sun,
      LightRequirements.part_sun_part_shade,
    ],
    temp_range: [(minTemp = undefined), (maxTemp = undefined)],
    misting: Misting.never,
    beginner_level: BeginnerLevel.easy,
    img:
      "https://e54055a024bc6fb58d47-f7df714a3b816a175961a96ef2278d84.ssl.cf2.rackcdn.com/14425-Agave-Ovatifolia--Frosty-Blue.jpg",
    water_schedule: 21,
  },
  {
    id: 14,
    scientific_name: "parodia magnifica",
    common_name: ["ball cactus"],
    humidity_level: HumidityLevel.low,
    light_requirements: LightRequirements.full_sun,
    temp_range: [(minTemp = 40), (maxTemp = 85)],
    misting: Misting.never,
    beginner_level: BeginnerLevel.easy,
    img:
      "https://i.pinimg.com/originals/6d/41/6c/6d416ca3ba039ed00d4a5140930eb080.jpg",
    water_schedule: 21,
  },
  {
    id: 15,
    scientific_name: "epipremnum aureum",
    common_name: ["golden pothos"],
    humidity_level: HumidityLevel.normal,
    light_requirements: [LightRequirements.shade],
    temp_range: [(minTemp = 70), (maxTemp = 90)],
    misting: Misting.once_per_week,
    beginner_level: BeginnerLevel.easy,
    img:
      "https://www.almanac.com/sites/default/files/image_nodes/pothos_usmee_ss-crop.jpg",
    water_schedule: 7,
  },
];
