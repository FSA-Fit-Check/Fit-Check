const express = require("express");
const router = express.Router();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const garments = await prisma.clothing_Item.findMany();
  res.send(garments);
});

router.get("/random", async (req, res) => {
  const tops = await prisma.clothing_Item.findMany({
    where: {
      OR: [
        {
          garment_type: "shirt",
        },
        {
          garment_type: "jacket",
        },
        {
          garment_type: "sweater",
        },
        {
          garment_type: "dress",
        },
        {
          garment_type: "blouse",
        },
      ],
    },
  });

  const randTop = tops[Math.floor(Math.random() * tops.length)];

  const bottoms = await prisma.clothing_Item.findMany({
    where: {
      OR: [
        {
          garment_type: "shorts",
        },
        {
          garment_type: "pants",
        },
        {
          garment_type: "trousers",
        },
        {
          garment_type: "leggings",
        },
        {
          garment_type: "sweatpants",
        },
        {
          garment_type: "skirt",
        },
      ],
      forMen: randTop.forMen,
    },
  });
  const randBottom = bottoms[Math.floor(Math.random() * bottoms.length)];

  // Outfit should be two pieces, unless it's a dress.
  const outfit =
    randTop.garment_type !== "dress" ? [randTop, randBottom] : [randTop];

  res.send(outfit);
});

module.exports = router;
