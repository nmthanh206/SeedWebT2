const products = [
  {
    name: "Xbox Wireless Controller",
    image: [
      "/images/accessories/Xbox-Wireless-Controller-1.jpg",
      "/images/accessories/Xbox-Wireless-Controller-2.jpg",
      "/images/accessories/Xbox-Wireless-Controller-3.jpg",
    ],
    description:
      "Video games have become world-famous and are getting access to teenage children. In this world of technology, kids can never be far behind. Moreover, in this generation, in shortage of fields and gardens, video games have taken the lead. This new gaming controller has a brand new frequency (2.4GHz). It also has a strong anti-interference, system controller, and bidirectional transmission.",
    brand: "Xbox",
    category: "Accessories",
    price: 89.0,
    countInStock: 3,
    averageRating: 0,
    numReviews: 0,
  },
  {
    name: "Spanish SP laptop Keyboard",
    image: [
      "/images/accessories/Spanish-SP-laptop-Keyboard-1.jpg",
      "/images/accessories/Spanish-SP-laptop-Keyboard-2.jpg",
      "/images/accessories/Spanish-SP-laptop-Keyboard-3.jpg",
    ],
    description:
      "The Razer BlackWidow Elite is a gaming Keyboard designed for Prime performance—featuring Razer Mechanical switches for faster actuation, and a durable 80 million keystroke lifespan. A multi-function digital dial provides media controls, and the USB 2.0 and audio pass through allows easy cable management. Play for long hours comfortably with the ergonomic wrist rest, and you can even customize key lighting, bindings, and macros. Save up to 5 configurations for use anywhere with a hybrid on-board memory and cloud storage.",
    brand: "Razer",
    category: "Accessories",
    price: 99.99,
    countInStock: 3,
    averageRating: 0,
    numReviews: 0,
  },
  {
    name: "PlayStation 4",
    image: [
      "/images/accessories/PlayStation-4-1.jpg",
      "/images/accessories/PlayStation-4-2.jpg",
      "/images/accessories/PlayStation-4-3.jpg",
    ],
    description:
      "Logitech updated its iconic G502 gaming mouse to deliver even higher performance and more precise functionality than ever. Logitech G502 Hero high Performance Gaming mouse features the next generation Hero 16K Optical sensor, The highest performing and most efficient gaming sensor Logitech has ever made. An all-New lens and an updated tracking algorithm deliver ultra-precise tracking with no acceleration, smoothing, or filtering over the entire DPI range. Now, customize RGB mouse lighting to match your style and environment or sync to other Logitech G products. No matter your gaming style, It's easy to tweak G502 Hero to match your requirements, with custom profiles for your games, adjustable sensitivity from 200 up to 16, 000 DPI, and a tunable weight system that allows for tuning and balancing of up to five 3. 6G weights for just the right balance and feel.",
    brand: "Sony",
    category: "Accessories",
    price: 29.99,
    countInStock: 3,
    averageRating: 0,
    numReviews: 0,
  },
  {
    name: "One Piece Chopper Keyboard",
    image: [
      "/images/accessories/One-Piece-Chopper-Keyboard-1.jpg",
      "/images/accessories/One-Piece-Chopper-Keyboard-2.jpg",
      "/images/accessories/One-Piece-Chopper-Keyboard-3.jpg",
    ],
    description:
      "Immerse yourself in the action with the Corsair void RGB Elite wireless, with custom-tuned 50mm neodymium audio drivers delivering 7.1 surround sound on the PC. Microfiber mesh fabric and memory foam ear pads provide lasting comfort. Connect to your PC or PS4 with a low-latency 2.4GHz wireless connection, with a range of up to 40ft and all-day battery life up to 16 hours. An omnidirectional microphone with LED mute indicator ensures that you're heard with exceptional vocal clarity. The void RGB Elite's distinctive design and durable construction are complemented by fully customizable RGB lighting on each ear cup. Powerful Corsair iCUE software ties everything together, enabling full control over equalizer settings, 7.1 surround sound, RGB lighting and more.",
    brand: "Corsair",
    category: "Accessories",
    price: 78.99,
    countInStock: 3,
    averageRating: 0,
    numReviews: 0,
  },
  {
    name: "Mouse Bosston M710 Game 1",
    image: [
      "/images/accessories/Mouse-Bosston-M710-Game-1.jpg",

      "/images/accessories/Mouse-Bosston-M710-Game-2.jpg",
      "/images/accessories/Mouse-Bosston-M710-Game-3.jpg",
    ],
    description:
      "HyperX Cloud II features a newly designed USB sound card audio control box that amplifies audio and voice for an optimal Hi Fi gaming experience, so you can hear what you’ve been missing. Open up a world of detail other gamers will never know — the rustle of a camper’s boot, the scuttle in a distant vent. This next generation headset generates virtual 7.1 surround sound with distance and depth to enhance your gaming, movie or music experience. The headset must be selected as the default audio device in your sound settings. For Windows: 1. Open up Control Panel and select Hardware and Sound and then select Sound. 2. If the “HyperX 7.1 Audio” is not currently the default audio device, right click on the option and select “Set as Default Device.” 3. This should place a green check mark next to the default audio device. Repeat the same steps for the microphone portion of the headset, located under the “Recording” tab (also found in the Sound program in Control Panel.)",
    brand: "HyperX",
    category: "Accessories",
    price: 79.99,
    countInStock: 3,
    averageRating: 0,
    numReviews: 0,
  },
  {
    name: "Keyboard Akko Ocean Star",
    image: [
      "/images/accessories/Keyboard-Akko-Ocean-Star-1.jpg",
      "/images/accessories/Keyboard-Akko-Ocean-Star-2.jpg",
      "/images/accessories/Keyboard-Akko-Ocean-Star-3.jpg",
    ],
    description:
      "The Razer Tartarus V2 provides endless commands at your fingertips with 32 fully programmable Mecha-Membrane keys, including an 8-way directional d-pad and 3-way scroll wheel. The keypad also features individually programmable backlit keys with 16.8 million color options, all easily set through Razer Synapse. And with its improved ergonomic form factor and adjustable palm rest with two positions, you get the exact angle of comfort you need. Razer Synapse 3 (PC)/ Razer Synapse 2 (Mac) enabled.",
    brand: "Razer",
    category: "Accessories",
    price: 76.0,
    countInStock: 3,
    averageRating: 0,
    numReviews: 0,
  },
  {
    name: "Bose noise cancelling headphone",
    image: [
      "/images/accessories/bose-noise-cancelling-headphone-1.jpg",
      "/images/accessories/bose-noise-cancelling-headphone-2.jpg",
      "/images/accessories/bose-noise-cancelling-headphone-3.jpg",
    ],
    description:
      "The CORSAIR Virtuoso RGB Wireless delivers a high-fidelity audio experience for the most discerning players, combining uncompromising sound quality with all-day, all-night comfort from its premium memory foam earpads and headband. Connect to virtually any device with ultra-low latency SLIPSTREAM CORSAIR WIRELESS TECHNOLOGY, 3.5mm wired, or 24bit/96KHz USB wired. Make yourself heard with a broadcast-grade, omni-directional detachable microphone with exceptional dynamic range.",
    brand: "CORSAIR",
    category: "Accessories",
    price: 179.99,
    countInStock: 3,
    averageRating: 0,
    numReviews: 0,
  },
  {
    name: "Bluetooth DeFunc BT Headphone",
    image: [
      "/images/accessories/Bluetooth-DeFunc-BT-Headphone-1.jpg",
      "/images/accessories/Bluetooth-DeFunc-BT-Headphone-2.jpg",
      "/images/accessories/Bluetooth-DeFunc-BT-Headphone-3.jpg",
    ],
    description:
      "Alien ware 7. 1 Gaming Headset 510H Custom-tuned 50mm Hi-Res drivers Immersive 7. 1 Surround Sound with in-line DAC Ultra-comfortable hybrid memory foam ear pads Cross-platform USB & 3. 5mm connectivity Discord and TIA-920 certified retractable mic, AW510H.",
    brand: "CORSAIR",
    category: "Accessories",
    price: 99.99,
    countInStock: 3,
    averageRating: 0,
    numReviews: 0,
  },
  {
    name: "Bluetooth cat earphone",
    image: [
      "/images/accessories/bluetooth-cat-earphone-1.jpg",
      "/images/accessories/bluetooth-cat-earphone-2.jpg",
      "/images/accessories/bluetooth-cat-earphone-3.jpg",
    ],
    description:
      "The Razer Mamba Wireless features battery life of up to 50 hours on a single charge. Enjoy enhanced tracking accuracy with our acclaimed Razer 5G Advanced Optical Sensor featuring true 16,000 DPI. Equipped with Razer Mechanical Mouse Switches, experience extended durability of up to 50 million clicks. Get more control with 7 programmable buttons through Razer Synapse 3, and save up to 5 profiles to your mouse with on-board memory.",
    brand: "Razer",
    category: "Accessories",
    price: 99.99,
    countInStock: 3,
    averageRating: 0,
    numReviews: 0,
  },
  {
    name: "Beats solo3 wireless headphones",
    image: [
      "/images/accessories/beats-solo3-wireless-headphones-1.jpg",
      "/images/accessories/beats-solo3-wireless-headphones-2.jpg",
      "/images/accessories/beats-solo3-wireless-headphones-3.jpg",
    ],
    description:
      "The ARGENT K5 RGB Gaming Keyboard is crafted with an aluminum top plate and a streamlined titanium design, combined with 360-degrees of RGB underglow that can be switched among fourteen lighting effects, creating a halo glow surrounding the keyboard. With a splendid asymmetrical curvature design, coupled with a aluminum top plate, the ARGENT K5 RGB allows enthusiasts to not only challenge the game, but game in style as well. Light up your battles with thirteen front-side and fourteen 360-degree underglow lighting effects in 16.8 million true RGB colors. •P/N: GKB-KB5-SSSRUS-01 •COLOR: Titanium •NO. OF GAME PROFILES: SIX •GRAPHICAL UI: YES •WEIGHT: 1465 g •GOLD-PLATED USB: YES •DIMENSIONS: 465 x 161 x 46 mm (L x W x H) •INTERFACE: USB •ANTI-GHOSTING KEYS: YES / N KEY Rollover (USB) •ON-BOARD MEMORY SIZE: 4M bit •POLLING RATE: 1000 HZ •BACK-LIGHT: 16.8 Million RGB Colors •WRIST REST: YES (Magnetic, Detachable) •AUDIO AND USB PASS-THROUGH: YES",
    brand: "Thermaltake",
    category: "Accessories",
    price: 185.99,
    countInStock: 3,
    averageRating: 0,
    numReviews: 0,
  },
];

export default products;
