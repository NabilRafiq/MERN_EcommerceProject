const products = [
  {
    name: "PlayStation 5",
    imageUrl:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    description:
      "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020 in Australia, Japan, New Zealand, North America, Singapore, and South Korea, and November 19, 2020 onwards in other major markets except China and India.",
    price: 499,
    countInStock: 15,
  },
  {
    name: "Iphone 12",
    imageUrl:
      "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
    description:
      "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
    price: 1099,
    countInStock: 10,
  },
  {
    name: "Cannon EOS-1D",
    imageUrl:
      "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
    price: 1300,
    countInStock: 5,
  },
  {
    name: "Amazon Alexa",
    imageUrl:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    description:
      "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
    price: 50,
    countInStock: 25,
  },
  {
    name: "Audio Technica Headphones",
    imageUrl:
      "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description:
      "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
    price: 233,
    countInStock: 4,
  },
  {
    name: "JBL FLIP 4",
    imageUrl:
      "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    description:
      "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
    price: 140,
    countInStock: 10,
  },
  {
    name: "MAC",
    imageUrl:
      "https://images.unsplash.com/photo-1527443098650-9c66e4e43424?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description:
      "The new iMac. ... Say hello to the new iMac. ... Testing conducted by Apple in March 2021 using preproduction 24-inch iMac systems with Apple M1 chip",
    price: 1500,
    countInStock: 10,
  },
  {
    name: "MSI 3090",
    imageUrl:
      "https://images.unsplash.com/photo-1621164071312-67bb68821b3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80",
    description:
      "The GeForce RTX 3090 is a big ferocious GPU (BFGPU) with TITAN class performance. It's powered by Ampere—NVIDIA's 2nd gen RTX architecture—doubling down on ray tracing and AI performance with enhanced Ray Tracing (RT) Cores, Tensor Cores, and new streaming multiprocessors",
    price: 1800,
    countInStock: 10,
  },
  {
    name: "Gaming PC",
    imageUrl:
      "https://images.unsplash.com/photo-1587202372583-49330a15584d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    description:
      "Gaming computers are specialized personal computers designed for playing video games. Gaming computers typically differ from mainstream computers by using high-performance video cards and high core-count central processing units with raw performance.",
    price: 3800,
    countInStock: 8,
  },
  {
    name: "Airpods",
    imageUrl:
      "https://images.unsplash.com/photo-1610438235354-a6ae5528385c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80.com/photo-1587202372583-49330a15584d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    description:
      "AirPods will forever change the way you use headphones. Whenever you pull your AirPods out of the charging case, they instantly turn on and connect to your iPhone, Apple Watch, iPad, or Mac. ... Driven by the custom Apple W1 chip, AirPods use optical sensors and a motion accelerometer to detect when they're in your ears",
    price: 200,
    countInStock: 20,
  },
  {
    name: "Samsung S21",
    imageUrl:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80.unsplash.com/photo-1610792516820-2bff50c652a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80://images.unsplash.com/photo-1610438235354-a6ae5528385c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80.com/photo-1587202372583-49330a15584d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    description:
      "With beyond cinematic 8K resolution, 64MP, our fastest chip, and a massive all-day battery. 6.7 Infinity-O Display, Dynamic AMOLED 2x, Eye Shield and Super Smooth 120Hz Display. Super Fast Charging. 5nm Processor. Fast Wireless Charging. 8GB RAM. 8K Video Snap.",
    price: 200,
    countInStock: 10,
  },
  
  {
    name: "logitech G-pro",
    imageUrl:
      "https://images.unsplash.com/photo-1619334084350-b093f0a9b40e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    description:
      "PRO Wireless was designed to be the ultimate gaming mouse for esports professionals. Over a 2 year period, Logitech G collaborated with more than 50 professional players to find the perfect shape, weight and feel combined with our LIGHTSPEED wireless and HERO 25k sensor technologies. The result is a gaming mouse with unrivaled performance and precision, giving you the tools and confidence needed to win.",
    price: 100,
    countInStock: 50,
  },
  {
    name: "Alienware setup",
    imageUrl:
      "https://images.unsplash.com/photo-1593640495253-23196b27a87f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    description:
      "PRO Wireless was designed to be the ultimate gaming mouse for esports professionals. Over a 2 year period, Logitech G collaborated with more than 50 professional players to find the perfect shape, weight and feel combined with our LIGHTSPEED wireless and HERO 25k sensor technologies. The result is a gaming mouse with unrivaled performance and precision, giving you the tools and confidence needed to win.",
    price: 4000,
    countInStock: 10,
  },
  {
    name: "Steelseries Arctis 7",
    imageUrl:
      "https://images.unsplash.com/photo-1591105866700-cb5d708ccd93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1082&q=80://images.https://images.unsplash.com/photo-1605773527852-c546a8584ea3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80.com/photo-1610792516820-2bff50c652a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80://images.unsplash.com/photo-1610438235354-a6ae5528385c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80.com/photo-1587202372583-49330a15584d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    description:
      "Dell SteelSeries Arctis gaming headsets are designed to keep gamers comfortable and focused without being distracted. Play all day with performance fabric ear cushions that keep your ears cool and dry and a super durable yet lightweight steel-reinforced adjustable headband to lock in a true surround sound experience. 17 is a Windows 10 Home laptop with a 17.30-inch display that has a resolution of 1920x1080 pixels. It is powered by a Core i7 processor and it comes with 16GB of RAM. The Dell Alienware 17 packs 1TB of HDD storage.Graphics are powered by Intel Integrated Integrated Graphics 5500. ",
    price: 400,
    countInStock: 20,
  },
  
  {
    name: "Corsair K-65",
    imageUrl:
      "https://images.unsplash.com/photo-1595225293417-b251205c984f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
    description:
      "CORSAIR gaming keyboards power top esports professionals with features like CHERRY mechanical keyswitches and powerful CORSAIR iCUE software. ",
    price: 200,
    countInStock: 50,
  },
  {
    name: "Xbox Series X",
    imageUrl:
      "https://images.unsplash.com/photo-1621259182181-1ccb9ec306cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1086&q=80",
    description:
      "The Xbox Series X delivers sensationally smooth frame rates of up to 120FPS with the visual pop of HDR. Immerse yourself with sharper characters, brighter worlds, and impossible details with true-to-life 4K.",
    price: 800,
    countInStock: 20,
  },

];

module.exports = products;
