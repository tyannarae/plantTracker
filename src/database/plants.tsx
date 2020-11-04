export let Plants: {
  id: string;
  scientific_name: string;
  common_name: Array<string>;
  humidity_level: string;
  light_requirements: Array<string>;
  temp_range: Array<number | undefined>;
  misting: string;
  level: number;
  img: string;
  water_schedule: number;
}[] = [
  {
    id: "5f932a5587593e6d5a6904f2",
    scientific_name: "strelitzia reginae",
    common_name: ["giant white birds of paradise"],
    humidity_level: "normal",
    light_requirements: ["full_sun", "part_sun_part_shade"],
    temp_range: [65, 80],
    misting: "once_per_week",
    level: 2,
    img:
      "https://cdn.shopify.com/s/files/1/0013/3529/6118/products/Wythe-30-2970.030-WH_Bird-of-Paradise-10.jpg?v=1590533419",
    water_schedule: 4,
  },
  {
    id: "5f932c5b87593e6d5a6904f",
    scientific_name: "ravenea rivularis",
    common_name: ["majesty palm"],
    humidity_level: "high",
    light_requirements: ["part_sun_part_shade", "shade"],
    temp_range: [65, 80],
    misting: "once_per_week",
    level: 2,
    img: "https://i.ebayimg.com/images/g/hUkAAOSwhQJdA339/s-l640.png",
    water_schedule: 4,
  },
  {
    id: "5f932d9a87593e6d5a6904f4",
    scientific_name: "dracaena trifasciata",
    common_name: ["snake plant", "sansevieria", "mother-in-laws"],
    humidity_level: "low",
    light_requirements: ["shade", "bright_light"],
    temp_range: [65, 85],
    misting: "once_per_week",
    level: 1,
    img:
      "https://cdn.shopify.com/s/files/1/0260/3037/4957/products/medium-plant-snake-white-pot_800x.jpg?v=1597702214",
    water_schedule: 14,
  },
  {
    id: "5f932f4587593e6d5a6904f5",
    scientific_name: "ficus lyrata",
    common_name: ["fiddle leaf fig"],
    humidity_level: "high",
    light_requirements: ["part_sun_part_shade", "bright_light"],
    temp_range: [65, 75],
    misting: "once_per_week",
    level: 2,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSR6seHxhgA9CGL89YnsxIWBofi2mYrd4H0fMTi-hyzv0hW7RCIH3JxljgNn54V-3M7pdafok&usqp=CAc",
    water_schedule: 10,
  },
  {
    id: "55f933f9187593e6d5a6904f7",
    scientific_name: "chlorophytum comosum",
    common_name: ["spider plant"],
    humidity_level: "normal",
    light_requirements: ["part_sun_part_shade", "bright_light"],
    temp_range: [60, 80],
    misting: "once_per_week",
    level: 1,
    img:
      "https://www.mydomaine.com/thmb/jESW-X0scQYLt72ILH4-MJR55LU=/1370x1661/filters:no_upscale():max_bytes(150000):strip_icc()/bloomscape-product-spider-plant-stone-2-aadf20d628e04c988ba462c9b47a2abc.jpg",
    water_schedule: 7,
  },
  {
    id: "5f9341a687593e6d5a6904f8",
    scientific_name: "aloe barbadensis miller",
    common_name: ["aloe vera"],
    humidity_level: "low",
    light_requirements: ["full_sun", "part_sun_part_shade"],
    temp_range: [50, 85],
    misting: "never",
    level: 1,
    img:
      "https://www.trees.com/sites/default/files/field/image/Aloe-vera-in-pot.jpg",
    water_schedule: 21,
  },
  {
    id: "5f93424487593e6d5a6904f9",
    scientific_name: "crassula ovata",
    common_name: ["jade"],
    humidity_level: "low",
    light_requirements: ["full_sun", "part_sun_part_shade"],
    temp_range: [55, 75],
    misting: "never",
    level: 1,
    img:
      "https://www.trees.com/sites/default/files/field/image/jade-plant_0.jpg",
    water_schedule: 24,
  },
  {
    id: "5f93431987593e6d5a6904fa",
    scientific_name: "hedera helix",
    common_name: ["english ivy", "common ivy"],
    humidity_level: "high",
    light_requirements: ["shade", "part_sun_part_shade"],
    temp_range: [50, 65],
    misting: "once_per_week",
    level: 2,
    img:
      "https://netrinoimages.s3.eu-west-2.amazonaws.com/2018/03/23/504292/274593/hedera_helix_wonder_long_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2876893_o.jpg",
    water_schedule: 4,
  },
  {
    id: "5f9345de87593e6d5a6904fb",
    scientific_name: "scindapsus pictus",
    common_name: ["silvery ann pothos", "satin pothos"],
    humidity_level: "normal",
    light_requirements: ["shade", "part_sun_part_shade"],
    temp_range: [65, 85],
    misting: "once_per_week",
    level: 1,
    img:
      "https://cdn.shopify.com/s/files/1/1637/3125/products/FoliaCollective-Scindapsus-pictus-argreyus-6in-detail-web_1200x1800.jpg?v=1584981419",
    water_schedule: 8,
  },
  {
    id: "5f9346e487593e6d5a6904fc",
    scientific_name: "ficus elastica",
    common_name: ["rubber plant", "rubber bush", "rubber tree"],
    humidity_level: "normal",
    light_requirements: ["part_sun_part_shade"],
    temp_range: [50, 85],
    misting: "once_per_week",
    level: 1,
    img:
      "https://cdn.shopify.com/s/files/1/0670/6853/products/IMG_6205_1024x1024.jpg?v=1589839772",
    water_schedule: 21,
  },
  {
    id: "5f9347b587593e6d5a6904fd",
    scientific_name: "sedum morganianum",
    common_name: ["burro's tail", "donkey's tail"],
    humidity_level: "low",
    light_requirements: ["part_sun_part_shade"],
    temp_range: [65, 75],
    misting: "never",
    level: 1,
    img:
      "https://img.crocdn.co.uk/images/products2/pl/20/00/03/44/pl2000034457.jpg?width=940&height=940",
    water_schedule: 21,
  },
  {
    id: "5f9348af87593e6d5a690500",
    scientific_name: "mammillaria crinita",
    common_name: ["mexican pincushion cactus"],
    humidity_level: "low",
    light_requirements: ["full_sun", "part_sun_part_shade"],
    temp_range: [50, 75],
    misting: "never",
    level: 1,
    img: "https://i.ebayimg.com/images/g/0lsAAOSwTQtaGIEU/s-l400.jpg",
    water_schedule: 40,
  },
  {
    id: "5f93494c87593e6d5a690501",
    scientific_name: "haworthia fasciata",
    common_name: ["zebra plant"],
    humidity_level: "low",
    light_requirements: ["full_sun", "part_sun_part_shade"],
    temp_range: [65, 80],
    misting: "never",
    level: 2,
    img:
      "https://cdn.shopify.com/s/files/1/0350/5665/products/5N8A7534_web_c0f3f5cc-d3d0-46f5-9d99-9079daadceab_600x600.jpg?v=1575498364",
    water_schedule: 21,
  },
  {
    id: "5f934a0b87593e6d5a690502",
    scientific_name: "agave ovatifolia",
    common_name: ["whale’s tongue agave"],
    humidity_level: "low",
    light_requirements: ["full_sun", "part_sun_part_shade"],
    temp_range: [undefined],
    misting: "never",
    level: 1,
    img:
      "https://e54055a024bc6fb58d47-f7df714a3b816a175961a96ef2278d84.ssl.cf2.rackcdn.com/14425-Agave-Ovatifolia--Frosty-Blue.jpg",
    water_schedule: 21,
  },
  {
    id: "5f934aa187593e6d5a690503",
    scientific_name: "parodia magnifica",
    common_name: ["ball cactus"],
    humidity_level: "low",
    light_requirements: ["full_sun"],
    temp_range: [40, 85],
    misting: "never",
    level: 1,
    img:
      "https://i.pinimg.com/originals/6d/41/6c/6d416ca3ba039ed00d4a5140930eb080.jpg",
    water_schedule: 21,
  },
  {
    id: "5f934b1187593e6d5a690504",
    scientific_name: "epipremnum aureum",
    common_name: ["golden pothos"],
    humidity_level: "medium",
    light_requirements: ["shade"],
    temp_range: [70, 90],
    misting: "once_per_week",
    level: 1,
    img:
      "https://www.almanac.com/sites/default/files/image_nodes/pothos_usmee_ss-crop.jpg",
    water_schedule: 7,
  },
];
