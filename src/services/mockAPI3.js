const data = [
  {
    id: 1,
    title: " COMEDIA: At Play in the Fields of the Lord",
    imgURL: "http://dummyimage.com/234x100.png/cc0000/ffffff",
    description:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    price: 3.79,
    category: "comedia",
    stock: 6,
  },
  {
    id: 2,
    title: " COMEDIA: Trailer Park of Terror",
    imgURL: "http://dummyimage.com/201x100.png/dddddd/000000",
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    price: 6.65,
    category: "comedia",
    stock: 6,
  },
  {
    id: 3,
    title: " COMEDIA: Extracted",
    imgURL: "http://dummyimage.com/248x100.png/5fa2dd/ffffff",
    description:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    price: 0.62,
    category: "comedia",
    stock: 6,
  },
  {
    id: 4,
    title: " COMEDIA: Curse of the Puppet Master (Puppet Master 6: The Curse)",
    imgURL: "http://dummyimage.com/230x100.png/5fa2dd/ffffff",
    description:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    price: 2.5,
    category: "comedia",
    stock: 1,
  },
  {
    id: 5,
    title: " COMEDIA: Mister Magoo's Christmas Carol",
    imgURL: "http://dummyimage.com/227x100.png/dddddd/000000",
    description:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    price: 9.45,
    category: "comedia",
    stock: 2,
  },
  {
    id: 6,
    title: " COMEDIA: Big Bad Love",
    imgURL: "http://dummyimage.com/243x100.png/5fa2dd/ffffff",
    description:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    price: 7.24,
    category: "comedia",
    stock: 5,
  },
  {
    id: 7,
    title: " COMEDIA: Papa's Delicate Condition",
    imgURL: "http://dummyimage.com/214x100.png/ff4444/ffffff",
    description:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    price: 4.47,
    category: "comedia",
    stock: 7,
  },
  {
    id: 8,
    title: " COMEDIA: Sky's the Limit, The",
    imgURL: "http://dummyimage.com/202x100.png/dddddd/000000",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    price: 5.74,
    category: "comedia",
    stock: 7,
  },
  {
    id: 9,
    title: " COMEDIA: Ivanhoe",
    imgURL: "http://dummyimage.com/200x100.png/dddddd/000000",
    description:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    price: 1.29,
    category: "comedia",
    stock: 7,
  },
  {
    id: 10,
    title: " COMEDIA: Ice Storm, The",
    imgURL: "http://dummyimage.com/226x100.png/dddddd/000000",
    description:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    price: 3.18,
    category: "comedia",
    stock: 7,
  },
  {
    id: 11,
    title: " TERROR: I Am Trying to Break Your Heart",
    imgURL: "http://dummyimage.com/241x100.png/dddddd/000000",
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    price: 4.63,
    category: "terror",
    stock: 7,
  },
  {
    id: 12,
    title: " TERROR: Planet Ocean",
    imgURL: "http://dummyimage.com/209x100.png/ff4444/ffffff",
    description: "Pellentesque eget nunc.",
    price: 5.99,
    category: "terror",
    stock: 7,
  },
  {
    id: 13,
    title: " TERROR: Muse, The",
    imgURL: "http://dummyimage.com/231x100.png/ff4444/ffffff",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
    price: 7.17,
    category: "terror",
    stock: 7,
  },
  {
    id: 14,
    title: " TERROR: Seventh Horse of the Sun  (Suraj Ka Satvan Ghoda)",
    imgURL: "http://dummyimage.com/240x100.png/5fa2dd/ffffff",
    description:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    price: 8.09,
    category: "terror",
    stock: 1,
  },
  {
    id: 15,
    title: " TERROR: Zero Kelvin (Kjærlighetens kjøtere)",
    imgURL: "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
    description:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    price: 9.18,
    category: "terror",
    stock: 2,
  },
  {
    id: 16,
    title: " TERROR: Panama Hattie",
    imgURL: "http://dummyimage.com/223x100.png/5fa2dd/ffffff",
    description:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
    price: 4.01,
    category: "terror",
    stock: 1,
  },
  {
    id: 17,
    title: " TERROR: Bigamist, The",
    imgURL: "http://dummyimage.com/223x100.png/5fa2dd/ffffff",
    description:
      "Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    price: 0.7,
    category: "terror",
    stock: 6,
  },
  {
    id: 18,
    title: " TERROR: Little Criminals",
    imgURL: "http://dummyimage.com/221x100.png/5fa2dd/ffffff",
    description:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    price: 6.89,
    category: "terror",
    stock: 12,
  },
  {
    id: 19,
    title: " TERROR: United 93",
    imgURL: "http://dummyimage.com/215x100.png/cc0000/ffffff",
    description:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.",
    price: 7.13,
    category: "terror",
    stock: 2,
  },
  {
    id: 20,
    title: " TERROR: Cannibal! The Musical (a.k.a. Alferd Packer: The Musical)",
    imgURL: "http://dummyimage.com/242x100.png/cc0000/ffffff",
    description:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    price: 7.63,
    category: "terror",
    stock: 6,
  },
];

export function getItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 50);
  });
}

export function getItemsByCategory(cat) {
  return new Promise((resolve, reject) => {
    let itemFind = data.filter((item) => {
      return item.category === cat;
    });
    setTimeout(() => {
      if (itemFind) resolve(itemFind);
      else reject(new Error("Categoría no encontrada"));
    }, 50);
  });
}

export function getSingleItem(idItem) {
  return new Promise((resolve, reject) => {
    let itemFind = data.find((item) => {
      return item.id === Number(idItem);
    });
    setTimeout(() => {
      if (itemFind) resolve(itemFind);
      else reject(new Error("item no encontrado"));
    }, 50);
  });
}
