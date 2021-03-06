items = Item.create([
  {
    name: "Third Eye Prong Cuff",
    size: "Small",
    price: 21100,
    description: "Handcrafted, solid sterling silver, cuff with an incredibly flashy Labradorite stone. Heavy gauge and set in a prong setting. Silver blackener to add depth and polished by hand.",
    adjustable: false,
    customizable: false,
    recycled: false,
    image: "",
    status: "Available"
  },
  {
    name: "Leafy Labradorite Statement Ring",
    size: "9 1/4 US",
    price: 18800,
    description: "Handcrafted, solid sterling silver, statement ring with two very flashy labradorite stones. Handmade mirrored leafs. Silver blackener to add depth and hand polished.",
    adjustable: false,
    customizable: false,
    recycled: false,
    image: "",
    status: "Available"
  }
])
categories = Category.create([
  { name: "Cuff" }, { name: "Ring" }
])

materials = Material.create([
  { name: "Silver" }, { name: "Labradorite"}
])

item1 = Item.first
item2 = Item.second
item1.materials = Material.all
item2.materials = Material.all
item1.category = Category.first
item2.category = Category.second

item1.save
item2.save