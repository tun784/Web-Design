
const products = [
    {
      id: "1",
      productName: "Iphone 15 plus",
      category: "Iphone",
      price: 26990000,
      r_price: 25990000,
      image_1: "./img/Products/Iphone/15_plus/1.jpg",
      image_2: "./img/Products/Iphone/15_plus/2.jpg",
      image_3: "./img/Products/Iphone/15_plus/3.jpg",
      image_4: "./img/Products/Iphone/15_plus/4.jpg",
      screen_size: "6.7 inches",
      battery: "4383 mAh",
      camera_sau: "Chính 48 MP & Phụ 12 MP",
      camera_truoc: "	12MP, ƒ/1.9",
      ram: "6 GB",
      rom:"128 GB"
    },
    { 
      id:2,
      productName: "Xiaomi 14 Ultra 16GB/512GB ",
      category: "Xiaomi",
      price: 32990000,
      r_price: 29990000,
      image_1: "./img/Products/Xiaomi/Xiaomi 14 Ultra 5G (16GB 512GB)/1.webp",
      image_2: "./img/Products/Xiaomi/Xiaomi 14 Ultra 5G (16GB 512GB)/2.webp",
      image_3: "./img/Products/Xiaomi/Xiaomi 14 Ultra 5G (16GB 512GB)/3.webp",
      image_4: "./img/Products/Xiaomi/Xiaomi 14 Ultra 5G (16GB 512GB)/4.webp",
      screen_size: "6.73 inches",
      battery: "5.000 mAh",
      camera_sau: "50 MP, f/1.63 hoặc f/4.0, 23mm (góc rộng), kích thước 1, PDAF đa hướng, Laser AF, OIS",
      camera_truoc: "32MP f/2.0, Dynamic Framing (0.8x, 1x), HDR",
      ram: "16 GB",
      rom:"512 GB"
    },
    {
      id:3,
      productName: "Samsung Galaxy S24 Ultra 5G 12GB/256GB ",
      category: "Samsung",
      price: 33990000,
      r_price: 33490000,
      image_1: "./img/Products/Samsung/Samsung Galaxy S21 Ultra 5G 256GB/1.webp",
      image_2: "./img/Products/Samsung/Samsung Galaxy S21 Ultra 5G 256GB/2.webp",
      image_3: "./img/Products/Samsung/Samsung Galaxy S21 Ultra 5G 256GB/3.webp",
      image_4: "./img/Products/Samsung/Samsung Galaxy S21 Ultra 5G 256GB/4.webp",
      screen_size: "6.8 inches",
      battery: "5.000 mAh",
      camera_sau: "Ống kính chính góc rộng: 108MP, f/1.8",
      camera_truoc: "40 MP, f/2.2",
      ram: "12 GB",
      rom:"256 GB"
    },
    {
      id:4,
      productName: "Vivo Y78",
      category: "Vivo",
      price: 26790000,
      r_price: 25990000,
      image_1: "./img/Products/vivo/vivo y78/1.webp",
      image_2: "./img/Products/vivo/vivo y78/2.webp",
      image_3: "./img/Products/vivo/vivo y78/3.webp",
      image_4: "./img/Products/vivo/vivo y78/4.webp",
      screen_size: "6.67 inches",
      battery: "5.000 mAh",
      camera_sau: "Camera góc rộng: 50MP, f/1.8, PDAF",
      camera_truoc: "Camera góc rộng: 8 MP, f/2.0",
      ram: "8 GB",
      rom:"128 GB"
    },
    {
      id:5,
      productName: "Vivo V30e 5G 8GB/256GB",
      category: "Vivo",
      price: 9490000,
      r_price: 8990000,
      image_1: "./img/Products/vivo/Vivo V30e 5G 8GB256GB/1.webp",
      image_2: "./img/Products/vivo/Vivo V30e 5G 8GB256GB/2.webp",
      image_3: "./img/Products/vivo/Vivo V30e 5G 8GB256GB/3.webp",
      image_4: "./img/Products/vivo/Vivo V30e 5G 8GB256GB/4.webp",
      screen_size: "6.78 inches",
      battery: "5500 mAh",
      camera_sau: "Camera góc rộng: 50 MP, f/1.8, 1/1.95, 0.8µm, PDAF, OIS",
      camera_truoc: "32 MP HD Selfie Camera f/2.0, 84º FoV, 5P lens",
      ram: "8 GB",
      rom:"256 GB"
    },
    {
      id:6,
      productName: "Samsung Galaxy A35 5G 8GB/256GB",
      category: "Samsung",
      price: 9290000,
      r_price: 8990000,
      image_1: "./img/Products/Samsung/Samsung Galaxy A35 5G 8GB 256GB/1.webp",
      image_2: "./img/Products/Samsung/Samsung Galaxy A35 5G 8GB 256GB/2.webp",
      image_3: "./img/Products/Samsung/Samsung Galaxy A35 5G 8GB 256GB/3.webp",
      image_4: "./img/Products/Samsung/Samsung Galaxy A35 5G 8GB 256GB/4.webp",
      screen_size: "6.6 inches",
      battery: "5500 mAh",
      camera_sau: "Camera chính rộng: 50 MP OIS+HDR Camera Macro: 5MP, f/2.4",
      camera_truoc: "13MP, f/2.2",
      ram: "8 GB",
      rom:"256 GB"
    },
    {
      id:7,
      productName: "OPPO Reno11 F 5G 8GB/256GB",
      category: "Oppo",
      price: 8990000,
      r_price: 8690000,
      image_1: "./img/Products/oppo/OPPO Reno11 F 5G 8GB 256GB/1.webp",
      image_2: "./img/Products/oppo/OPPO Reno11 F 5G 8GB 256GB/2.webp",
      image_3: "./img/Products/oppo/OPPO Reno11 F 5G 8GB 256GB/3.webp",
      image_4: "./img/Products/oppo/OPPO Reno11 F 5G 8GB 256GB/4.webp",
      screen_size: "6.7 inches",
      battery: "5000 mAh",
      camera_sau: "Camera góc siêu rộng: 8 MP, f/2.2",
      camera_truoc: "Camera góc rộng: 32 MP, f/2.4, 22mm, 1/2.74, 0.8µm",
      ram: "8 GB",
      rom:"256 GB"
    },
    {
      id:8,
      productName: "iPhone 13 128GB",
      category: "Iphone",
      price: 17790000,
      r_price: 13790000,
      image_1: "./img/Products/Iphone/iPhone 13 128GB  Chính hãng VNA/1.webp",
      image_2: "./img/Products/Iphone/iPhone 13 128GB  Chính hãng VNA/2.webp",
      image_3: "./img/Products/Iphone/iPhone 13 128GB  Chính hãng VNA/3.webp",
      image_4: "./img/Products/Iphone/iPhone 13 128GB  Chính hãng VNA/4.webp",
      screen_size: "6.1 inches",
      battery: "3240mAh",
      camera_sau: "Camera góc rộng: 12MP, f/1.6 Camera góc siêu rộng: 12MP, ƒ/2.4",
      camera_truoc: "12MP, f/2.2",
      ram: "4 GB",
      rom:"128 GB"
    },
    {
      id:9,
      productName: "Samsung Galaxy S23 FE 5G 8GB/128GB",
      category: "Samsung",
      price: 14890000,
      r_price: 13890000,
      image_1: "./img/Products/Samsung/Samsung Galaxy S23 FE 5G 8GB 128GB/1.webp",
      image_2: "./img/Products/Samsung/Samsung Galaxy S23 FE 5G 8GB 128GB/2.webp",
      image_3: "./img/Products/Samsung/Samsung Galaxy S23 FE 5G 8GB 128GB/3.webp",
      image_4: "./img/Products/Samsung/Samsung Galaxy S23 FE 5G 8GB 128GB/4.webp",
      screen_size: "6.4 inches",
      battery: "4500 mAh",
      camera_sau: "50 MP & Phụ 12 MP, 8 MP",
      camera_truoc: "10 MP",
      ram: "8 GB",
      rom:"128 GB"
    },
    {
      id:10,
      productName: "OPPO A58 8GB/128GB",
      category: "Oppo",
      price: 5490000,
      r_price: 5090000,
      image_1: "./img/Products/oppo/OPPO A58 8GB 128GB/1.webp",
      image_2: "./img/Products/oppo/OPPO A58 8GB 128GB/2.webp",
      image_3: "./img/Products/oppo/OPPO A58 8GB 128GB/3.webp",
      image_4: "./img/Products/oppo/OPPO A58 8GB 128GB/4.webp",
      screen_size: "6.56 inches",
      battery: "5000 mAh",
      camera_sau: "Cảm biến chính 50MP",
      camera_truoc: "8MP",
      ram: "8 GB",
      rom:"128 GB"
    },
    {
      id:11,
      productName: "Xiaomi Redmi 13C 4GB/128GB ",
      category: "Xiaomi",
      price: 3090000,
      r_price: 2590000,
      image_1: "./img/Products/Xiaomi/Xiaomi Redmi 13C 4GB 128GB/1.webp",
      image_2: "./img/Products/Xiaomi/Xiaomi Redmi 13C 4GB 128GB/2.webp",
      image_3: "./img/Products/Xiaomi/Xiaomi Redmi 13C 4GB 128GB/3.webp",
      image_4: "./img/Products/Xiaomi/Xiaomi Redmi 13C 4GB 128GB/4.webp",
      screen_size: "6.74 inches",
      battery: "5000 mAh",
      camera_sau: "Chính 50 MP & Phụ 2 MP",
      camera_truoc: "8MP",
      ram: "4 GB",
      rom:"128 GB"
      },
      {
        id:12,
        productName: "Xiaomi Redmi A3 ",
        category: "Xiaomi",
        price: 2490000,
        r_price: 2290000,
        image_1: "./img/Products/Xiaomi/Xiaomi Redmi A3/1.webp",
        image_2: "./img/Products/Xiaomi/Xiaomi Redmi A3/2.webp",
        image_3: "./img/Products/Xiaomi/Xiaomi Redmi A3/3.webp",
        image_4: "./img/Products/Xiaomi/Xiaomi Redmi A3/4.webp",
        screen_size: "6.71 inches",
        battery: "5000 mAh",
        camera_sau: "Camera kép AI 8MP",
        camera_truoc: "5MP",
        ram: "4 GB",
        rom:"128 GB"
      },
      {
        id:13,
        productName: "Samsung Galaxy M34 5G 8GB/128GB",
        category: "Samsung",
        price: 7790000,
        r_price: 5790000,
        image_1: "./img/Products/Samsung/Samsung Galaxy M34 5G 8GB 128GB/1.webp",
        image_2: "./img/Products/Samsung/Samsung Galaxy M34 5G 8GB 128GB/2.webp",
        image_3: "./img/Products/Samsung/Samsung Galaxy M34 5G 8GB 128GB/3.webp",
        image_4: "./img/Products/Samsung/Samsung Galaxy M34 5G 8GB 128GB/4.webp",
        screen_size: "6.5 inches",
        battery: "6000 mAh",
        camera_sau: "Camera góc rộng: 50 MP, f/1.8, PDAF, OIS \nCamera góc siêu rộng:8 MP, f/2.2, 120˚ 2 MP, f/2.4",
        camera_truoc: "Camera góc rộng: 13 MP, f/2.2",
        ram: "8 GB",
        rom:"128 GB"
      },
      {
        id:14,
        productName: "Vivo V30 5G 12GB/512GB",
        category: "Vivo",
        price: 13.990000,
        r_price: 13490000,
        image_1: "./img/Products/vivo/Vivo V25 Pro 5G 12GB 512GB/1.webp",
        image_2: "./img/Products/vivo/Vivo V25 Pro 5G 12GB 512GB/2.webp",
        image_3: "./img/Products/vivo/Vivo V25 Pro 5G 12GB 512GB/3.webp",
        image_4: "./img/Products/vivo/Vivo V25 Pro 5G 12GB 512GB/4.webp",
        screen_size: "6.55 inches",
        battery: "4830 mAh",
        camera_sau: "Camera chính 64MP OIS + Góc Rộng 8MP + Siêu Cận 2MP",
        camera_truoc: "32MP AF, f/2.45",
        ram: "12 GB",
        rom:"512 GB"
      },
      {
        id:15,
        productName: "Vivo V29e 5G 12GB/256GB",
        category: "Vivo",
        price: 9990000,
        r_price: 9490000,
        image_1: "./img/Products/vivo/vivo V29E 12GB 256GB/1.webp",
        image_2: "./img/Products/vivo/vivo V29E 12GB 256GB/1.webp",
        image_3: "./img/Products/vivo/vivo V29E 12GB 256GB/1.webp",
        image_4: "./img/Products/vivo/vivo V29E 12GB 256GB/1.webp",
        screen_size: "6.67 inches",
        battery: "4830 mAh",
        camera_sau: "Camera chính: 64MP, f/1.79, OIS \nCamera góc siêu rộng: 8MP, f/2.2",
        camera_truoc: "50 MP, f/2.0, AF",
        ram: "12 GB",
        rom:"512 GB"
      },
      {
        id:16,
        productName: "Vivo Y18 8GB/128GB",
        category: "Vivo",
        price: 4490000,
        r_price: 4290000,
        image_1: "./img/Products/vivo/vivo y78/1.webp",
        image_2: "./img/Products/vivo/vivo y78/2.webp",
        image_3: "./img/Products/vivo/vivo y78/3.webp",
        image_4: "./img/Products/vivo/vivo y78/4.webp",
        screen_size: "6.56 inches",
        battery: "5000 mAh",
        camera_sau: "50MP + 0.08MP khẩu độ f/1.8 (50MP) + f/3.0 (0.08MP)",
        camera_truoc: "50 MP, f/2.0, AF",
        ram: "6 GB",
        rom:"128 GB"
      },


      {
        id:17,
        productName: "iPad Air 6 M2 13 inch WiFi",
        category: "iPhone",
        price: 22490000,
        r_price: 21990000,
        image_1: "./img/Products/Iphone/iPad Air 6 M2 13 inch Wifi 128GB/1.webp",
        image_2: "./img/Products/Iphone/iPad Air 6 M2 13 inch Wifi 128GB/2.webp",
        image_3: "./img/Products/Iphone/iPad Air 6 M2 13 inch Wifi 128GB/3.webp",
        image_4: "./img/Products/Iphone/iPad Air 6 M2 13 inch Wifi 128GB/4.webp",
        screen_size: "12.9 inches",
        battery: "Tích hợp pin sạc Li-Po 36,59 watt/giờ",
        camera_sau: "Camera góc rộng 12MP, khẩu độ ƒ/1.8",
        camera_truoc: "Camera trước Ultra Wide 12MP trên cạnh ngang \nKhẩu độ ƒ/2.4",
        ram: "8 GB",
        rom:"128 GB"
      },
      {
        id:18,
        productName: "iPad Pro 11 inch 2022 M2 Wifi 128GB",
        category: "iPhone",
        price: 28990000,
        r_price: 28490000,
        image_1: "./img/Products/Iphone/iPad Pro 11 inch 2022 M2 Wifi 128GB/1.webp",
        image_2: "./img/Products/Iphone/iPad Pro 11 inch 2022 M2 Wifi 128GB/2.webp",
        image_3: "./img/Products/Iphone/iPad Pro 11 inch 2022 M2 Wifi 128GB/3.webp",
        image_4: "./img/Products/Iphone/iPad Pro 11 inch 2022 M2 Wifi 128GB/4.webp",
        screen_size: "12.9 inches",
        battery: "Tích hợp pin sạc Li-Po 36,59 watt/giờ",
        camera_sau: "Camera góc rộng 12MP, khẩu độ ƒ/1.8",
        camera_truoc: "Camera trước Ultra Wide 12MP trên cạnh ngang \nKhẩu độ ƒ/2.4",
        ram: "8 GB",
        rom:"128 GB"
      },
      {
        id:19,
        productName: "OPPO Pad Neo WiFi",
        category: "Oppo",
        price: 6990000,
        r_price: 6290000,
        image_1: "./img/Products/oppo/Máy tính bảng OPPO Pad Neo WiFi/1.jpg",
        image_2: "./img/Products/oppo/Máy tính bảng OPPO Pad Neo WiFi/2.jpg",
        image_3: "./img/Products/oppo/Máy tính bảng OPPO Pad Neo WiFi/3.jpg",
        image_4: "./img/Products/oppo/Máy tính bảng OPPO Pad Neo WiFi/4.jpg",
        screen_size: "11.4 inches - Tần số quét 90 Hz",
        battery: "8000 mAh",
        camera_sau: "HD 720p@30fpsFullHD 1080p@30fps",
        camera_truoc: "8 MP",
        ram: "6 GB",
        rom:"128 GB"
      },
      {
        id:20,
        productName: "  Samsung Galaxy Tab S6 Lite (2024)",
        category: "Samsung",
        price: 8990000,
        r_price: 8490000,
        image_1: "./img/Products/Samsung/Samsung Galaxy Tab S6 Lite 2024/1.webp",
        image_2: "./img/Products/Samsung/Samsung Galaxy Tab S6 Lite 2024/2.webp",
        image_3: "./img/Products/Samsung/Samsung Galaxy Tab S6 Lite 2024/3.webp",
        image_4: "./img/Products/Samsung/Samsung Galaxy Tab S6 Lite 2024/4.webp",
        screen_size: "11.4 inches - Tần số quét 90 Hz",
        battery: "8000 mAh",
        camera_sau: "HD 720p@30fpsFullHD 1080p@30fps",
        camera_truoc: "8 MP",
        ram: "6 GB",
        rom:"128 GB"
      },
      {
        id:21,
        productName: "  Samsung Galaxy Tab A9",
        category: "Samsung",
        price: 5490000,
        r_price: 4690000,
        image_1: "./img/Products/Samsung/Samsung Galaxy Tab A9/1.webp",
        image_2: "./img/Products/Samsung/Samsung Galaxy Tab A9/2.webp",
        image_3: "./img/Products/Samsung/Samsung Galaxy Tab A9/3.webp",
        image_4: "./img/Products/Samsung/Samsung Galaxy Tab A9/4.webp",
        screen_size: "10.4 inches",
        battery: "7.040 mAh",
        camera_sau: "8 MP, f/2.0, AF",
        camera_truoc: "5 MP",
        ram: "4 GB",
        rom:"128 GB"
      },
      {
        id:22,
        productName: "   Xiaomi POCO Pad 8GB/256GB",
        category: "Xiaomi",
        price: 8690000,
        r_price: 7990000,
        image_1: "./img/Products/Xiaomi/Xiaomi POCO Pad 8GB256GB/1.png",
        image_2: "./img/Products/Xiaomi/Xiaomi POCO Pad 8GB256GB/2.png",
        image_3: "./img/Products/Xiaomi/Xiaomi POCO Pad 8GB256GB/3.jpg",
        image_4: "./img/Products/Xiaomi/Xiaomi POCO Pad 8GB256GB/4.jpg",
        screen_size: "12.1 IPS LCD",
        battery: "10000 mAh33 W",
        camera_sau: "8 MP",
        camera_truoc: "8 MP",
        ram: "8 GB",
        rom:"256 GB"
      },
      {
        id:23,
        productName: "   Xiaomi Pad 6",
        category: "Xiaomi",
        price: 10490000,
        r_price: 9490000,
        image_1: "./img/Products/Xiaomi/Xiaomi Pad 6 8GB 128GB/1.webp",
        image_2: "./img/Products/Xiaomi/Xiaomi Pad 6 8GB 128GB/2.webp",
        image_3: "./img/Products/Xiaomi/Xiaomi Pad 6 8GB 128GB/3.webp",
        image_4: "./img/Products/Xiaomi/Xiaomi Pad 6 8GB 128GB/4.webp",
        screen_size: "11 inches",
        battery: "8840 mAh",
        camera_sau: "13 MP, f/2.2, PDAF",
        camera_truoc: "8 MP, f/2.2, 1/4, 1.12µm",
        ram: "8 GB",
        rom:"128 GB"
      },
      {
        id:24,
        productName: "   iPad Air 6 M2 13 inch 5G",
        category: "iPhone",
        price: 26490000,
        r_price: 25990000,
        image_1: "./img/Products/Iphone/iPad Air 6 M2 13 inch 5G/1.webp",
        image_2: "./img/Products/Iphone/iPad Air 6 M2 13 inch 5G/2.webp",
        image_3: "./img/Products/Iphone/iPad Air 6 M2 13 inch 5G/3.webp",
        image_4: "./img/Products/Iphone/iPad Air 6 M2 13 inch 5G/4.webp",
        screen_size: "12.9 inches",
        battery: "8840 mAh",
        camera_sau: "Camera góc rộng 12MP, khẩu độ ƒ/1.8",
        camera_truoc: "Camera trước Ultra Wide 12MP trên cạnh ngang \nKhẩu độ ƒ/2.4",
        ram: "8 GB",
        rom:"128 GB"
      },
      // san pham khac
      {
        id:25,
        productName: "ASUS ROG Phone 6 16GB 512GB",
        category: "khác",
        price: 20990000,
        r_price: 16990000,
        image_1: "./img/Products/asus/ASUS ROG Phone 6 16GB 512GB/1.webp",
        image_2: "./img/Products/asus/ASUS ROG Phone 6 16GB 512GB/2.webp",
        image_3: "./img/Products/asus/ASUS ROG Phone 6 16GB 512GB/3.webp",
        image_4: "./img/Products/asus/ASUS ROG Phone 6 16GB 512GB/4.webp",
        screen_size: "6.78 inches",
        battery: "8840 mAh",
        camera_sau: "Camera chính góc rộng: 50 MP, f/1.9, PDAF \nCamera góc siêu rộng:13 MP, f/2.2 \nCamera macro: 5 MP",
        camera_truoc: "12 MP",
        ram: "16 GB",
        rom:"512 GB"
      },
      {
        id:26,
        productName: "Điện thoại Sony Xperia 1V 12GB 256GB",
        category: "khác",
        price: 35990000,
        r_price: 27990000,
        image_1: "./img/Products/sony/Điện thoại Sony Xperia 1V 12GB 256GB/1.webp",
        image_2: "./img/Products/sony/Điện thoại Sony Xperia 1V 12GB 256GB/2.webp",
        image_3: "./img/Products/sony/Điện thoại Sony Xperia 1V 12GB 256GB/3.webp",
        image_4: "./img/Products/sony/Điện thoại Sony Xperia 1V 12GB 256GB/4.webp",
        screen_size: "6.5 inches",
        battery: "5000 mAh",
        camera_sau: "52 MP + 48MP + 12MP",
        camera_truoc: "12MP, f/2.0",
        ram: "12 GB",
        rom:"256 GB"
      },
      {
        id:27,
        productName: "Điện thoại Sony Xperia 1V 12GB 256GB",
        category: "khác",
        price: 3290000,
        r_price: 2390000,
        image_1: "./img/Products/nokia/Nokia C32 4GB 128GB/1.webp",
        image_2: "./img/Products/nokia/Nokia C32 4GB 128GB/2.webp",
        image_3: "./img/Products/nokia/Nokia C32 4GB 128GB/3.webp",
        image_4: "./img/Products/nokia/Nokia C32 4GB 128GB/4.webp",
        screen_size: "6.52 inches",
        battery: "5050 mAh",
        camera_sau: "Camera góc rộng: 50MP, AF \nCamera macro: 2 MP",
        camera_truoc: "8 MP",
        ram: "12 GB",
        rom:"128 GB"
      },
      {
        id:28,
        productName: "Điện thoại benco S1 Pro 8GB 256GB",
        category: "khác",
        price: 3990000,
        r_price: 3490000,
        image_1: "./img/Products/benco/Điện thoại benco S1 Pro 8GB 256GB/1.webp",
        image_2: "./img/Products/benco/Điện thoại benco S1 Pro 8GB 256GB/2.webp",
        image_3: "./img/Products/benco/Điện thoại benco S1 Pro 8GB 256GB/3.webp",
        image_4: "./img/Products/benco/Điện thoại benco S1 Pro 8GB 256GB/4.webp",
        screen_size: "6.8 inches",
        battery: "5000 mAh",
        camera_sau: "64 MP",
        camera_truoc: "16 MP",
        ram: "8 GB",
        rom:"256 GB"
      },

    ];
  localStorage.setItem('products', JSON.stringify(products));

  
  for (let i of products) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");

    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image_1);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //container_product
    let container_product = document.createElement("div");
    container_product.classList.add("container_product");

    //category
    let category = document.createElement("span");
    category.classList.add("product-category");
    category.innerText = i.category;
    category.style.display = "none"; // ẩn thẻ này để không hiển thị trên giao diện
    container_product.appendChild(category);

    //id
    let id = document.createElement("span");
    id.classList.add("product-id");
    id.innerText = i.id;
    id.style.display = "none"; // ẩn thẻ này để không hiển thị trên giao diện
    container_product.appendChild(id);

    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container_product.appendChild(name);
    
    //reduced price
    let r_price = document.createElement("h6");
    r_price.classList.add('product_reduce_price')
    r_price.innerText = vnd(i.r_price);
    container_product.appendChild(r_price);
    card.appendChild(container_product);
    
    //price
    let price = document.createElement("h6");
    price.classList.add('product_price')
    price.innerText = vnd(i.price);
    container_product.appendChild(price);
    card.appendChild(container_product);
    document.getElementById("products").appendChild(card);

    

    // button dat
    let btn_addCart = document.createElement("button");
    btn_addCart.innerText = "Xem chi tiết";
    btn_addCart.classList.add("button-dat"); 
    btn_addCart.id = "add-cart"; 
    container_product.appendChild(btn_addCart);
    card.appendChild(container_product);
    document.getElementById("products").appendChild(card);


  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  


//Lắng nghe sự kiện khi người dùng nhấn phím Enter trong ô nhập liệu tìm kiếm
document.getElementById("search-input").addEventListener("keypress", (event) => {
  removeOldCards();
  for (let i of products) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image_1);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container_product
    let container_product = document.createElement("div");
    container_product.classList.add("container_product");
    //category
    let category = document.createElement("span");
    category.classList.add("product-category");
    category.innerText = i.category;
    category.style.display = "none"; // ẩn thẻ này để không hiển thị trên giao diện
    container_product.appendChild(category);
    //id
    let id = document.createElement("span");
    id.classList.add("product-id");
    id.innerText = i.id;
    id.style.display = "none"; // ẩn thẻ này để không hiển thị trên giao diện
    container_product.appendChild(id);
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container_product.appendChild(name);

    //reduced price
    let r_price = document.createElement("h6");
    r_price.classList.add('product_reduce_price')
    r_price.innerText = vnd(i.r_price);
    container_product.appendChild(r_price);
    card.appendChild(container_product);
    document.getElementById("products").appendChild(card);

    //price
    let price = document.createElement("h6");
    price.classList.add('product_price')
    price.innerText = vnd(i.price);
    container_product.appendChild(price);
    card.appendChild(container_product);
    document.getElementById("products").appendChild(card);

    
    
    let btn_addCart = document.createElement("button");
    btn_addCart.innerText = "Xem chi tiết";
    container_product.appendChild(btn_addCart);
    card.appendChild(container_product);
    document.getElementById("products").appendChild(card);


    card.addEventListener("click", () => {
        
      const cardId = i.id;
       //createToast_info("Product ID: " + cardId);
       localStorage.setItem('current_product', cardId);
       window.location.href = './product_detail.html';
    });

  }
  if (event.key === "Enter") {
    
      //khởi tạo
      let searchInput = document.getElementById("search-input").value;
      let elements = document.querySelectorAll(" .product-name");
      let cards = document.querySelectorAll(".card");
      //lặp qua tất cả các phần tử
      elements.forEach((element, index) => {
        
          //kiểm tra nếu văn bản bao gồm giá trị tìm kiếm
          if (element.innerText.toUpperCase().includes(searchInput.toUpperCase())) {
              //hiển thị thẻ phù hợp
              
              cards[index].classList.remove("hide");
          } else {
              //ẩn các thẻ khác
              
              cards[index].classList.add("hide");
          }
          //return;
      });
  }
});

function removeOldCards() {
  const productContainer = document.getElementById("products");
  while (productContainer.firstChild) {
    productContainer.removeChild(productContainer.firstChild);
  }
}


  // resulut from navigation
  document.querySelectorAll("#pr").forEach(pr => {
    pr.addEventListener("click", () => {
      if (window.location.pathname === '/product_detai.html') {
        window.location.href = './index.html';
    }
    
      removeOldCards();

      for (let i of products) {
        //Create Card
        let card = document.createElement("div");
        //Card should have category and should stay hidden initially
        card.classList.add("card", i.category, "hide");
        //image div
        let imgContainer = document.createElement("div");
        imgContainer.classList.add("image-container");
        //img tag
        let image = document.createElement("img");
        image.setAttribute("src", i.image_1);
        imgContainer.appendChild(image);
        card.appendChild(imgContainer);
        //container_product
        let container_product = document.createElement("div");
        container_product.classList.add("container_product");
        //category
        let category = document.createElement("span");
        category.classList.add("product-category");
        category.innerText = i.category;
        category.style.display = "none"; // ẩn thẻ này để không hiển thị trên giao diện
        container_product.appendChild(category);
        //id
        let id = document.createElement("span");
        id.classList.add("product-id");
        id.innerText = i.id;
        id.style.display = "none"; // ẩn thẻ này để không hiển thị trên giao diện
        container_product.appendChild(id);
        //product name
        let name = document.createElement("h5");
        name.classList.add("product-name");
        name.innerText = i.productName.toUpperCase();
        container_product.appendChild(name);
        //price
        let price = document.createElement("h6");
        price.classList.add('product_price')
        price.innerText = vnd(i.price);
        container_product.appendChild(price);
        card.appendChild(container_product);
        document.getElementById("products").appendChild(card);

        //reduced price
        let r_price = document.createElement("h6");
        r_price.classList.add('product_reduce_price')
        r_price.innerText = vnd(i.r_price);
        container_product.appendChild(r_price);
        card.appendChild(container_product);
        document.getElementById("products").appendChild(card);
        let btn_addCart = document.createElement("button");
        btn_addCart.innerText = "Xem chi tiết";
        container_product.appendChild(btn_addCart);
        card.appendChild(container_product);
        document.getElementById("products").appendChild(card);

        card.addEventListener("click", () => {
        
          const cardId = i.id;
           //createToast_info("Product ID: " + cardId);
           localStorage.setItem('current_product', cardId);
           window.location.href = './product_detail.html';
        });
    

      }
      //initializations
      let searchInput = pr.textContent.trim().toUpperCase();
      let elements = document.querySelectorAll(".product-category");
      let cards = document.querySelectorAll(".card");

      //loop through all elements
      elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.toUpperCase().includes(searchInput.toUpperCase())) {
          //display matching card
          cards[index].classList.remove("hide");
        } else {
          //hide others
          cards[index].classList.add("hide");
        }
      });
    });
  });


  let thisPage=1;
  let limit=8;
  let list=document.querySelectorAll('#products .card');

  function loadItem (){
    let beginGet=limit*(thisPage-1);
    let endGet=limit*thisPage-1;
    list.forEach((card,index)=>{
      if (index>=beginGet && index<=endGet){
        card.style.display='block';
      }else{
        card.style.display='none';
      }
    
    })
    listPage();
  }

  loadItem();
  function listPage(){
    let count=Math.ceil(list.length/limit);
    document.querySelector('.listPage').innerHTML='';

    if (thisPage!=1){
      let prev=document.createElement('li');
      prev.insertAdjacentHTML('beforeend', '<i class="fa-solid fa-angle-left"></i>');
      prev.setAttribute('onclick',"changePage("+(thisPage-1)+")");
      document.querySelector('.listPage').appendChild(prev);
    }

    for(i=1;i<=count;i++){
      let newPage=document.createElement('li');
      newPage.innerText=i;
      if(i==thisPage){
        newPage.classList.add('active');
      }
      newPage.setAttribute('onclick',"changePage("+i+")");
      document.querySelector('.listPage').appendChild(newPage);
    }
    if (thisPage!=count){
      let next=document.createElement('li');
      next.insertAdjacentHTML('beforeend', '<i class="fa-solid fa-angle-right"></i>');
      next.setAttribute('onclick',"changePage("+(thisPage+1)+")");
      document.querySelector('.listPage').appendChild(next);
    }
  }

  function vnd(price) {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

  function changePage(i){
    thisPage=i;
    loadItem();
  }











  // Hàm hiển thị thông tin sản phẩm
  function displayProductDetails(productId) {
    for (let product of products){
        if(product.id == productId){
            // Hiển thị thông tin sản phẩm
        document.querySelector('.pname').innerText = product.productName;
        
        document.querySelector('.price').innerText = vnd(product.r_price);
        document.querySelector('.screen-size').innerText = product.screen_size;
        document.querySelector('.battery').innerText = product.battery;
        document.querySelector('.camera-sau').innerText = product.camera_sau;
        document.querySelector('.camera-truoc').innerText = product.camera_truoc;
        document.querySelector('.ram').innerText = product.ram;
        document.querySelector('.rom').innerText = product.rom;
        // Hiển thị ảnh sản phẩm
        document.querySelector('.big-img img').src = product.image_1;

        document.querySelector('.small-img-1').src = product.image_1;
        document.querySelector('.small-img-2').src = product.image_2;
        document.querySelector('.small-img-3').src = product.image_3;
        document.querySelector('.small-img-4').src = product.image_4;




        }

        document.querySelector('.cart-btn').addEventListener('click', () =>{
          
        })
        // else {
        //     window.alert("Không tìm thấy sản phẩm!");
        // }
    }
}
// Get Product 
// function getProduct(item, products) {
//   let infoProductCart = products.find(sp => item.id === sp.id);
//   if (infoProductCart) {
//       let product = {
//           id: infoProductCart.id,
//           productName: item.productName || infoProductCart.productName,
//           price: item.price || infoProductCart.price,
//           // Các thuộc tính khác có thể được thêm vào nếu cần thiết
//       };
//       return product;
//   }
//   return undefined;
// }


  
  
  //Initially display all products
  window.onload = () => {
    
    filterProduct("all");
  };
  
  window.onload =localStorage.setItem('products', JSON.stringify(products));