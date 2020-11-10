import { HumidityLevel } from "../components/shared/humidityLevel";
import { LightRequirements } from "../components/shared/lightRequirements";
import { Misting } from "../components/shared/misting";
import { DifficultyLevel } from "../components/shared/difficultyLevel";

//this interface defines each plant in our plants array below
export interface Plant {
  id: number;
  scientificName: string; // the scientific name for this plant
  commonName: Array<string>; // all the common names for this plant
  humidityLevel: HumidityLevel; //how much humidity this plant will require
  lightRequirements: LightRequirements; //light that this plant requires
  minTemp?: number;
  maxTemp?: number;
  misting: Misting; //if misting the plant is required, if so how often
  beginnerLevel: DifficultyLevel; // how hard this plant is to keep alive
  img: string; //an image of this plant
  waterSchedule: number; //days between waterings
}

// an array of all the plants avaiable for the user to interact with
export const Plants: object = [
  {
    id: 0,
    scientificName: "strelitzia reginae",
    commonName: ["giant white birds of paradise"],
    humidityLevel: HumidityLevel.normal,
    minTemp: 65,
    maxTemp: 80,
    misting: Misting.oncePerWeek,
    beginnerLevel: DifficultyLevel.meduim,
    img:
      "https://cdn.shopify.com/s/files/1/0013/3529/6118/products/Wythe-30-2970.030-WH_Bird-of-Paradise-.jpg?v=1590533419",
    waterSchedule: 4,
    lightRequirements: [
      LightRequirements.fullSun,
      LightRequirements.partSunPartShade,
    ],
  },
  {
    id: 1,
    scientificName: "ravenea rivularis",
    commonName: ["majesty palm"],
    humidityLevel: HumidityLevel.high,
    lightRequirements: [
      LightRequirements.partSunPartShade,
      LightRequirements.shade,
    ],
    minTemp: 65,
    maxTemp: 80,
    misting: Misting.oncePerWeek,
    beginnerLevel: DifficultyLevel.meduim,
    img: "https://i.ebayimg.com/images/g/hUkAAOSwhQJdA339/s-l640.png",
    waterSchedule: 4,
  },
  {
    id: 2,
    scientificName: "dracaena trifasciata",
    commonName: ["snake plant", "sansevieria", "mother-in-laws"],
    humidityLevel: HumidityLevel.low,
    lightRequirements: [LightRequirements.shade, LightRequirements.brightLight],
    minTemp: 65,
    maxTemp: 85,
    misting: Misting.oncePerWeek,
    beginnerLevel: DifficultyLevel.easy,
    img:
      "https://cdn.shopify.com/s/files/1/0260/3037/4957/products/medium-plant-snake-white-pot_800x.jpg?v=1597702214",
    waterSchedule: 14,
  },
  {
    id: 3,
    scientificName: "ficus lyrata",
    commonName: ["fiddle leaf fig"],
    humidityLevel: HumidityLevel.high,
    lightRequirements: [
      LightRequirements.partSunPartShade,
      LightRequirements.brightLight,
    ],
    minTemp: 65,
    maxTemp: 75,
    misting: Misting.oncePerWeek,
    beginnerLevel: DifficultyLevel.meduim,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSR6seHxhgA9CGL89YnsxIWBofi2mYrd4H0fMTi-hyzv0hW7RCIH3JxljgNn54V-3M7pdafok&usqp=CAc",
    waterSchedule: 4,
  },
  {
    id: 4,
    scientificName: "chlorophytum comosum",
    commonName: ["spider plant"],
    humidityLevel: HumidityLevel.normal,
    lightRequirements: [
      LightRequirements.partSunPartShade,
      LightRequirements.brightLight,
    ],
    minTemp: 60,
    maxTemp: 80,
    misting: Misting.oncePerWeek,
    beginnerLevel: DifficultyLevel.easy,
    img:
      "https://www.mydomaine.com/thmb/jESW-X0scQYLt72ILH4-MJR55LU=/1370x1661/filters:no_upscale():max_bytes(150000):strip_icc()/bloomscape-product-spider-plant-stone-2-aadf20d628e04c988ba462c9b47a2abc.jpg",
    waterSchedule: 7,
  },
  {
    id: 5,
    scientificName: "aloe barbadensis miller",
    commonName: ["aloe vera"],
    humidityLevel: HumidityLevel.low,
    lightRequirements: [
      LightRequirements.fullSun,
      LightRequirements.partSunPartShade,
    ],
    minTemp: 50,
    maxTemp: 85,
    misting: Misting.never,
    beginnerLevel: DifficultyLevel.easy,
    img:
      "https://www.trees.com/sites/default/files/field/image/Aloe-vera-in-pot.jpg",
    waterSchedule: 21,
  },
  {
    id: 6,
    scientificName: "crassula ovata",
    commonName: ["jade"],
    humidityLevel: HumidityLevel.low,
    lightRequirements: [
      LightRequirements.fullSun,
      LightRequirements.partSunPartShade,
    ],
    minTemp: 55,
    maxTemp: 75,
    misting: Misting.never,
    beginnerLevel: DifficultyLevel.easy,
    img:
      "https://www.trees.com/sites/default/files/field/image/jade-plant_0.jpg",
    waterSchedule: 24,
  },
  {
    id: 7,
    scientificName: "hedera helix",
    commonName: ["english ivy", "common ivy"],
    humidityLevel: HumidityLevel.high,
    lightRequirements: [
      LightRequirements.shade,
      LightRequirements.partSunPartShade,
    ],
    minTemp: 50,
    maxTemp: 65,
    misting: Misting.oncePerWeek,
    beginnerLevel: DifficultyLevel.meduim,
    img:
      "https://netrinoimages.s3.eu-west-2.amazonaws.com/2018/03/23/504292/274593/hedera_helix_wonder_long_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2876893_o.jpg",
    waterSchedule: 4,
  },
  {
    id: 8,
    scientificName: "scindapsus pictus",
    commonName: ["silvery ann pothos", "satin pothos"],
    humidityLevel: HumidityLevel.normal,
    lightRequirements: [
      LightRequirements.shade,
      LightRequirements.partSunPartShade,
    ],
    minTemp: 65,
    maxTemp: 85,
    misting: Misting.oncePerWeek,
    beginnerLevel: DifficultyLevel.easy,
    img:
      "https://cdn.shopify.com/s/files/1/1637/3125/products/FoliaCollective-Scindapsus-pictus-argreyus-6in-detail-web_1200x1800.jpg?v=1584981419",
    waterSchedule: 8,
  },
  {
    id: 9,
    scientificName: "ficus elastica",
    commonName: ["rubber plant", "rubber bush", "rubber tree"],
    humidityLevel: HumidityLevel.normal,
    lightRequirements: [LightRequirements.partSunPartShade],
    minTemp: 50,
    maxTemp: 85,
    misting: Misting.oncePerWeek,
    beginnerLevel: DifficultyLevel.easy,
    img:
      "https://cdn.shopify.com/s/files/1/0670/6853/products/IMG_6205_24x24.jpg?v=1589839772",
    waterSchedule: 21,
  },
  {
    id: 10,
    scientificName: "sedum morganianum",
    commonName: ["burro's tail", "donkey's tail"],
    humidityLevel: HumidityLevel.low,
    lightRequirements: [LightRequirements.partSunPartShade],
    minTemp: 65,
    maxTemp: 75,
    misting: Misting.never,
    beginnerLevel: DifficultyLevel.easy,
    img:
      "https://img.crocdn.co.uk/images/products2/pl/20/00/03/44/pl2000034457.jpg?width=940&height=940",
    waterSchedule: 21,
  },
  {
    id: 11,
    scientificName: "mammillaria crinita",
    commonName: ["mexican pincushion cactus"],
    humidityLevel: HumidityLevel.low,
    lightRequirements: [
      LightRequirements.fullSun,
      LightRequirements.partSunPartShade,
    ],
    minTemp: 50,
    maxTemp: 75,
    misting: Misting.never,
    beginnerLevel: DifficultyLevel.easy,
    img: "https://i.ebayimg.com/images/g/0lsAAOSwTQtaGIEU/s-l400.jpg",
    waterSchedule: 40,
  },
  {
    id: 12,
    scientificName: "haworthia fasciata",
    commonName: ["zebra plant"],
    humidityLevel: HumidityLevel.low,
    lightRequirements: [
      LightRequirements.fullSun,
      LightRequirements.partSunPartShade,
    ],
    minTemp: 65,
    maxTemp: 80,
    misting: Misting.never,
    beginnerLevel: DifficultyLevel.meduim,
    img:
      "https://cdn.shopify.com/s/files/1/0350/5665/products/5N8A7534_web_c0f3f5cc-d3d0-46f5-9d99-9079daadceab_600x600.jpg?v=1575498364",
    waterSchedule: 21,
  },
  {
    id: 13,
    scientificName: "agave ovatifolia",
    commonName: ["whale’s tongue agave"],
    humidityLevel: HumidityLevel.low,
    lightRequirements: [
      LightRequirements.fullSun,
      LightRequirements.partSunPartShade,
    ],
    misting: Misting.never,
    beginnerLevel: DifficultyLevel.easy,
    img:
      "https://e54055a024bc6fb58d47-f7df714a3b816a175961a96ef2278d84.ssl.cf2.rackcdn.com/14425-Agave-Ovatifolia--Frosty-Blue.jpg",
    waterSchedule: 21,
  },
  {
    id: 14,
    scientificName: "parodia magnifica",
    commonName: ["ball cactus"],
    humidityLevel: HumidityLevel.low,
    lightRequirements: LightRequirements.fullSun,
    minTemp: 40,
    maxTemp: 85,
    misting: Misting.never,
    beginnerLevel: DifficultyLevel.easy,
    img:
      "https://i.pinimg.com/originals/6d/41/6c/6d416ca3ba039ed00d4a5140930eb080.jpg",
    waterSchedule: 21,
  },
  {
    id: 15,
    scientificName: "epipremnum aureum",
    commonName: ["golden pothos"],
    humidityLevel: HumidityLevel.normal,
    lightRequirements: [LightRequirements.shade],
    minTemp: 70,
    maxTemp: 90,
    misting: Misting.oncePerWeek,
    beginnerLevel: DifficultyLevel.easy,
    img:
      "https://www.almanac.com/sites/default/files/image_nodes/pothos_usmee_ss-crop.jpg",
    waterSchedule: 7,
  },
];
